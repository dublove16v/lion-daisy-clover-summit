import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/flyers-DVH7vrAO.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var MATCH = [
	{
		banner: "adams",
		merchant: "adams hometown market"
	},
	{
		banner: "terry",
		merchant: "adams hometown market"
	},
	{
		banner: "dg",
		merchant: "dollar general"
	},
	{
		banner: "stop",
		merchant: "stop & shop"
	},
	{
		banner: "shoprite",
		merchant: "shoprite"
	},
	{
		banner: "aldi",
		merchant: "aldi"
	},
	{
		banner: "bigy",
		merchant: "big y"
	},
	{
		banner: "m32",
		merchant: "price chopper"
	},
	{
		banner: "m32",
		merchant: "market 32"
	},
	{
		banner: "walmart",
		merchant: "walmart"
	},
	{
		banner: "publix",
		merchant: "publix"
	},
	{
		banner: "winndixie",
		merchant: "winn-dixie"
	}
];
var cache = /* @__PURE__ */ new Map();
var HOUR = 36e5;
function hits(merchant, key) {
	const name = merchant.toLowerCase();
	if (key === "publix") return name === "publix";
	if (key === "walmart") return name === "walmart" || name.startsWith("walmart ");
	return name === key;
}
function rank(name, from, to, now) {
	const current = from <= now && now <= to;
	let score = current ? 10 : 0;
	if (/weekly|circular|flyer/i.test(name)) score += 4;
	if (/\bad\b/i.test(name)) score += 2;
	if (/liquor|wireless/i.test(name)) score -= 8;
	if (/next week|sneak|preview/i.test(name) && !current) score -= 3;
	if (!current && from > now) score += 1;
	return score;
}
function dates(from, to) {
	const start = new Date(from);
	const end = new Date(to);
	const month = (value) => value.toLocaleDateString("en-US", {
		month: "short",
		timeZone: "America/New_York"
	});
	const day = (value) => value.toLocaleDateString("en-US", {
		day: "numeric",
		timeZone: "America/New_York"
	});
	if (month(start) === month(end)) return `${month(start)} ${day(start)}–${day(end)}`;
	return `${month(start)} ${day(start)}–${month(end)} ${day(end)}`;
}
var flyersForZip_createServerFn_handler = createServerRpc({
	id: "9707ccac9c9028e415ca574bd19d393df3c8301fe551c4403a1fe49cff27ebf4",
	name: "flyersForZip",
	filename: "src/lib/flyers.ts"
}, (opts) => flyersForZip.__executeServer(opts));
var flyersForZip = createServerFn({ method: "GET" }).validator((zip) => {
	if (!/^\d{5}$/.test(zip)) throw new Error("Need a 5-digit ZIP");
	return zip;
}).handler(flyersForZip_createServerFn_handler, async ({ data: zip }) => {
	const hit = cache.get(zip);
	if (hit && Date.now() - hit.at < HOUR) return hit.rows;
	const res = await fetch(`https://backflipp.wishabi.com/flipp/flyers?locale=en-us&postal_code=${zip}`, { headers: {
		accept: "application/json",
		"user-agent": "CouponKing/1.0"
	} });
	if (!res.ok) return hit?.rows ?? [];
	const body = await res.json();
	const now = Date.now();
	const rows = [];
	for (const rule of MATCH) {
		let best = null;
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
			href: `https://flipp.com/flyer/${best.id}?postal_code=${zip}`
		});
	}
	cache.set(zip, {
		at: Date.now(),
		rows
	});
	return rows;
});
//#endregion
export { flyersForZip_createServerFn_handler };
