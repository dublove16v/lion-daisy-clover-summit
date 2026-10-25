# Coupon King — handoff for the next Grok

Mobile web app. A shopper sets a town and a radius, builds a grocery list, and the app plans the cheapest trip among nearby stores. Coupons and this week's advertised prices are included when they match. Built for friends-and-family testing in Connecticut and Florida before a national version.

Stack: TanStack Start, React, Tailwind v4. No accounts. The list, radius, store toggles, pins, and loyalty numbers stay in localStorage on the phone. Default town is Thomaston, CT (06787).

## What is real

- Store locations for Connecticut and Florida (addresses and coordinates in `src/data/market.ts`). Distance is haversine times a 1.42 road factor. Gas assumes 27 mpg and $3.49 a gallon.
- Weekly flyer covers. `src/lib/flyers.ts` asks the public circular feed for the shopper's ZIP and shows a thumbnail next to the store in the menu. A new cover shows up within about an hour of the store posting it. No republish.
- This week's advertised prices. `src/lib/deals.ts` reads every item in the current circular for that ZIP and attaches a price when the ad is clearly the same staple and cheaper than the estimate. The Deals tab lists them. The planner uses the ad price only when that store is actually on the trip. Sample coupons in `market.ts` are still labeled as samples and do not roll forward by themselves.
- Store on/off and loyalty numbers. The hamburger menu toggles stores. A loyalty number of at least 4 characters unlocks card-only sample coupons for that chain (GO Rewards, Club Publix, DG Rewards, and so on). ALDI has no card.

## What is not real

- Everyday shelf prices. Most prices are a typed base times a store markup, or a hand override. "Paper towels, 6 rolls" at Stop & Shop is an estimate of $8.79, not the store-brand 6-pack that was $6.99 on the website.
- There is no barcode, no brand choice, and no live inventory. One staple stands in for the store brand.
- Stop & Shop's site blocks automated lookups (captcha). Publix, Dollar General, ALDI, and the IGAs have no public price API.
- Kroger's public products API is free after registration and returns real shelf prices, but Kroger has almost no stores in Connecticut or Florida, so it was not connected.
- Walmart and Instacart require approval. Paid feeds (Datasembly, Flipp's paid product) exist. Their licenses often forbid showing store-level prices in a consumer app. Read that line before paying.

## How the trip is chosen

`src/lib/plan.ts` tries store combinations inside the radius (cap 12), keeps a stop only when the savings beat the extra drive, and honors pins. Modes are balanced, stretch, and one store. A line can be pinned to a store from the item sheet.

## Files that are the product

- `src/components/grocery-app.tsx` — the whole UI: list, trip, deals, town picker, store drawer, item sheet.
- `src/data/market.ts` — towns, stores, staples, price table, sample coupons, loyalty programs.
- `src/lib/plan.ts` — quote and trip planner.
- `src/lib/deals.ts` — this week's ad prices.
- `src/lib/flyers.ts` — flyer thumbnails and store-brand hits from the current ad.
- `src/styles.css` — mist palette, Outfit, fluid type, phone layout.
- `src/routes/index.tsx` — mounts the app at `/`.
- `public/og.jpg`, `public/favicon.svg`, `src/lib/og/site.json` — share card and icon. Title is Coupon King.

The rest of the repo is the app-builder shell (router, unused auth, PWA). Do not strip the preview bridge or the "Created with Grok" branding.

## Product rules already decided

- Connecticut and Florida only, until a national launch.
- Store brand is the default item, not every scent of every brand.
- Never present an estimate as a scannable package. The item sheet says the price is an estimate of the store brand.
- Do not scrape retailer websites. They block it, and it will not survive a real launch.
- Phone layout must reflow to the device width. Do not lock the page to one phone. Keep rows in a grid with a flexible first column so prices and steppers stay on screen.

## The gap that matters

Without everyday shelf prices the trip math is a demo. The next real step is a paid price feed whose license allows a consumer app, or a pilot with one regional chain (Adams, Big Y, ShopRite, or Price Chopper) for store-brand prices only, with their name on the item and a link to their ad. Do not open that ask as "give us your API so we can show you are more expensive."
