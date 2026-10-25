import { createServerFn } from "@tanstack/react-start";
import { ITEMS, PRICES, STORES } from "@/data/market";

export type WeeklyDeal = {
  itemId: string;
  banner: string;
  merchant: string;
  product: string;
  price: number;
  ends: string;
};

const MATCH: { banner: string; merchant: string }[] = [
  { banner: "adams", merchant: "adams hometown market" },
  { banner: "terry", merchant: "adams hometown market" },
  { banner: "dg", merchant: "dollar general" },
  { banner: "stop", merchant: "stop & shop" },
  { banner: "shoprite", merchant: "shoprite" },
  { banner: "aldi", merchant: "aldi" },
  { banner: "bigy", merchant: "big y" },
  { banner: "m32", merchant: "price chopper" },
  { banner: "m32", merchant: "market 32" },
  { banner: "walmart", merchant: "walmart" },
  { banner: "publix", merchant: "publix" },
  { banner: "winndixie", merchant: "winn-dixie" },
];

const HOUSE: Record<string, string[]> = {
  stop: ["stop & shop"],
  dg: ["clover valley", "true living", "smart & simple"],
  bigy: ["simply done", "clear value", "food club"],
  m32: ["pics"],
  walmart: ["great value"],
  publix: ["publix"],
  winndixie: ["se grocers"],
  shoprite: ["bowl & basket", "wholesome pantry"],
  adams: ["iga"],
  terry: ["iga"],
  aldi: [],
};

const SKIP = new Set(["and", "the", "per", "with", "for", "from", "pack", "size", "style", "value", "select"]);
const WEAK = new Set(["milk", "bread", "beef", "pork", "eggs", "cheese", "chicken", "turkey", "cream", "juice", "water", "rice", "soup", "chips", "sauce", "beans", "bags"]);

type RawFlyer = { id: number; merchant: string; name: string; valid_from: string; valid_to: string };
type FlyerItem = { name?: string | null; brand?: string | null; price?: string | null; valid_to?: string };

const cache = new Map<string, { at: number; rows: WeeklyDeal[] }>();
const HOUR = 60 * 60 * 1000;

function bannersFor(merchant: string): string[] {
  const name = merchant.toLowerCase();
  if (name === "publix liquors") return [];
  const banners: string[] = [];
  for (const rule of MATCH) {
    const hit = name === rule.merchant || (rule.merchant === "walmart" && name.startsWith("walmart "));
    if (hit && !banners.includes(rule.banner)) banners.push(rule.banner);
  }
  return banners;
}

function norm(value: string): string {
  return value.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
}

function hasWord(hay: string, word: string): boolean {
  const stem = word.endsWith("s") ? word.slice(0, -1) : word;
  return new RegExp(`\\b${stem}s?\\b`).test(hay);
}

function fits(adName: string, itemName: string): boolean {
  if (/\bor\b/i.test(adName)) return false;
  const hay = norm(adName);
  const words = norm(itemName)
    .split(" ")
    .filter((word) => /^[a-z]{3,}$/.test(word) && !SKIP.has(word));
  if (words.length === 0) return false;
  if (words.length === 1 && WEAK.has(words[0])) return false;
  return words.every((word) => hasWord(hay, word));
}

function house(banner: string, product: string, brand: string): boolean {
  if (banner === "aldi") return true;
  const marks = HOUSE[banner] ?? [];
  const hay = `${brand} ${product}`.toLowerCase();
  return marks.some((mark) => hay.includes(mark));
}

function day(value: string): string {
  return new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "America/New_York" });
}

function estimate(itemId: string, banner: string): number | null {
  const store = STORES.find((row) => row.banner === banner);
  const price = store ? PRICES[itemId]?.[store.id] : null;
  return typeof price === "number" ? price : null;
}

export const weeklyDeals = createServerFn({ method: "GET" })
  .validator((zip: string) => {
    if (!/^\d{5}$/.test(zip)) throw new Error("Need a 5-digit ZIP");
    return zip;
  })
  .handler(async ({ data: zip }): Promise<WeeklyDeal[]> => {
    const key = `v2:${zip}`;
    const hit = cache.get(key);
    if (hit && Date.now() - hit.at < HOUR) return hit.rows;
    const listed = await fetch(`https://backflipp.wishabi.com/flipp/flyers?locale=en-us&postal_code=${zip}`, {
      headers: { accept: "application/json", "user-agent": "CouponKing/1.0" },
    });
    if (!listed.ok) return hit?.rows ?? [];
    const body = (await listed.json()) as { flyers?: RawFlyer[] };
    const now = Date.now();
    const chosen = new Map<string, RawFlyer>();
    for (const flyer of body.flyers ?? []) {
      const banners = bannersFor(flyer.merchant);
      if (banners.length === 0) continue;
      const from = Date.parse(flyer.valid_from);
      const to = Date.parse(flyer.valid_to);
      const current = from <= now && now <= to;
      if (!current) continue;
      for (const banner of banners) {
        const prev = chosen.get(banner);
        if (!prev || /weekly|circular|flyer/i.test(flyer.name)) chosen.set(banner, flyer);
      }
    }
    const seen = new Map<number, WeeklyDeal[]>();
    const rows: WeeklyDeal[] = [];
    for (const [banner, flyer] of chosen) {
      let parsed = seen.get(flyer.id);
      if (!parsed) {
        parsed = [];
        seen.set(flyer.id, parsed);
        const detail = await fetch(`https://backflipp.wishabi.com/flipp/flyers/${flyer.id}?locale=en-us`, {
          headers: { accept: "application/json", "user-agent": "CouponKing/1.0" },
        });
        if (!detail.ok) continue;
        const page = (await detail.json()) as { items?: FlyerItem[] };
        const best = new Map<string, { row: WeeklyDeal; house: boolean }>();
        for (const item of page.items ?? []) {
          if (!item.name || !item.price || item.price.includes("/")) continue;
          const price = Number(item.price);
          if (!Number.isFinite(price) || price <= 0) continue;
          const matches = ITEMS.filter((catalog) => fits(item.name ?? "", catalog.name));
          if (matches.length !== 1) continue;
          const catalog = matches[0];
          const row: WeeklyDeal = {
            itemId: catalog.id,
            banner,
            merchant: flyer.merchant,
            product: item.name,
            price,
            ends: item.valid_to ? day(item.valid_to) : day(flyer.valid_to),
          };
          const next = { row, house: house(banner, item.name, item.brand ?? "") };
          const prev = best.get(catalog.id);
          if (!prev || (next.house && !prev.house) || (next.house === prev.house && next.row.price < prev.row.price)) {
            best.set(catalog.id, next);
          }
        }
        parsed = [...best.values()].map((deal) => deal.row);
        seen.set(flyer.id, parsed);
      }
      for (const row of parsed) {
        const regular = estimate(row.itemId, banner);
        if (regular == null || row.price >= regular || row.price < regular * 0.45) continue;
        if (rows.some((have) => have.itemId === row.itemId && have.banner === banner)) continue;
        rows.push({ ...row, banner });
      }
    }
    cache.set(key, { at: Date.now(), rows });
    return rows;
  });
