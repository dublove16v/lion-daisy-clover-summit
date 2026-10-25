import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Check,
  List,
  MapPin,
  Menu,
  Minus,
  Plus,
  Route,
  Search,
  Ticket,
  X,
} from "lucide-react";
import {
  CIRCULAR,
  COUPONS,
  GAS_PRICE,
  ITEMS,
  ITEM_MAP,
  LOYALTY_PROGRAMS,
  MPG,
  STARTER,
  STORE_MAP,
  STORES,
  TOWNS,
  TOWN_MAP,
  mapsUrl,
  money,
  qtyLabel,
  travelBetween,
  type Category,
} from "@/data/market";
import { planTrip, quote, type Mode, type PlanLine, type TripPlan } from "@/lib/plan";
import { flyersForZip, storeBrandDeals, type BrandDeal, type StoreFlyer } from "@/lib/flyers";
import { weeklyDeals, type WeeklyDeal } from "@/lib/deals";

type Tab = "list" | "trip" | "deals";
type Line = { itemId: string; qty: number };
type Panel = null | "where" | "add" | "stores" | { type: "item"; id: string };

type Saved = {
  townId: string;
  radius: number;
  lines: Line[];
  unclipped: string[];
  mode: Mode;
  countGas: boolean;
  pins: Record<string, string>;
  checks: Record<string, boolean>;
  disabled: string[];
  cards: Record<string, string>;
};

const KEY = "cartwright-v1";

const MODES: { id: Mode; label: string; hint: string }[] = [
  { id: "stretch", label: "Chase", hint: "Add a stop when it saves at least $1 after the extra gas." },
  { id: "balanced", label: "Balanced", hint: "Add a stop only when it saves at least $5 after the extra gas." },
  { id: "one", label: "One store", hint: "Shop the whole list at the single cheapest store in range." },
];

function loadSaved(): Saved | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as Partial<Saved>;
    if (!data || typeof data !== "object") return null;
    const townId = typeof data.townId === "string" && TOWN_MAP[data.townId] ? data.townId : "thomaston";
    const radius = typeof data.radius === "number" ? Math.min(25, Math.max(3, Math.round(data.radius))) : 12;
    const lines = Array.isArray(data.lines)
      ? data.lines.filter((line) => line && ITEM_MAP[line.itemId] && line.qty > 0).map((line) => ({
          itemId: line.itemId,
          qty: Math.min(24, Math.round(line.qty)),
        }))
      : STARTER;
    const mode: Mode = data.mode === "stretch" || data.mode === "one" || data.mode === "balanced" ? data.mode : "balanced";
    const pins = data.pins && typeof data.pins === "object" ? cleanRecord(data.pins) : {};
    const checks = data.checks && typeof data.checks === "object" ? cleanFlags(data.checks) : {};
    const disabled = Array.isArray(data.disabled)
      ? data.disabled.filter((id) => typeof id === "string" && STORE_MAP[id])
      : [];
    const cards = data.cards && typeof data.cards === "object" ? cleanRecord(data.cards) : {};
    return {
      townId,
      radius,
      lines: lines.length ? lines : STARTER,
      unclipped: Array.isArray(data.unclipped) ? data.unclipped.filter((id) => typeof id === "string") : [],
      mode,
      countGas: data.countGas !== false,
      pins,
      checks,
      disabled,
      cards,
    };
  } catch {
    return null;
  }
}

function cleanRecord(value: object): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [key, entry] of Object.entries(value)) {
    if (typeof entry === "string" && entry.trim()) out[key] = entry.trim().slice(0, 24);
  }
  return out;
}

function cleanFlags(value: object): Record<string, boolean> {
  const out: Record<string, boolean> = {};
  for (const [key, entry] of Object.entries(value)) {
    if (entry === true) out[key] = true;
  }
  return out;
}

function enrolled(cards: Record<string, string>): string[] {
  return Object.entries(cards)
    .filter(([, value]) => value.trim().length >= 4)
    .map(([id]) => id);
}

function cardNudges(
  lines: Line[],
  stores: { id: string; banner: string }[],
  disabled: string[],
  loyalty: string[],
): string[] {
  const banners = new Set(stores.filter((store) => !disabled.includes(store.id)).map((store) => store.banner));
  const have = new Set(lines.map((line) => line.itemId));
  const notes: string[] = [];
  if (!loyalty.includes("adams-rewards") && (banners.has("adams") || banners.has("terry")) && (have.has("beef") || have.has("apples"))) {
    notes.push("Adams Rewards unlocks the card price on ground beef and apples.");
  }
  if (!loyalty.includes("go-rewards") && banners.has("stop") && (have.has("chicken") || have.has("cereal"))) {
    notes.push("GO Rewards unlocks the Stop & Shop digital coupons.");
  }
  if (!loyalty.includes("club-publix") && banners.has("publix") && (have.has("chicken") || have.has("cereal"))) {
    notes.push("Club Publix unlocks the Publix digital coupons.");
  }
  if (!loyalty.includes("winn-dixie") && banners.has("winndixie") && have.has("beef")) {
    notes.push("Winn-Dixie Rewards unlocks the ground beef deal.");
  }
  return notes;
}

function placeName(store: { name: string; aka?: string }): string {
  return store.aka ? `${store.name} · ${store.aka}` : store.name;
}

function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export function GroceryApp() {
  const [townId, setTownId] = useState("thomaston");
  const [radius, setRadius] = useState(12);
  const [lines, setLines] = useState<Line[]>(STARTER);
  const [unclipped, setUnclipped] = useState<string[]>([]);
  const [mode, setMode] = useState<Mode>("balanced");
  const [countGas, setCountGas] = useState(true);
  const [pins, setPins] = useState<Record<string, string>>({});
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [disabled, setDisabled] = useState<string[]>([]);
  const [cards, setCards] = useState<Record<string, string>>({});
  const [tab, setTab] = useState<Tab>("list");
  const [panel, setPanel] = useState<Panel>(null);
  const [query, setQuery] = useState("");
  const [ready, setReady] = useState(false);
  const [adDeals, setAdDeals] = useState<WeeklyDeal[]>([]);
  const [adsReady, setAdsReady] = useState(false);

  useEffect(() => {
    const saved = loadSaved();
    if (saved) {
      setTownId(saved.townId);
      setRadius(saved.radius);
      setLines(saved.lines);
      setUnclipped(saved.unclipped);
      setMode(saved.mode);
      setCountGas(saved.countGas);
      setPins(saved.pins);
      setChecks(saved.checks);
      setDisabled(saved.disabled);
      setCards(saved.cards);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!panel) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPanel(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [panel]);

  useEffect(() => {
    if (!ready) return;
    const payload: Saved = { townId, radius, lines, unclipped, mode, countGas, pins, checks, disabled, cards };
    localStorage.setItem(KEY, JSON.stringify(payload));
  }, [ready, townId, radius, lines, unclipped, mode, countGas, pins, checks, disabled, cards]);

  const town = TOWN_MAP[townId] ?? TOWNS[0];
  useEffect(() => {
    setAdsReady(false);
    let cancel = false;
    weeklyDeals({ data: town.zip })
      .then((rows) => {
        if (!cancel) {
          setAdDeals(rows);
          setAdsReady(true);
        }
      })
      .catch(() => {
        if (!cancel) {
          setAdDeals([]);
          setAdsReady(true);
        }
      });
    return () => {
      cancel = true;
    };
  }, [town.zip]);
  const adPrices = useMemo(() => {
    const table: Record<string, Record<string, number>> = {};
    for (const deal of adDeals) {
      const row = table[deal.itemId] ?? {};
      row[deal.banner] = deal.price;
      table[deal.itemId] = row;
    }
    return table;
  }, [adDeals]);
  const result = useMemo(
    () => planTrip({ townId, radius, lines, unclipped, mode, countGas, pins, disabled, loyalty: enrolled(cards), adPrices }),
    [townId, radius, lines, unclipped, mode, countGas, pins, disabled, cards, adPrices],
  );
  const { trip, oneStops, tips } = result;

  const placed = useMemo(() => {
    const map = new Map<string, { storeId: string; line: PlanLine }>();
    for (const stop of trip.stops) {
      for (const line of stop.lines) map.set(line.itemId, { storeId: stop.storeId, line });
    }
    return map;
  }, [trip]);

  const inRange = useMemo(() => {
    return STORES.map((store) => ({ store, hop: travelBetween(town, store) }))
      .filter((row) => row.hop.miles <= radius + 0.05)
      .sort((a, b) => a.hop.miles - b.hop.miles);
  }, [town, radius]);

  const fullOnes = oneStops
    .filter((row) => row.inRange && row.missing === 0 && lines.length > 0)
    .sort((a, b) => a.total - b.total);
  const bestOne = fullOnes[0];
  const saveVsOne = bestOne ? Math.round((bestOne.total - trip.total) * 100) / 100 : 0;

  function setQty(itemId: string, qty: number) {
    setLines((current) => {
      if (qty <= 0) return current.filter((line) => line.itemId !== itemId);
      if (current.some((line) => line.itemId === itemId)) {
        return current.map((line) => (line.itemId === itemId ? { ...line, qty } : line));
      }
      return [...current, { itemId, qty }];
    });
  }

  const checkedCount = lines.filter((line) => checks[line.itemId]).length;
  const door = trip.driveMinutes + trip.dwellMinutes;

  return (
    <div className="min-h-dvh w-full max-w-full min-w-0 overflow-x-hidden bg-paper text-ink">
      <header className="page-top mx-auto w-full max-w-5xl min-w-0 px-4 lg:px-6">
        <div className="flex items-start gap-1">
          <button
            type="button"
            aria-label="Stores"
            onClick={() => setPanel("stores")}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-md"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
          <div className="min-w-0 flex-1 px-1 text-center">
            <h1 className="title-fit truncate font-medium tracking-tight">Coupon King</h1>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setPanel("where");
              }}
              className="mx-auto mt-1 inline-flex h-11 max-w-full items-center justify-center gap-2 text-sm text-muted"
            >
              <MapPin className="size-4 shrink-0" aria-hidden="true" />
              <span className="truncate">
                {town.name}, {town.state} {town.zip}
              </span>
            </button>
          </div>
          <button type="button" onClick={() => setTab("trip")} className="shrink-0 pt-1 text-right">
            <p className="money-fit font-medium tabular-nums">{lines.length ? money(trip.total) : "—"}</p>
            <p className="mt-1 text-xs leading-tight text-muted">
              {trip.stops.length === 0 ? "No stops" : trip.stops.length === 1 ? "1 stop" : `${trip.stops.length} stops`}
              {countGas && trip.stops.length > 0 ? <span className="block">with gas</span> : ""}
            </p>
          </button>
        </div>
        <div className="mt-3 rounded-xl bg-card px-4 py-3 lift">
          <div className="flex items-baseline justify-between">
            <p className="text-sm font-medium">Radius from home</p>
            <p className="text-sm tabular-nums text-muted">{radius} miles</p>
          </div>
          <input
            type="range"
            min={3}
            max={25}
            step={1}
            value={radius}
            aria-label="Shopping radius in miles"
            onChange={(event) => setRadius(Number(event.target.value))}
          />
          <p className="text-sm text-muted">
            {inRange.length} {inRange.length === 1 ? "store" : "stores"} inside this drive. Connecticut and Florida.
          </p>
        </div>
      </header>

      <main className="page-pad mx-auto grid w-full max-w-5xl min-w-0 grid-cols-1 px-4 lg:grid-cols-2 lg:gap-8 lg:px-6">
        {tab !== "deals" && (
          <>
            <section className={cn("min-w-0 max-w-full", tab !== "list" && "max-lg:hidden")} aria-label="Grocery list">
              <ListPane
                lines={lines}
                placed={placed}
                pins={pins}
                onQty={setQty}
                onOpen={(id) => setPanel({ type: "item", id })}
                onAdd={() => {
                  setQuery("");
                  setPanel("add");
                }}
                onReset={() => {
                  setLines(STARTER);
                  setPins({});
                  setChecks({});
                  setDisabled([]);
                  setTownId("thomaston");
                  setRadius(12);
                  setMode("balanced");
                  setUnclipped([]);
                }}
              />
            </section>
            <section className={cn("min-w-0 max-w-full", tab !== "trip" && "max-lg:hidden")} aria-label="Trip">
              <TripPane
                trip={trip}
                townName={town.name}
                mode={mode}
                countGas={countGas}
                checks={checks}
                checkedCount={checkedCount}
                lineCount={lines.length}
                bestOne={bestOne}
                saveVsOne={saveVsOne}
                fullOnes={fullOnes}
                tips={tips}
                door={door}
                nudges={cardNudges(
                  lines,
                  inRange.map((row) => row.store),
                  disabled,
                  enrolled(cards),
                )}
                onDeals={() => setTab("deals")}
                onMode={setMode}
                onGas={() => setCountGas((value) => !value)}
                onCheck={(id) => setChecks((current) => ({ ...current, [id]: !current[id] }))}
                onClearChecks={() => setChecks({})}
                onWiden={(miles) => {
                  setRadius(Math.max(radius, Math.min(25, Math.ceil(miles))));
                }}
                origin={`${town.name}, ${town.state} ${town.zip}`}
              />
            </section>
          </>
        )}
        {tab === "deals" && (
          <section className="lg:col-span-2" aria-label="Coupons">
            <DealsPane
              lines={lines}
              ads={adDeals}
              adsReady={adsReady}
              unclipped={unclipped}
              radius={radius}
              town={town}
              cards={cards}
              loyalty={enrolled(cards)}
              onToggle={(id) =>
                setUnclipped((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]))
              }
              onAdd={(id) => setQty(id, (lines.find((line) => line.itemId === id)?.qty ?? 0) + 1)}
              onCard={(id, value) => setCards((current) => ({ ...current, [id]: value }))}
            />
          </section>
        )}
      </main>

      <nav className="dock pointer-events-none fixed inset-x-0 bottom-0 z-30 px-4" aria-label="Sections">
        <div className="pointer-events-auto mx-auto mb-1 grid max-w-md grid-cols-3 rounded-xl bg-card p-1 lift">
          <NavButton active={tab === "list"} label="List" onClick={() => setTab("list")}>
            <List className="size-5" aria-hidden="true" />
          </NavButton>
          <NavButton active={tab === "trip"} label="Trip" onClick={() => setTab("trip")}>
            <Route className="size-5" aria-hidden="true" />
          </NavButton>
          <NavButton active={tab === "deals"} label="Deals" onClick={() => setTab("deals")}>
            <Ticket className="size-5" aria-hidden="true" />
          </NavButton>
        </div>
      </nav>

      {panel && (
        <div
          className={cn(
            "fixed inset-0 z-40 bg-ink/25",
            panel === "stores" ? "flex items-stretch justify-start" : "flex items-end justify-center sm:items-center",
          )}
          onClick={() => setPanel(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={panel === "stores" ? "Stores" : undefined}
            className={cn(
              "overflow-y-auto bg-sheet",
              panel === "stores"
                ? "h-dvh w-full max-w-sm p-4"
                : "sheet-fit max-w-lg rounded-t-xl p-4 sm:rounded-xl",
            )}
            onClick={(event) => event.stopPropagation()}
          >
            {panel === "stores" && (
              <StoresPanel
                zip={town.zip}
                inRange={inRange}
                disabled={disabled}
                cards={cards}
                onToggle={(id) =>
                  setDisabled((current) => (current.includes(id) ? current.filter((storeId) => storeId !== id) : [...current, id]))
                }
                onDeals={() => {
                  setPanel(null);
                  setTab("deals");
                }}
                onClose={() => setPanel(null)}
              />
            )}
            {panel === "where" && (
              <WherePanel
                townId={townId}
                query={query}
                onQuery={setQuery}
                onPick={(id) => {
                  setTownId(id);
                  setPanel(null);
                }}
                onClose={() => setPanel(null)}
              />
            )}
            {panel === "add" && (
              <AddPanel
                query={query}
                onQuery={setQuery}
                have={new Set(lines.map((line) => line.itemId))}
                onAdd={(id) => setQty(id, 1)}
                onClose={() => setPanel(null)}
              />
            )}
            {typeof panel === "object" && panel?.type === "item" && (
              <ItemPanel
                itemId={panel.id}
                qty={lines.find((line) => line.itemId === panel.id)?.qty ?? 0}
                town={town}
                radius={radius}
                unclipped={unclipped}
                loyalty={enrolled(cards)}
                pin={pins[panel.id]}
                adPrices={adPrices}
                onQty={(qty) => setQty(panel.id, qty)}
                onPin={(storeId) =>
                  setPins((current) => {
                    const next = { ...current };
                    if (storeId && next[panel.id] !== storeId) next[panel.id] = storeId;
                    else delete next[panel.id];
                    return next;
                  })
                }
                onClose={() => setPanel(null)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function NavButton({
  active,
  label,
  onClick,
  children,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "mx-1 flex h-12 flex-col items-center justify-center gap-0.5 rounded-lg text-xs font-medium",
        active ? "bg-save-bg text-accent" : "text-muted",
      )}
    >
      {children}
      {label}
    </button>
  );
}

function StoresPanel({
  zip,
  inRange,
  disabled,
  cards,
  onToggle,
  onDeals,
  onClose,
}: {
  zip: string;
  inRange: { store: (typeof STORES)[number]; hop: { miles: number; minutes: number } }[];
  disabled: string[];
  cards: Record<string, string>;
  onToggle: (id: string) => void;
  onDeals: () => void;
  onClose: () => void;
}) {
  const [filter, setFilter] = useState("");
  const [flyers, setFlyers] = useState<Record<string, StoreFlyer>>({});
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState<StoreFlyer | null>(null);
  const q = filter.trim().toLowerCase();
  const rows = inRange.filter(({ store }) => {
    if (!q) return true;
    return (
      store.name.toLowerCase().includes(q) ||
      (store.aka ?? "").toLowerCase().includes(q) ||
      store.address.toLowerCase().includes(q)
    );
  });
  useEffect(() => {
    let cancel = false;
    setReady(false);
    flyersForZip({ data: zip })
      .then((list) => {
        if (cancel) return;
        const next: Record<string, StoreFlyer> = {};
        for (const flyer of list) {
          if (!next[flyer.banner]) next[flyer.banner] = flyer;
        }
        setFlyers(next);
      })
      .catch(() => {
        if (!cancel) setFlyers({});
      })
      .finally(() => {
        if (!cancel) setReady(true);
      });
    return () => {
      cancel = true;
    };
  }, [zip]);
  return (
    <div>
      <PanelHead title="Stores" onClose={onClose} />
      {open ? (
        <div className="mt-3">
          <button type="button" onClick={() => setOpen(null)} className="h-11 text-sm text-muted">
            Back to stores
          </button>
          <img src={open.image} alt={`${open.merchant} ${open.name}`} className="w-full rounded-md bg-card" />
          <p className="mt-3 font-medium">
            {open.merchant} · {open.name}
          </p>
          <p className="mt-1 text-sm text-muted">Valid {open.label}. This cover is the ad posted for {zip}. It changes when the store publishes the next one.</p>
          <a href={open.href} target="_blank" rel="noreferrer" className="mt-3 inline-flex h-11 items-center text-sm font-medium text-accent">
            Open the full ad
          </a>
        </div>
      ) : (
        <>
          <p className="mt-1 text-sm text-muted">Inside your radius. Turn a store out if you will not shop there. The thumbnail is this week's ad for {zip}.</p>
          <label className="mt-3 flex h-11 items-center gap-2 rounded-md border border-line bg-card px-3">
            <Search className="size-4 text-muted" aria-hidden="true" />
            <input
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
              placeholder="Chain or town"
              aria-label="Filter stores"
              className="h-full w-full min-w-0 bg-transparent text-sm outline-none"
            />
          </label>
          {rows.length === 0 ? (
            <p className="mt-4 text-sm text-muted">Nothing in this drive. Widen the radius, or clear the filter.</p>
          ) : (
            <ul className="mt-3 overflow-hidden rounded-xl bg-card lift">
              {rows.map(({ store, hop }) => {
                const off = disabled.includes(store.id);
                const number = store.loyaltyId ? cards[store.loyaltyId] : "";
                const saved = Boolean(number && number.trim().length >= 4);
                const flyer = flyers[store.banner];
                return (
                  <li key={store.id} className={cn("border-b border-line px-3 py-3 last:border-0", off && "opacity-60")}>
                    <div className="flex items-center gap-3">
                      {flyer ? (
                        <button type="button" onClick={() => setOpen(flyer)} className="shrink-0" aria-label={`${flyer.merchant} weekly ad, ${flyer.label}`}>
                          <img src={flyer.image} alt="" className="flyer-thumb rounded-sm" />
                        </button>
                      ) : !ready ? (
                        <div className="flyer-thumb shrink-0 rounded-sm" aria-hidden="true" />
                      ) : null}
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium">{placeName(store)}</p>
                        <p className="truncate text-sm text-muted">
                          {hop.minutes} min · {store.hours}
                          {flyer ? ` · ${flyer.label}` : ""}
                        </p>
                      </div>
                      <button
                        type="button"
                        aria-pressed={!off}
                        aria-label={off ? `Use ${placeName(store)}` : `Leave ${placeName(store)} out`}
                        onClick={() => onToggle(store.id)}
                        className={cn(
                          "h-11 shrink-0 rounded-md px-3 text-sm font-medium",
                          off ? "border border-line bg-sheet text-ink" : "bg-accent text-accent-fg",
                        )}
                      >
                        {off ? "Out" : "In"}
                      </button>
                    </div>
                    {store.loyaltyName && (
                      <button type="button" onClick={onDeals} className={cn("mt-1 h-11 text-left text-sm text-muted", (flyer || !ready) && "pl-14")}>
                        {saved ? `${store.loyaltyName} ····${number.trim().slice(-4)}` : `Add ${store.loyaltyName}`}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

function ListPane({
  lines,
  placed,
  pins,
  onQty,
  onOpen,
  onAdd,
  onReset,
}: {
  lines: Line[];
  placed: Map<string, { storeId: string; line: PlanLine }>;
  pins: Record<string, string>;
  onQty: (id: string, qty: number) => void;
  onOpen: (id: string) => void;
  onAdd: () => void;
  onReset: () => void;
}) {
  return (
    <div className="mt-4 flex w-full min-w-0 max-w-full flex-col gap-4">
      <div className="flex w-full min-w-0 items-center justify-between gap-3">
        <h2 className="min-w-0 truncate text-lg font-medium">This week</h2>
        <button type="button" onClick={onAdd} className="inline-flex h-11 shrink-0 items-center gap-2 rounded-lg bg-accent px-4 text-sm font-medium text-accent-fg">
          <Plus className="size-4" aria-hidden="true" />
          Add item
        </button>
      </div>

      {lines.length === 0 ? (
        <div className="rounded-xl bg-card lift px-4 py-8 text-center">
          <p className="font-medium">The list is empty</p>
          <p className="mt-1 text-sm text-muted">Add milk, chicken, or whatever is actually on the counter.</p>
        </div>
      ) : (
        <ul className="w-full min-w-0 max-w-full overflow-hidden rounded-xl bg-card lift">
          {lines.map((line) => {
            const item = ITEM_MAP[line.itemId];
            const spot = placed.get(line.itemId);
            const store = spot ? STORE_MAP[spot.storeId] : null;
            return (
              <li key={line.itemId} className="border-b border-line last:border-0">
                <div className="item-row px-3 py-2">
                  <div className="item-copy">
                    <button type="button" onClick={() => onOpen(line.itemId)} className="block w-full max-w-full overflow-hidden text-left">
                      <span className="block truncate font-medium">{item.name}</span>
                      <span className="mt-0.5 block truncate text-sm text-muted">
                        {qtyLabel(item, line.qty)}
                        {store ? ` · ${placeName(store)}` : " · not in range"}
                        {pins[line.itemId] ? " · pinned" : ""}
                        {spot?.line.couponId === "weekly-ad" ? " · this week's ad" : spot?.line.couponId ? " · coupon" : ""}
                      </span>
                    </button>
                  </div>
                  <div className="flex shrink-0 flex-col items-end">
                    <span className="text-sm font-medium tabular-nums">{spot ? money(spot.line.lineTotal) : "—"}</span>
                    <div className="flex items-center">
                      <button
                        type="button"
                        aria-label={`Less ${item.name}`}
                        onClick={() => onQty(line.itemId, line.qty - 1)}
                        className="inline-flex size-11 shrink-0 items-center justify-center rounded-md text-ink"
                      >
                        <Minus className="size-4" aria-hidden="true" />
                      </button>
                      <span className="w-5 text-center text-sm tabular-nums">{line.qty}</span>
                      <button
                        type="button"
                        aria-label={`More ${item.name}`}
                        onClick={() => onQty(line.itemId, line.qty + 1)}
                        className="inline-flex size-11 shrink-0 items-center justify-center rounded-md text-ink"
                      >
                        <Plus className="size-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <button type="button" onClick={onReset} className="h-11 self-start text-sm text-muted">
        Reset to the Thomaston starter list
      </button>
    </div>
  );
}

function TripPane({
  trip,
  townName,
  mode,
  countGas,
  checks,
  checkedCount,
  lineCount,
  bestOne,
  saveVsOne,
  fullOnes,
  tips,
  door,
  nudges,
  onDeals,
  onMode,
  onGas,
  onCheck,
  onClearChecks,
  onWiden,
  origin,
}: {
  trip: TripPlan;
  townName: string;
  mode: Mode;
  countGas: boolean;
  checks: Record<string, boolean>;
  checkedCount: number;
  lineCount: number;
  bestOne?: { storeId: string; total: number; basket: number; gas: number };
  saveVsOne: number;
  fullOnes: { storeId: string; total: number; basket: number; gas: number; missing: number }[];
  tips: { storeId: string; miles: number; minutes: number; save: number }[];
  door: number;
  nudges: string[];
  onDeals: () => void;
  onMode: (mode: Mode) => void;
  onGas: () => void;
  onCheck: (id: string) => void;
  onClearChecks: () => void;
  onWiden: (miles: number) => void;
  origin: string;
}) {
  const hint = MODES.find((item) => item.id === mode)?.hint;
  const addresses = trip.stops.map((stop) => STORE_MAP[stop.storeId].address);
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-1 rounded-xl bg-card p-1 lift">
        {MODES.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onMode(item.id)}
            className={cn(
              "h-11 min-w-0 rounded-lg px-1 text-xs font-medium sm:text-sm",
              mode === item.id ? "bg-save-bg text-accent" : "text-muted",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="text-sm text-muted">{hint}</p>

      {lineCount === 0 ? (
        <div className="rounded-xl bg-card lift px-4 py-8">
          <p className="font-medium">Nothing to route yet</p>
          <p className="mt-1 text-sm text-muted">Add a few items and the loop will land here.</p>
        </div>
      ) : (
        <>
          <div className="rounded-xl bg-card lift p-4">
            <p className="text-sm text-muted">
              {trip.stops.length === 1 ? "One stop" : `${trip.stops.length} stops`} · {door} min door to door
            </p>
            <p className="total-fit mt-1 font-medium tabular-nums tracking-tight">{money(trip.total)}</p>
            <p className="mt-2 text-sm text-muted">
              Groceries {money(trip.basket)}
              {trip.couponOff > 0 ? ` · deals −${money(trip.couponOff)}` : ""}
              {countGas ? ` · gas ${money(trip.gas)}` : " · gas not counted"}
            </p>
            <p className="mt-1 text-sm text-muted">
              {trip.miles.toFixed(1)} miles of driving · about {trip.dwellMinutes} min in the stores
            </p>
            {bestOne && trip.stops.length > 1 && saveVsOne > 0.2 && (
              <p className="mt-3 text-sm text-save">
                {money(saveVsOne)} less than one stop at {placeName(STORE_MAP[bestOne.storeId])}
                {countGas ? ", gas included" : ""}.
              </p>
            )}
            {bestOne && trip.stops.length > 1 && saveVsOne <= 0.2 && (
              <p className="mt-3 text-sm text-muted">
                One stop at {placeName(STORE_MAP[bestOne.storeId])} is {money(bestOne.total)} — this loop does not beat it once you count the drive.
              </p>
            )}
            {bestOne && trip.stops.length === 1 && (
              <p className="mt-3 text-sm text-muted">
                {placeName(STORE_MAP[bestOne.storeId])} is the cheapest single store that can fill this list.
              </p>
            )}
          </div>

          {nudges.map((note) => (
            <button key={note} type="button" onClick={onDeals} className="rounded-xl bg-card lift px-4 py-3 text-left text-sm">
              {note}
            </button>
          ))}

          {tips.map((tip) => (
            <button
              key={tip.storeId}
              type="button"
              onClick={() => onWiden(tip.miles)}
              className="rounded-xl bg-card lift px-4 py-3 text-left"
            >
              <p className="font-medium">{placeName(STORE_MAP[tip.storeId])} is just outside</p>
              <p className="mt-1 text-sm text-muted">
                {tip.minutes} min, {tip.miles.toFixed(1)} mi. Widening the radius could save about {money(tip.save)} after gas.
              </p>
            </button>
          ))}

          <ol className="flex flex-col gap-3">
            <li className="px-1 text-sm text-muted">Leave {townName}</li>
            {trip.stops.map((stop, index) => {
              const store = STORE_MAP[stop.storeId];
              const leg = trip.legs.find((item) => item.to === stop.storeId);
              const prev = index === 0 ? "home" : placeName(STORE_MAP[trip.stops[index - 1].storeId]);
              return (
                <li key={store.id} className="rounded-xl bg-card lift p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-medium">
                        {index + 1}. {placeName(store)}
                      </h3>
                      <p className="text-sm break-words text-muted">{store.address}</p>
                      <p className="text-sm text-muted">
                        {leg ? `${leg.minutes} min` : "Nearby"} from {prev} · {store.hours}
                      </p>
                    </div>
                    <p className="font-medium tabular-nums">{money(stop.basket)}</p>
                  </div>
                  {stop.storeId !== trip.anchorId && stop.savingsVsAnchor > 0.2 && (
                    <p className="mt-2 text-sm text-save">
                      Saves {money(stop.savingsVsAnchor)} on these items versus {STORE_MAP[trip.anchorId ?? stop.storeId].name}.
                    </p>
                  )}
                  {stop.couponOff > 0 && <p className="mt-1 text-sm text-save">Deals on this stop: −{money(stop.couponOff)}</p>}
                  <ul className="mt-3 border-t border-line">
                    {stop.lines.map((line) => {
                      const item = ITEM_MAP[line.itemId];
                      const on = Boolean(checks[line.itemId]);
                      return (
                        <li key={line.itemId} className="flex items-center gap-2 border-b border-line py-1 last:border-0">
                          <button
                            type="button"
                            aria-pressed={on}
                            aria-label={on ? `Uncheck ${item.name}` : `Check ${item.name}`}
                            onClick={() => onCheck(line.itemId)}
                            className="inline-flex size-11 items-center justify-center"
                          >
                            <span className={cn("flex size-5 items-center justify-center rounded-xs border", on ? "border-accent bg-accent text-accent-fg" : "border-line")}>
                              {on ? <Check className="size-3.5" aria-hidden="true" /> : null}
                            </span>
                          </button>
                          <div className="min-w-0 flex-1">
                            <p className={cn("truncate", on && "text-muted")}>{item.name}</p>
                            <p className="text-sm text-muted">
                              {qtyLabel(item, line.qty)}
                              {line.off > 0 ? ` · ${money(line.unit)} after ${money(line.off)} off` : ` · ${money(line.unit)}`}
                              {line.pinned ? " · pinned" : ""}
                            </p>
                          </div>
                          <p className="tabular-nums">{money(line.lineTotal)}</p>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
            {trip.stops.length > 0 && (
              <li className="px-1 text-sm text-muted">
                Back home
                {trip.legs.length ? ` · ${trip.legs[trip.legs.length - 1]?.minutes ?? 0} min` : ""}
              </li>
            )}
          </ol>

          {trip.missing.length > 0 && (
            <div className="rounded-xl bg-card lift p-4">
              <h3 className="font-medium">Not on this loop</h3>
              <ul className="mt-2 flex flex-col gap-2">
                {trip.missing.map((miss) => {
                  const item = ITEM_MAP[miss.itemId];
                  const store = miss.storeId ? STORE_MAP[miss.storeId] : null;
                  return (
                    <li key={miss.itemId} className="text-sm text-muted">
                      {item.name}
                      {store ? ` — nearest is ${placeName(store)}, ${miss.miles.toFixed(1)} mi` : " — nobody nearby stocks it"}
                      {miss.unit != null ? ` at ${money(miss.unit)}` : ""}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {addresses.length > 0 && (
            <a
              href={mapsUrl(origin, addresses)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg"
            >
              Open this loop in Maps
            </a>
          )}

          {checkedCount > 0 && (
            <button type="button" onClick={onClearChecks} className="h-11 self-start text-sm text-muted">
              Clear {checkedCount} of {lineCount} checked
            </button>
          )}

          {fullOnes.length > 1 && (
            <div>
              <h3 className="text-lg font-medium">If you only stop once</h3>
              <ul className="mt-2 overflow-hidden rounded-xl bg-card lift">
                {fullOnes.slice(0, 4).map((row) => (
                  <li key={row.storeId} className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 last:border-0">
                    <div>
                      <p className="font-medium">{placeName(STORE_MAP[row.storeId])}</p>
                      <p className="text-sm text-muted">
                        Groceries {money(row.basket)}
                        {countGas ? ` · gas ${money(row.gas)}` : ""}
                      </p>
                    </div>
                    <p className="tabular-nums">{money(row.total)}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button type="button" onClick={onGas} className="h-11 self-start text-left text-sm text-muted">
            {countGas ? `Counting gas at ${money(GAS_PRICE)}/gal and ${MPG} mpg. Tap to ignore gas.` : "Gas is hidden. Tap to count it."}
          </button>
          <p className="text-sm text-muted">Sample prices for the week of {CIRCULAR}. Confirm the shelf tag before you pay.</p>
        </>
      )}
    </div>
  );
}

function DealsPane({
  lines,
  ads,
  adsReady,
  unclipped,
  radius,
  town,
  cards,
  loyalty,
  onToggle,
  onAdd,
  onCard,
}: {
  lines: Line[];
  ads: WeeklyDeal[];
  adsReady: boolean;
  unclipped: string[];
  radius: number;
  town: (typeof TOWNS)[number];
  cards: Record<string, string>;
  loyalty: string[];
  onToggle: (id: string) => void;
  onAdd: (itemId: string) => void;
  onCard: (id: string, value: string) => void;
}) {
  const have = new Set(lines.map((line) => line.itemId));
  const mine = COUPONS.filter((coupon) => have.has(coupon.itemId));
  const rest = COUPONS.filter((coupon) => !have.has(coupon.itemId));
  const onList = ads.filter((deal) => have.has(deal.itemId));
  const extra = ads.filter((deal) => !have.has(deal.itemId)).slice(0, 8);
  return (
    <div className="mt-4 flex flex-col gap-5">
      <div>
        <h2 className="text-lg font-medium">This week's ads</h2>
        <p className="mt-1 text-sm text-muted">
          Pulled from the circulars posted for {town.zip}. A new ad replaces these within about an hour. The price is used when it is lower than the estimate and clearly the same item. It is not the full shelf, and it is not a clipped digital coupon.
        </p>
        {ads.length === 0 ? <p className="mt-3 text-sm text-muted">{adsReady ? "No matched ad prices for this ZIP this week." : "Looking up this week's ads…"}</p> : null}
        <ul className="mt-3 flex flex-col gap-2">
          {[...onList, ...extra].map((deal) => {
            const item = ITEM_MAP[deal.itemId];
            return (
              <li key={`${deal.banner}-${deal.itemId}`} className="rounded-xl bg-card lift p-4">
                <p className="font-medium">
                  {money(deal.price)} · {item?.name ?? deal.itemId}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {deal.product} · {deal.merchant} · through {deal.ends}
                </p>
                {!have.has(deal.itemId) && (
                  <button type="button" onClick={() => onAdd(deal.itemId)} className="mt-2 h-11 text-sm font-medium text-ink">
                    Add {item?.name ?? "item"} to the list
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-medium">Loyalty cards</h2>
        <p className="mt-1 text-sm text-muted">
          Digital coupons and card prices apply only after a number is saved. Paper circulars and manufacturer coupons do not need one. ALDI has no card. Numbers stay on this phone.
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          {LOYALTY_PROGRAMS.map((program) => {
            const names = [...new Set(program.storeIds.map((id) => STORE_MAP[id]?.name).filter(Boolean))].join(" · ");
            const on = loyalty.includes(program.id);
            return (
              <li key={program.id} className="rounded-xl bg-card lift p-4">
                <label className="block">
                  <span className="font-medium">{program.name}</span>
                  <span className="mt-1 block text-sm text-muted">{names}</span>
                  <input
                    value={cards[program.id] ?? ""}
                    onChange={(event) => onCard(program.id, event.target.value.slice(0, 24))}
                    placeholder={program.hint}
                    autoComplete="off"
                    spellCheck={false}
                    aria-label={`${program.name} number`}
                    className="mt-3 h-11 w-full rounded-md border border-line bg-sheet px-3 text-sm outline-none"
                  />
                </label>
                <p className="mt-2 text-sm text-muted">{on ? "Card prices are on." : "Enter at least 4 characters to turn card prices on."}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-medium">Clipped for this list</h2>
        <p className="mt-1 text-sm text-muted">
          Sample deals for the week of {CIRCULAR}. These stay until the list is edited. They do not load next week's coupons.
        </p>
      </div>
      <CouponList
        coupons={mine}
        unclipped={unclipped}
        radius={radius}
        town={town}
        loyalty={loyalty}
        onToggle={onToggle}
        onAdd={onAdd}
        have={have}
      />
      <div>
        <h2 className="text-lg font-medium">Also in the circulars</h2>
        <p className="mt-1 text-sm text-muted">Add the item and the loop will use the coupon if that store earns a stop.</p>
      </div>
      <CouponList
        coupons={rest}
        unclipped={unclipped}
        radius={radius}
        town={town}
        loyalty={loyalty}
        onToggle={onToggle}
        onAdd={onAdd}
        have={have}
      />
    </div>
  );
}

function CouponList({
  coupons,
  unclipped,
  radius,
  town,
  loyalty,
  onToggle,
  onAdd,
  have,
}: {
  coupons: typeof COUPONS;
  unclipped: string[];
  radius: number;
  town: (typeof TOWNS)[number];
  loyalty: string[];
  onToggle: (id: string) => void;
  onAdd: (itemId: string) => void;
  have: Set<string>;
}) {
  if (!coupons.length) return <p className="text-sm text-muted">Nothing in this pile.</p>;
  return (
    <ul className="flex flex-col gap-2">
      {coupons.map((coupon) => {
        const item = ITEM_MAP[coupon.itemId];
        const clipped = !unclipped.includes(coupon.id);
        const stores = coupon.storeIds.map((id) => STORE_MAP[id]).filter(Boolean);
        const program = stores.find((store) => store.loyaltyId);
        const locked = coupon.needsLoyalty && (!program?.loyaltyId || !loyalty.includes(program.loyaltyId));
        const near = stores
          .map((store) => ({ store, hop: travelBetween(town, store) }))
          .sort((a, b) => a.hop.miles - b.hop.miles)[0];
        const inside = near ? near.hop.miles <= radius + 0.05 : false;
        return (
          <li key={coupon.id} className="rounded-xl bg-card lift p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-medium">
                  {coupon.label} · {item.name}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {coupon.source} · ends {coupon.ends}
                </p>
                <p className="text-sm text-muted">
                  {[...new Set(stores.map((store) => store.name))].join(", ")}
                  {near ? (inside ? ` · ${near.hop.minutes} min` : ` · ${near.hop.miles.toFixed(1)} mi outside`) : ""}
                  {coupon.needsLoyalty ? " · needs the card" : ""}
                </p>
              </div>
              <button
                type="button"
                aria-pressed={clipped && !locked}
                disabled={locked}
                onClick={() => onToggle(coupon.id)}
                className={cn(
                  "h-11 shrink-0 rounded-md px-3 text-sm font-medium",
                  locked ? "border border-line bg-sheet text-muted" : clipped ? "bg-accent text-accent-fg" : "border border-line bg-sheet text-ink",
                )}
              >
                {locked ? "Needs card" : clipped ? "Using" : "Skip"}
              </button>
            </div>
            {!have.has(coupon.itemId) && (
              <button type="button" onClick={() => onAdd(coupon.itemId)} className="mt-2 h-11 text-sm font-medium text-ink">
                Add {item.name} to the list
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function WherePanel({
  townId,
  query,
  onQuery,
  onPick,
  onClose,
}: {
  townId: string;
  query: string;
  onQuery: (value: string) => void;
  onPick: (id: string) => void;
  onClose: () => void;
}) {
  const q = query.trim().toLowerCase();
  const towns = TOWNS.filter((town) => !q || town.name.toLowerCase().includes(q) || town.zip.includes(q));
  return (
    <div>
      <PanelHead title="Home base" onClose={onClose} />
      <p className="mt-1 text-sm text-muted">Connecticut and Florida. Pick the town you leave from.</p>
      <label className="mt-3 flex h-11 items-center gap-2 rounded-md border border-line bg-card px-3">
        <Search className="size-4 text-muted" aria-hidden="true" />
        <input
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          placeholder="Town or ZIP"
          className="h-full w-full bg-transparent text-sm outline-none"
          autoFocus
        />
      </label>
      <ul className="mt-3">
        {towns.map((town) => (
          <li key={town.id}>
            <button type="button" onClick={() => onPick(town.id)} className="flex h-11 w-full items-center justify-between text-left">
              <span>
                {town.name}, {town.state} {town.zip}
              </span>
              {town.id === townId ? <span className="text-sm text-save">Home</span> : null}
            </button>
          </li>
        ))}
        {towns.length === 0 && <li className="py-3 text-sm text-muted">Try a town or ZIP in Connecticut or Florida.</li>}
      </ul>
    </div>
  );
}

const AISLES: Category[] = ["Produce", "Dairy", "Meat", "Seafood", "Bakery", "Pantry", "Frozen", "Household"];

function AddPanel({
  query,
  onQuery,
  have,
  onAdd,
  onClose,
}: {
  query: string;
  onQuery: (value: string) => void;
  have: Set<string>;
  onAdd: (id: string) => void;
  onClose: () => void;
}) {
  const [aisle, setAisle] = useState<Category | null>(null);
  const q = query.trim().toLowerCase();
  const terms = q.split(/\s+/).filter(Boolean);
  const items = ITEMS.filter((item) => {
    if (have.has(item.id)) return false;
    if (terms.length > 0) {
      const hay = `${item.name} ${item.category}`.toLowerCase();
      return terms.every((term) => hay.includes(term));
    }
    return aisle === null || item.category === aisle;
  });
  const groups = new Map<string, typeof ITEMS>();
  for (const item of items) {
    const list = groups.get(item.category) ?? [];
    list.push(item);
    groups.set(item.category, list);
  }
  const showList = terms.length > 0 || aisle !== null;
  return (
    <div>
      <PanelHead title="Add to the list" onClose={onClose} />
      <label className="mt-3 flex h-11 items-center gap-2 rounded-md border border-line bg-card px-3">
        <Search className="size-4 text-muted" aria-hidden="true" />
        <input
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          placeholder="Search the book"
          className="h-full w-full bg-transparent text-sm outline-none"
          autoFocus
        />
      </label>
      <p className="mt-2 text-sm text-muted">Store brand first, not every name brand. {ITEMS.length} staples in the book.</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {AISLES.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={aisle === name}
            onClick={() => setAisle((current) => (current === name ? null : name))}
            className={cn(
              "h-11 rounded-md px-3 text-sm",
              aisle === name ? "bg-accent text-accent-fg" : "border border-line bg-card",
            )}
          >
            {name}
          </button>
        ))}
      </div>
      {showList ? (
        <div className="mt-4 flex flex-col gap-4">
          {[...groups.entries()].map(([category, group]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-muted">{category}</h3>
              <ul className="mt-1">
                {group.map((item) => (
                  <li key={item.id}>
                    <button type="button" onClick={() => onAdd(item.id)} className="flex h-11 w-full items-center justify-between gap-3 text-left">
                      <span className="min-w-0 truncate">{item.name}</span>
                      <span className="shrink-0 text-sm text-muted">{item.size}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {items.length === 0 && <p className="text-sm text-muted">Nothing in the book matches that.</p>}
        </div>
      ) : (
        <p className="mt-4 text-sm text-muted">Pick an aisle, or search.</p>
      )}
    </div>
  );
}

function ItemPanel({
  itemId,
  qty,
  town,
  radius,
  unclipped,
  loyalty,
  pin,
  adPrices,
  onQty,
  onPin,
  onClose,
}: {
  itemId: string;
  qty: number;
  town: (typeof TOWNS)[number];
  radius: number;
  unclipped: string[];
  loyalty: string[];
  pin?: string;
  adPrices: Record<string, Record<string, number>>;
  onQty: (qty: number) => void;
  onPin: (storeId: string | null) => void;
  onClose: () => void;
}) {
  const item = ITEM_MAP[itemId];
  const [deals, setDeals] = useState<BrandDeal[]>([]);
  useEffect(() => {
    let cancel = false;
    storeBrandDeals({ data: { zip: town.zip, query: item.name } })
      .then((rows) => {
        if (!cancel) setDeals(rows);
      })
      .catch(() => {
        if (!cancel) setDeals([]);
      });
    return () => {
      cancel = true;
    };
  }, [town.zip, item.name]);
  const dealFor = new Map(deals.map((deal) => [deal.banner, deal]));
  const rows = STORES.map((store) => {
    const q = quote(itemId, store.id, Math.max(qty, 1), unclipped, loyalty, adPrices[itemId]?.[store.banner]);
    const hop = travelBetween(town, store);
    return { store, q, hop, inside: hop.miles <= radius + 0.05 };
  })
    .filter((row) => row.q)
    .sort((a, b) => {
      if (a.inside !== b.inside) return a.inside ? -1 : 1;
      if (a.inside && b.inside) return (a.q?.unit ?? 99) - (b.q?.unit ?? 99);
      return a.hop.miles - b.hop.miles;
    });
  const inside = rows.filter((row) => row.inside);
  const shown = [...inside, ...rows.filter((row) => !row.inside).slice(0, 4)];
  const cheapestInside = inside[0]?.q?.unit;
  return (
    <div>
      <PanelHead title={item.name} onClose={onClose} />
      <p className="mt-1 text-sm text-muted">
        {item.category} · {item.size}. The price is an estimate of the store brand, not a package you can scan.
      </p>
      <div className="mt-3 flex items-center gap-2">
        <button type="button" aria-label="Decrease quantity" onClick={() => onQty(qty - 1)} className="inline-flex size-11 items-center justify-center rounded-md border border-line bg-card">
          <Minus className="size-4" aria-hidden="true" />
        </button>
        <span className="w-8 text-center tabular-nums">{qty}</span>
        <button type="button" aria-label="Increase quantity" onClick={() => onQty(qty + 1)} className="inline-flex size-11 items-center justify-center rounded-md border border-line bg-card">
          <Plus className="size-4" aria-hidden="true" />
        </button>
        <button type="button" onClick={() => onQty(0)} className="ml-auto h-11 text-sm text-muted">
          Remove
        </button>
      </div>
      <ul className="mt-4 flex flex-col gap-1">
        {shown.map((row) => {
          const coupon = row.q?.couponId && row.q.couponId !== "weekly-ad" ? COUPONS.find((item) => item.id === row.q?.couponId) : null;
          const lowest = row.inside && row.q && cheapestInside != null && row.q.unit === cheapestInside;
          const pinned = pin === row.store.id;
          const deal = dealFor.get(row.store.banner);
          return (
            <li key={row.store.id}>
              <button
                type="button"
                disabled={!row.inside}
                onClick={() => onPin(pinned ? null : row.store.id)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left",
                  pinned && "bg-save-bg",
                  !row.inside && "opacity-60",
                )}
              >
                <span className="min-w-0">
                  <span className="block truncate font-medium">{placeName(row.store)}</span>
                  <span className="block text-sm text-muted">
                    {row.hop.minutes} min
                    {!row.inside ? " · outside radius" : ""}
                    {row.q?.couponId === "weekly-ad" ? " · this week's ad" : ""}
                    {coupon ? ` · ${coupon.label}` : ""}
                    {lowest ? " · lowest in range" : ""}
                    {pinned ? " · pinned" : row.inside ? " · tap to pin" : ""}
                  </span>
                  {deal ? (
                    <span className="mt-0.5 block truncate text-sm text-save">
                      This week's ad: {deal.product} · {money(deal.price)} through {deal.label}
                    </span>
                  ) : null}
                </span>
                <span className="shrink-0 text-right tabular-nums">
                  <span className="block">{row.q ? money(row.q.unit) : "—"}</span>
                  {row.q && row.q.off > 0 ? <span className="block text-sm text-muted line-through">{money(row.q.shelf)}</span> : null}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function PanelHead({ title, onClose }: { title: string; onClose: () => void }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <h2 className="font-display text-2xl font-medium tracking-tight">{title}</h2>
      <button type="button" aria-label="Close" onClick={onClose} className="inline-flex size-11 items-center justify-center rounded-md">
        <X className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
}
