import { createServerFn } from "@tanstack/react-start";

export type StoreFlyer = {
  banner: string;
  merchant: string;
  name: string;
  label: string;
  image: string;
  href: string;
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

type RawFlyer = {
  id: number;
  merchant: string;
  name: string;
  valid_from: string;
  valid_to: string;
  thumbnail_url?: string;
};

const cache = new Map<string, { at: number; rows: StoreFlyer[] }>();
const HOUR = 60 * 60 * 1000;

function hits(merchant: string, key: string): boolean {
  const name = merchant.toLowerCase();
  if (key === "publix") return name === "publix";
  if (key === "walmart") return name === "walmart" || name.startsWith("walmart ");
  return name === key;
}

function rank(name: string, from: number, to: number, now: number): number {
  const current = from <= now && now <= to;
  let score = current ? 10 : 0;
  if (/weekly|circular|flyer/i.test(name)) score += 4;
  if (/\bad\b/i.test(name)) score += 2;
  if (/liquor|wireless/i.test(name)) score -= 8;
  if (/next week|sneak|preview/i.test(name) && !current) score -= 3;
  if (!current && from > now) score += 1;
  return score;
}

function dates(from: string, to: string): string {
  const start = new Date(from);
  const end = new Date(to);
  const month = (value: Date) => value.toLocaleDateString("en-US", { month: "short", timeZone: "America/New_York" });
  const day = (value: Date) => value.toLocaleDateString("en-US", { day: "numeric", timeZone: "America/New_York" });
  if (month(start) === month(end)) return `${month(start)} ${day(start)}–${day(end)}`;
  return `${month(start)} ${day(start)}–${month(end)} ${day(end)}`;
}

export const flyersForZip = createServerFn({ method: "GET" })
  .validator((zip: string) => {
    if (!/^\d{5}$/.test(zip)) throw new Error("Need a 5-digit ZIP");
    return zip;
  })
  .handler(async ({ data: zip }): Promise<StoreFlyer[]> => {
    const hit = cache.get(zip);
    if (hit && Date.now() - hit.at < HOUR) return hit.rows;
    const res = await fetch(`https://backflipp.wishabi.com/flipp/flyers?locale=en-us&postal_code=${zip}`, {
      headers: { accept: "application/json", "user-agent": "CouponKing/1.0" },
    });
    if (!res.ok) return hit?.rows ?? [];
    const body = (await res.json()) as { flyers?: RawFlyer[] };
    const now = Date.now();
    const rows: StoreFlyer[] = [];
    for (const rule of MATCH) {
      let best: RawFlyer | null = null;
      let bestScore = 0;
      for (const flyer of body.flyers ?? []) {
        if (!flyer.thumbnail_url || !hits(flyer.merchant, rule.merchant)) continue;
        const score = rank(flyer.name, Date.parse(flyer.valid_from), Date.parse(flyer.valid_to), now);
        if (score > bestScore) {
          best = flyer;
          bestScore = score;
        }
      }
      if (!best?.thumbnail_url) continue;
      rows.push({
        banner: rule.banner,
        merchant: best.merchant,
        name: best.name,
        label: dates(best.valid_from, best.valid_to),
        image: best.thumbnail_url.replace(/^http:\/\//, "https://"),
        href: `https://flipp.com/flyer/${best.id}?postal_code=${zip}`,
      });
    }
    cache.set(zip, { at: Date.now(), rows });
    return rows;
  });

export type BrandDeal = {
  banner: string;
  merchant: string;
  product: string;
  price: number;
  label: string;
};

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

const MERCHANT_BANNER: [string, string][] = [
  ["stop & shop", "stop"],
  ["dollar general", "dg"],
  ["big y", "bigy"],
  ["price chopper", "m32"],
  ["market 32", "m32"],
  ["walmart", "walmart"],
  ["publix", "publix"],
  ["winn-dixie", "winndixie"],
  ["shoprite", "shoprite"],
  ["adams hometown market", "adams"],
  ["aldi", "aldi"],
];

const NAME_BRAND = /\b(bounty|charmin|scott|viva|sparkle|brawny|wonder|land o lakes|vital farms|boar's head)\b/i;

type AdItem = {
  name?: string | null;
  merchant_name?: string;
  current_price?: number | null;
  valid_to?: string;
  sale_story?: string | null;
  post_price_text?: string | null;
};

const dealCache = new Map<string, { at: number; rows: BrandDeal[] }>();

function bannerFor(merchant: string): string | null {
  const name = merchant.toLowerCase();
  if (name === "publix liquors") return null;
  for (const [merchantName, banner] of MERCHANT_BANNER) {
    if (name === merchantName) return banner;
  }
  return null;
}

function isHouseBrand(banner: string, product: string): boolean {
  if (NAME_BRAND.test(product)) return false;
  const marks = HOUSE[banner] ?? [];
  if (marks.length === 0) return banner === "aldi";
  const hay = product.toLowerCase();
  return marks.some((mark) => hay.includes(mark));
}

export const storeBrandDeals = createServerFn({ method: "GET" })
  .validator((input: { zip: string; query: string }) => {
    const zip = String(input?.zip ?? "");
    const query = String(input?.query ?? "").trim().slice(0, 40);
    if (!/^\d{5}$/.test(zip) || query.length < 3) throw new Error("Need a ZIP and an item");
    return { zip, query };
  })
  .handler(async ({ data }): Promise<BrandDeal[]> => {
    const key = `${data.zip}|${data.query.toLowerCase()}`;
    const hit = dealCache.get(key);
    if (hit && Date.now() - hit.at < HOUR) return hit.rows;
    const url = `https://backflipp.wishabi.com/flipp/items/search?locale=en-us&postal_code=${data.zip}&q=${encodeURIComponent(data.query)}`;
    const res = await fetch(url, { headers: { accept: "application/json", "user-agent": "CouponKing/1.0" } });
    if (!res.ok) return hit?.rows ?? [];
    const body = (await res.json()) as { items?: AdItem[] };
    const words = data.query.toLowerCase().split(/\s+/).filter((word) => word.length > 3);
    const best = new Map<string, BrandDeal>();
    for (const item of body.items ?? []) {
      if (!item.name || typeof item.current_price !== "number" || item.current_price <= 0) continue;
      if (/\bor\b/i.test(item.name)) continue;
      if (/when you spend|digital coupon/i.test(item.sale_story ?? "")) continue;
      const banner = bannerFor(item.merchant_name ?? "");
      if (!banner || !isHouseBrand(banner, item.name)) continue;
      const hay = item.name.toLowerCase();
      if (words.length > 0 && !words.some((word) => hay.includes(word))) continue;
      const deal: BrandDeal = {
        banner,
        merchant: item.merchant_name ?? banner,
        product: item.name,
        price: item.current_price,
        label: item.valid_to
          ? new Date(item.valid_to).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "America/New_York" })
          : "this week",
      };
      const prev = best.get(banner);
      if (!prev || deal.price < prev.price) best.set(banner, deal);
    }
    const rows = [...best.values()];
    dealCache.set(key, { at: Date.now(), rows });
    return rows;
  });
