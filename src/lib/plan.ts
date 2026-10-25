import {
  COUPONS,
  GAS_PRICE,
  ITEM_MAP,
  MPG,
  PRICES,
  STORE_MAP,
  STORES,
  TOWN_MAP,
  travelBetween,
  type Store,
} from "@/data/market";

export type Mode = "balanced" | "stretch" | "one";

export type LineIn = { itemId: string; qty: number };

export type PlanInput = {
  townId: string;
  radius: number;
  lines: LineIn[];
  unclipped: string[];
  mode: Mode;
  countGas: boolean;
  pins: Record<string, string>;
  disabled: string[];
  loyalty: string[];
  adPrices?: Record<string, Record<string, number>>;
};

export type Quote = {
  shelf: number;
  unit: number;
  off: number;
  couponId: string | null;
};

export type PlanLine = {
  itemId: string;
  qty: number;
  storeId: string;
  shelf: number;
  unit: number;
  lineTotal: number;
  off: number;
  couponId: string | null;
  pinned: boolean;
};

export type PlanStop = {
  storeId: string;
  lines: PlanLine[];
  basket: number;
  couponOff: number;
  savingsVsAnchor: number;
};

export type Leg = {
  from: string;
  to: string;
  miles: number;
  minutes: number;
};

export type TripPlan = {
  stops: PlanStop[];
  legs: Leg[];
  miles: number;
  driveMinutes: number;
  dwellMinutes: number;
  basket: number;
  couponOff: number;
  gas: number;
  total: number;
  missing: { itemId: string; qty: number; storeId: string | null; miles: number; unit: number | null }[];
  anchorId: string | null;
};

export type OneStop = {
  storeId: string;
  missing: number;
  basket: number;
  gas: number;
  total: number;
  inRange: boolean;
};

export type StoreTip = {
  storeId: string;
  miles: number;
  minutes: number;
  save: number;
};

const DWELL = 10;

export function quote(
  itemId: string,
  storeId: string,
  qty: number,
  unclipped: readonly string[],
  loyalty: readonly string[] = [],
  adShelf?: number,
): Quote | null {
  const regular = PRICES[itemId]?.[storeId];
  if (regular == null) return null;
  const store = STORE_MAP[storeId];
  const program = store?.loyaltyId;
  const banner = store?.banner ?? storeId;
  let best: (typeof COUPONS)[number] | null = null;
  for (const coupon of COUPONS) {
    if (coupon.itemId !== itemId) continue;
    if (!coupon.storeIds.includes(banner) && !coupon.storeIds.includes(storeId)) continue;
    if (qty < coupon.minQty) continue;
    if (unclipped.includes(coupon.id)) continue;
    if (coupon.needsLoyalty && (!program || !loyalty.includes(program))) continue;
    if (!best || coupon.amount > best.amount) best = coupon;
  }
  const couponOff = best ? Math.min(best.amount, Math.max(0, regular - 0.1)) : 0;
  const couponUnit = regular - couponOff;
  const adOk = typeof adShelf === "number" && adShelf < couponUnit && adShelf >= regular * 0.45;
  if (adOk) {
    const off = Math.round((regular - adShelf) * 100) / 100;
    return { shelf: regular, unit: adShelf, off, couponId: "weekly-ad" };
  }
  const unit = Math.round(couponUnit * 100) / 100;
  return { shelf: regular, unit, off: couponOff, couponId: couponOff > 0 && best ? best.id : null };
}

function detourGas(miles: number, countGas: boolean): number {
  if (!countGas) return 0;
  return ((miles * 2 * 0.72) / MPG) * GAS_PRICE;
}

function roundGas(miles: number, countGas: boolean): number {
  if (!countGas || miles <= 0) return 0;
  return Math.round((miles / MPG) * GAS_PRICE * 100) / 100;
}

function thresholdFor(mode: Mode): number {
  if (mode === "one") return Number.POSITIVE_INFINITY;
  if (mode === "stretch") return 1;
  return 5;
}

function tour(home: { lat: number; lng: number }, stores: Store[]): { order: Store[]; legs: Leg[]; miles: number; minutes: number } {
  if (stores.length === 0) {
    return { order: [], legs: [], miles: 0, minutes: 0 };
  }
  const remaining = [...stores];
  const order: Store[] = [];
  let cursor = home;
  while (remaining.length) {
    let best = 0;
    let bestD = Infinity;
    for (let i = 0; i < remaining.length; i++) {
      const d = travelBetween(cursor, remaining[i]).miles;
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    }
    const next = remaining.splice(best, 1)[0];
    order.push(next);
    cursor = next;
  }

  const lengthOf = (seq: Store[]) => {
    let miles = 0;
    let cur = home;
    for (const stop of seq) {
      miles += travelBetween(cur, stop).miles;
      cur = stop;
    }
    miles += travelBetween(cur, home).miles;
    return miles;
  };

  let improved = true;
  let guard = 0;
  while (improved && guard < 12) {
    improved = false;
    guard += 1;
    for (let i = 0; i < order.length - 1; i++) {
      for (let k = i + 1; k < order.length; k++) {
        const next = order.slice(0, i).concat(order.slice(i, k + 1).reverse(), order.slice(k + 1));
        if (lengthOf(next) + 0.05 < lengthOf(order)) {
          order.splice(0, order.length, ...next);
          improved = true;
        }
      }
    }
  }

  const legs: Leg[] = [];
  let miles = 0;
  let minutes = 0;
  let curLabel = "home";
  let cur = home;
  for (const stop of order) {
    const hop = travelBetween(cur, stop);
    legs.push({ from: curLabel, to: stop.id, miles: hop.miles, minutes: hop.minutes });
    miles += hop.miles;
    minutes += hop.minutes;
    cur = stop;
    curLabel = stop.id;
  }
  const back = travelBetween(cur, home);
  legs.push({ from: curLabel, to: "home", miles: back.miles, minutes: back.minutes });
  miles = Math.round((miles + back.miles) * 10) / 10;
  minutes += back.minutes;
  return { order, legs, miles, minutes };
}

function nearestCarrier(
  itemId: string,
  qty: number,
  home: { lat: number; lng: number },
  unclipped: readonly string[],
  loyalty: readonly string[],
  blocked: ReadonlySet<string>,
  adPrices?: PlanInput["adPrices"],
): { storeId: string; miles: number; unit: number } | null {
  let best: { storeId: string; miles: number; unit: number } | null = null;
  for (const store of STORES) {
    if (blocked.has(store.id)) continue;
    const ad = store.banner ? adPrices?.[itemId]?.[store.banner] : undefined;
    const q = quote(itemId, store.id, qty, unclipped, loyalty, ad);
    if (!q) continue;
    const miles = travelBetween(home, store).miles;
    if (!best || miles < best.miles) best = { storeId: store.id, miles, unit: q.unit };
  }
  return best;
}

export function planTrip(input: PlanInput): { trip: TripPlan; oneStops: OneStop[]; tips: StoreTip[] } {
  const town = TOWN_MAP[input.townId] ?? TOWN_MAP.thomaston;
  const home = { lat: town.lat, lng: town.lng };
  const lines = input.lines.filter((line) => line.qty > 0 && ITEM_MAP[line.itemId]);
  const unclipped = input.unclipped;
  const loyalty = input.loyalty;
  const blocked = new Set(input.disabled);
  const ranked = STORES.map((store) => ({ store, ...travelBetween(home, store) })).sort((a, b) => a.miles - b.miles);
  const inRange = ranked.filter((row) => row.miles <= input.radius + 0.05 && !blocked.has(row.store.id)).map((row) => row.store);

  const scoreOne = (store: Store) => {
    let basket = 0;
    let missing = 0;
    for (const line of lines) {
      const q = quote(line.itemId, store.id, line.qty, unclipped, loyalty, input.adPrices?.[line.itemId]?.[store.banner]);
      if (!q) missing += 1;
      else basket += q.unit * line.qty;
    }
    basket = Math.round(basket * 100) / 100;
    const hop = travelBetween(home, store);
    const gas = roundGas(hop.miles * 2, input.countGas);
    return { missing, basket, gas, total: Math.round((basket + gas) * 100) / 100 };
  };

  const oneStops: OneStop[] = ranked.map(({ store }) => {
    const score = lines.length ? scoreOne(store) : { missing: 0, basket: 0, gas: 0, total: 0 };
    return { storeId: store.id, inRange: inRange.some((s) => s.id === store.id), ...score };
  });

  const emptyMissing = lines.map((line) => {
    const near = nearestCarrier(line.itemId, line.qty, home, unclipped, loyalty, blocked, input.adPrices);
    return {
      itemId: line.itemId,
      qty: line.qty,
      storeId: near?.storeId ?? null,
      miles: near?.miles ?? 0,
      unit: near?.unit ?? null,
    };
  });

  if (!lines.length || !inRange.length) {
    return {
      trip: blank(emptyMissing),
      oneStops,
      tips: [],
    };
  }

  const anchorRow = oneStops
    .filter((row) => row.inRange && row.missing === 0)
    .sort((a, b) => a.total - b.total)[0];
  const anchorId = anchorRow?.storeId ?? inRange[0].id;
  const threshold = thresholdFor(input.mode);
  const forced = [
    ...new Set(
      lines
        .map((line) => input.pins[line.itemId])
        .filter((id): id is string => Boolean(id && inRange.some((store) => store.id === id))),
    ),
  ];

  const cache = new Map<string, Evaluated>();
  const evaluate = (ids: string[]): Evaluated => {
    const activeIds = [...new Set([...ids, ...forced])].filter((id) => inRange.some((store) => store.id === id) || forced.includes(id));
    const key = activeIds.slice().sort().join("|");
    const hit = cache.get(key);
    if (hit) return hit;
    const active = new Set(activeIds);
    const assigned = assignLines(lines, active, anchorId, input.pins, inRange, unclipped, loyalty, input.adPrices);
    const used = [...new Set(assigned.lines.map((line) => line.storeId))];
    const routed = tour(home, used.map((id) => STORE_MAP[id]));
    const basket = roundMoney(assigned.lines.reduce((sum, line) => sum + line.lineTotal, 0));
    const couponOff = roundMoney(assigned.lines.reduce((sum, line) => sum + line.off * line.qty, 0));
    const gas = roundGas(routed.miles, input.countGas);
    const evaluated: Evaluated = {
      used,
      lines: assigned.lines,
      missing: assigned.missing,
      legs: routed.legs,
      miles: routed.miles,
      minutes: routed.minutes,
      basket,
      couponOff,
      gas,
      total: roundMoney(basket + gas),
    };
    cache.set(key, evaluated);
    return evaluated;
  };

  const searchSet =
    input.mode === "one"
      ? inRange
      : [
          ...inRange.slice(0, 12),
          ...inRange.slice(12).filter((store) => forced.includes(store.id)),
        ];
  const seeds =
    input.mode === "one"
      ? searchSet.map((store) => [store.id])
      : combinations(searchSet, 4).map((group) => group.map((store) => store.id));
  const evals = seeds.map((ids) => evaluate(ids));

  const worthKeeping = (plan: Evaluated) => {
    if (plan.used.length <= 1) return true;
    if (input.mode === "one") return plan.used.every((id) => forced.includes(id));
    for (const id of plan.used) {
      if (forced.includes(id)) continue;
      const without = evaluate(plan.used.filter((storeId) => storeId !== id));
      const penalty = Math.max(0, without.missing.length - plan.missing.length) * 40;
      const gain = without.total + penalty - plan.total;
      if (gain + 0.001 < threshold) return false;
    }
    return true;
  };

  const viable = evals.filter(worthKeeping);
  const pool = viable.length ? viable : evals;
  pool.sort(
    (a, b) =>
      a.missing.length - b.missing.length || a.total - b.total || a.used.length - b.used.length || a.miles - b.miles,
  );
  const best = pool[0];
  const order = best.legs.filter((leg) => leg.to !== "home").map((leg) => leg.to);

  const stops: PlanStop[] = order.map((storeId) => {
    const stopLines = best.lines.filter((line) => line.storeId === storeId);
    const basket = roundMoney(stopLines.reduce((sum, line) => sum + line.lineTotal, 0));
    const couponOff = roundMoney(stopLines.reduce((sum, line) => sum + line.off * line.qty, 0));
    let savingsVsAnchor = 0;
    for (const line of stopLines) {
      const there = quote(line.itemId, anchorId, line.qty, unclipped, loyalty, input.adPrices?.[line.itemId]?.[STORE_MAP[anchorId]?.banner ?? ""]);
      if (!there) savingsVsAnchor += line.lineTotal;
      else savingsVsAnchor += (there.unit - line.unit) * line.qty;
    }
    return { storeId, lines: stopLines, basket, couponOff, savingsVsAnchor: roundMoney(savingsVsAnchor) };
  });

  const missing = best.missing.map((line) => {
    const near = nearestCarrier(line.itemId, line.qty, home, unclipped, loyalty, blocked, input.adPrices);
    return {
      itemId: line.itemId,
      qty: line.qty,
      storeId: near?.storeId ?? null,
      miles: near?.miles ?? 0,
      unit: near?.unit ?? null,
    };
  });

  return {
    trip: {
      stops,
      legs: best.legs,
      miles: best.miles,
      driveMinutes: best.minutes,
      dwellMinutes: stops.length * DWELL,
      basket: best.basket,
      couponOff: best.couponOff,
      gas: best.gas,
      total: best.total,
      missing,
      anchorId,
    },
    oneStops,
    tips: outsideTips(lines, inRange, home, unclipped, loyalty, blocked, input.countGas, input.adPrices),
  };
}

type Evaluated = {
  used: string[];
  lines: PlanLine[];
  missing: LineIn[];
  legs: Leg[];
  miles: number;
  minutes: number;
  basket: number;
  couponOff: number;
  gas: number;
  total: number;
};

function combinations<T>(items: T[], max: number): T[][] {
  const out: T[][] = [];
  const walk = (start: number, acc: T[]) => {
    if (acc.length) out.push(acc.slice());
    if (acc.length === max) return;
    for (let i = start; i < items.length; i++) {
      acc.push(items[i]);
      walk(i + 1, acc);
      acc.pop();
    }
  };
  walk(0, []);
  return out;
}

function outsideTips(
  lines: LineIn[],
  inRange: Store[],
  home: { lat: number; lng: number },
  unclipped: readonly string[],
  loyalty: readonly string[],
  blocked: ReadonlySet<string>,
  countGas: boolean,
  adPrices?: PlanInput["adPrices"],
): StoreTip[] {
  const inside = new Set(inRange.map((store) => store.id));
  const tips: StoreTip[] = [];
  for (const store of STORES) {
    if (inside.has(store.id) || blocked.has(store.id)) continue;
    let save = 0;
    for (const line of lines) {
      const here = quote(line.itemId, store.id, line.qty, unclipped, loyalty, adPrices?.[line.itemId]?.[store.banner]);
      if (!here) continue;
      let bestIn = Infinity;
      for (const other of inRange) {
        const q = quote(line.itemId, other.id, line.qty, unclipped, loyalty, adPrices?.[line.itemId]?.[other.banner]);
        if (q && q.unit < bestIn) bestIn = q.unit;
      }
      if (bestIn < Infinity && here.unit + 0.009 < bestIn) save += (bestIn - here.unit) * line.qty;
    }
    const hop = travelBetween(home, store);
    const net = save - detourGas(hop.miles, countGas);
    if (net >= 3) tips.push({ storeId: store.id, miles: hop.miles, minutes: hop.minutes, save: roundMoney(net) });
  }
  tips.sort((a, b) => b.save - a.save);
  return tips.slice(0, 2);
}

function assignLines(
  lines: LineIn[],
  active: Set<string>,
  anchorId: string,
  pins: Record<string, string>,
  inRange: Store[],
  unclipped: readonly string[],
  loyalty: readonly string[],
  adPrices?: PlanInput["adPrices"],
): { lines: PlanLine[]; missing: LineIn[] } {
  const planned: PlanLine[] = [];
  const missing: LineIn[] = [];
  const rangeIds = new Set(inRange.map((store) => store.id));
  for (const line of lines) {
    const pin = pins[line.itemId];
    if (pin && rangeIds.has(pin) && active.has(pin)) {
      const q = quote(line.itemId, pin, line.qty, unclipped, loyalty, adPrices?.[line.itemId]?.[STORE_MAP[pin]?.banner ?? ""]);
      if (q) {
        planned.push(toLine(line, pin, q, true));
        continue;
      }
    }
    let best: { storeId: string; q: Quote } | null = null;
    const pool = active.size ? [...active] : [anchorId];
    for (const storeId of pool) {
      const q = quote(line.itemId, storeId, line.qty, unclipped, loyalty, adPrices?.[line.itemId]?.[STORE_MAP[storeId]?.banner ?? ""]);
      if (!q) continue;
      if (!best || q.unit < best.q.unit - 0.0001) best = { storeId, q };
    }
    if (!best) missing.push(line);
    else planned.push(toLine(line, best.storeId, best.q, false));
  }
  return { lines: planned, missing };
}

function toLine(line: LineIn, storeId: string, q: Quote, pinned: boolean): PlanLine {
  return {
    itemId: line.itemId,
    qty: line.qty,
    storeId,
    shelf: q.shelf,
    unit: q.unit,
    lineTotal: roundMoney(q.unit * line.qty),
    off: q.off,
    couponId: q.couponId,
    pinned,
  };
}

function roundMoney(n: number): number {
  return Math.round(n * 100) / 100;
}

function blank(missing: TripPlan["missing"]): TripPlan {
  return {
    stops: [],
    legs: [],
    miles: 0,
    driveMinutes: 0,
    dwellMinutes: 0,
    basket: 0,
    couponOff: 0,
    gas: 0,
    total: 0,
    missing,
    anchorId: null,
  };
}

export function legBetween(legs: Leg[], to: string): Leg | undefined {
  return legs.find((leg) => leg.to === to);
}
