import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as Route, c as Menu, d as Check, i as Search, l as MapPin, o as Plus, r as Ticket, s as Minus, t as X, u as List } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C5M6PGIN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CIRCULAR = "Oct 7–13";
var GAS_PRICE = 3.49;
var TOWNS = [
	{
		id: "thomaston",
		name: "Thomaston",
		state: "CT",
		zip: "06787",
		lat: 41.6762,
		lng: -73.0784
	},
	{
		id: "plymouth",
		name: "Plymouth",
		state: "CT",
		zip: "06782",
		lat: 41.6715,
		lng: -73.053
	},
	{
		id: "terryville",
		name: "Terryville",
		state: "CT",
		zip: "06786",
		lat: 41.678,
		lng: -73.022
	},
	{
		id: "watertown",
		name: "Watertown",
		state: "CT",
		zip: "06795",
		lat: 41.606,
		lng: -73.118
	},
	{
		id: "oakville",
		name: "Oakville",
		state: "CT",
		zip: "06779",
		lat: 41.592,
		lng: -73.09
	},
	{
		id: "harwinton",
		name: "Harwinton",
		state: "CT",
		zip: "06791",
		lat: 41.753,
		lng: -73.058
	},
	{
		id: "litchfield",
		name: "Litchfield",
		state: "CT",
		zip: "06759",
		lat: 41.747,
		lng: -73.19
	},
	{
		id: "torrington",
		name: "Torrington",
		state: "CT",
		zip: "06790",
		lat: 41.8009,
		lng: -73.1212
	},
	{
		id: "bristol",
		name: "Bristol",
		state: "CT",
		zip: "06010",
		lat: 41.6718,
		lng: -72.9493
	},
	{
		id: "burlington",
		name: "Burlington",
		state: "CT",
		zip: "06013",
		lat: 41.759,
		lng: -72.958
	},
	{
		id: "wolcott",
		name: "Wolcott",
		state: "CT",
		zip: "06716",
		lat: 41.6,
		lng: -72.986
	},
	{
		id: "waterbury",
		name: "Waterbury",
		state: "CT",
		zip: "06702",
		lat: 41.5582,
		lng: -73.0515
	},
	{
		id: "woodbury",
		name: "Woodbury",
		state: "CT",
		zip: "06798",
		lat: 41.5445,
		lng: -73.209
	},
	{
		id: "naugatuck",
		name: "Naugatuck",
		state: "CT",
		zip: "06770",
		lat: 41.4859,
		lng: -73.051
	},
	{
		id: "middlebury",
		name: "Middlebury",
		state: "CT",
		zip: "06762",
		lat: 41.5276,
		lng: -73.127
	},
	{
		id: "greenwich",
		name: "Greenwich",
		state: "CT",
		zip: "06830",
		lat: 41.0265,
		lng: -73.6285
	},
	{
		id: "stamford",
		name: "Stamford",
		state: "CT",
		zip: "06901",
		lat: 41.0534,
		lng: -73.5387
	},
	{
		id: "darien",
		name: "Darien",
		state: "CT",
		zip: "06820",
		lat: 41.0787,
		lng: -73.4693
	},
	{
		id: "norwalk",
		name: "Norwalk",
		state: "CT",
		zip: "06850",
		lat: 41.1176,
		lng: -73.4079
	},
	{
		id: "westport",
		name: "Westport",
		state: "CT",
		zip: "06880",
		lat: 41.1415,
		lng: -73.3579
	},
	{
		id: "fairfield",
		name: "Fairfield",
		state: "CT",
		zip: "06824",
		lat: 41.1412,
		lng: -73.2637
	},
	{
		id: "bridgeport",
		name: "Bridgeport",
		state: "CT",
		zip: "06604",
		lat: 41.1793,
		lng: -73.1888
	},
	{
		id: "stratford",
		name: "Stratford",
		state: "CT",
		zip: "06614",
		lat: 41.1924,
		lng: -73.1305
	},
	{
		id: "trumbull",
		name: "Trumbull",
		state: "CT",
		zip: "06611",
		lat: 41.2429,
		lng: -73.2007
	},
	{
		id: "shelton",
		name: "Shelton",
		state: "CT",
		zip: "06484",
		lat: 41.3165,
		lng: -73.0932
	},
	{
		id: "danbury",
		name: "Danbury",
		state: "CT",
		zip: "06810",
		lat: 41.3948,
		lng: -73.454
	},
	{
		id: "bethel",
		name: "Bethel",
		state: "CT",
		zip: "06801",
		lat: 41.3712,
		lng: -73.414
	},
	{
		id: "newtown",
		name: "Newtown",
		state: "CT",
		zip: "06470",
		lat: 41.4135,
		lng: -73.3086
	},
	{
		id: "ridgefield",
		name: "Ridgefield",
		state: "CT",
		zip: "06877",
		lat: 41.2678,
		lng: -73.4932
	},
	{
		id: "newmilford",
		name: "New Milford",
		state: "CT",
		zip: "06776",
		lat: 41.5771,
		lng: -73.4106
	},
	{
		id: "newhaven",
		name: "New Haven",
		state: "CT",
		zip: "06510",
		lat: 41.3082,
		lng: -72.9251
	},
	{
		id: "hamden",
		name: "Hamden",
		state: "CT",
		zip: "06514",
		lat: 41.3836,
		lng: -72.902
	},
	{
		id: "westhaven",
		name: "West Haven",
		state: "CT",
		zip: "06516",
		lat: 41.2707,
		lng: -72.947
	},
	{
		id: "milford",
		name: "Milford",
		state: "CT",
		zip: "06460",
		lat: 41.2222,
		lng: -73.0571
	},
	{
		id: "orange",
		name: "Orange",
		state: "CT",
		zip: "06477",
		lat: 41.2784,
		lng: -73.0257
	},
	{
		id: "northhaven",
		name: "North Haven",
		state: "CT",
		zip: "06473",
		lat: 41.3909,
		lng: -72.8595
	},
	{
		id: "wallingford",
		name: "Wallingford",
		state: "CT",
		zip: "06492",
		lat: 41.4564,
		lng: -72.8239
	},
	{
		id: "meriden",
		name: "Meriden",
		state: "CT",
		zip: "06450",
		lat: 41.5382,
		lng: -72.8026
	},
	{
		id: "cheshire",
		name: "Cheshire",
		state: "CT",
		zip: "06410",
		lat: 41.4989,
		lng: -72.901
	},
	{
		id: "branford",
		name: "Branford",
		state: "CT",
		zip: "06405",
		lat: 41.2795,
		lng: -72.8151
	},
	{
		id: "hartford",
		name: "Hartford",
		state: "CT",
		zip: "06103",
		lat: 41.7646,
		lng: -72.6909
	},
	{
		id: "westhartford",
		name: "West Hartford",
		state: "CT",
		zip: "06107",
		lat: 41.762,
		lng: -72.742
	},
	{
		id: "easthartford",
		name: "East Hartford",
		state: "CT",
		zip: "06108",
		lat: 41.7679,
		lng: -72.6445
	},
	{
		id: "manchester",
		name: "Manchester",
		state: "CT",
		zip: "06040",
		lat: 41.7834,
		lng: -72.5232
	},
	{
		id: "glastonbury",
		name: "Glastonbury",
		state: "CT",
		zip: "06033",
		lat: 41.7123,
		lng: -72.6081
	},
	{
		id: "newington",
		name: "Newington",
		state: "CT",
		zip: "06111",
		lat: 41.6979,
		lng: -72.7237
	},
	{
		id: "wethersfield",
		name: "Wethersfield",
		state: "CT",
		zip: "06109",
		lat: 41.7143,
		lng: -72.6526
	},
	{
		id: "newbritain",
		name: "New Britain",
		state: "CT",
		zip: "06051",
		lat: 41.6612,
		lng: -72.7796
	},
	{
		id: "southington",
		name: "Southington",
		state: "CT",
		zip: "06489",
		lat: 41.6005,
		lng: -72.8783
	},
	{
		id: "farmington",
		name: "Farmington",
		state: "CT",
		zip: "06032",
		lat: 41.7198,
		lng: -72.832
	},
	{
		id: "avon",
		name: "Avon",
		state: "CT",
		zip: "06001",
		lat: 41.8098,
		lng: -72.8307
	},
	{
		id: "simsbury",
		name: "Simsbury",
		state: "CT",
		zip: "06070",
		lat: 41.8759,
		lng: -72.8012
	},
	{
		id: "bloomfield",
		name: "Bloomfield",
		state: "CT",
		zip: "06002",
		lat: 41.8313,
		lng: -72.737
	},
	{
		id: "enfield",
		name: "Enfield",
		state: "CT",
		zip: "06082",
		lat: 41.9768,
		lng: -72.5917
	},
	{
		id: "vernon",
		name: "Vernon",
		state: "CT",
		zip: "06066",
		lat: 41.8383,
		lng: -72.4663
	},
	{
		id: "middletown",
		name: "Middletown",
		state: "CT",
		zip: "06457",
		lat: 41.5623,
		lng: -72.6509
	},
	{
		id: "cromwell",
		name: "Cromwell",
		state: "CT",
		zip: "06416",
		lat: 41.595,
		lng: -72.6456
	},
	{
		id: "oldsaybrook",
		name: "Old Saybrook",
		state: "CT",
		zip: "06475",
		lat: 41.2918,
		lng: -72.3762
	},
	{
		id: "clinton",
		name: "Clinton",
		state: "CT",
		zip: "06413",
		lat: 41.2787,
		lng: -72.5276
	},
	{
		id: "newlondon",
		name: "New London",
		state: "CT",
		zip: "06320",
		lat: 41.3556,
		lng: -72.0998
	},
	{
		id: "groton",
		name: "Groton",
		state: "CT",
		zip: "06340",
		lat: 41.3466,
		lng: -72.0389
	},
	{
		id: "norwich",
		name: "Norwich",
		state: "CT",
		zip: "06360",
		lat: 41.5244,
		lng: -72.0759
	},
	{
		id: "waterford",
		name: "Waterford",
		state: "CT",
		zip: "06385",
		lat: 41.343,
		lng: -72.1291
	},
	{
		id: "colchester",
		name: "Colchester",
		state: "CT",
		zip: "06415",
		lat: 41.5757,
		lng: -72.332
	},
	{
		id: "willimantic",
		name: "Willimantic",
		state: "CT",
		zip: "06226",
		lat: 41.7131,
		lng: -72.2179
	},
	{
		id: "putnam",
		name: "Putnam",
		state: "CT",
		zip: "06260",
		lat: 41.915,
		lng: -71.909
	},
	{
		id: "storrs",
		name: "Storrs",
		state: "CT",
		zip: "06268",
		lat: 41.8086,
		lng: -72.2513
	},
	{
		id: "winsted",
		name: "Winsted",
		state: "CT",
		zip: "06098",
		lat: 41.9212,
		lng: -73.0601
	},
	{
		id: "danielson",
		name: "Danielson",
		state: "CT",
		zip: "06239",
		lat: 41.8046,
		lng: -71.8842
	},
	{
		id: "northwindham",
		name: "North Windham",
		state: "CT",
		zip: "06256",
		lat: 41.748,
		lng: -72.1558
	},
	{
		id: "derby",
		name: "Derby",
		state: "CT",
		zip: "06407",
		lat: 41.3202,
		lng: -73.0389
	},
	{
		id: "easthaven",
		name: "East Haven",
		state: "CT",
		zip: "06512",
		lat: 41.2762,
		lng: -72.8684
	},
	{
		id: "canton",
		name: "Canton",
		state: "CT",
		zip: "06019",
		lat: 41.8245,
		lng: -72.8937
	},
	{
		id: "plainville",
		name: "Plainville",
		state: "CT",
		zip: "06062",
		lat: 41.6711,
		lng: -72.8672
	},
	{
		id: "rockyhill",
		name: "Rocky Hill",
		state: "CT",
		zip: "06067",
		lat: 41.6648,
		lng: -72.6393
	},
	{
		id: "windsor",
		name: "Windsor",
		state: "CT",
		zip: "06095",
		lat: 41.8526,
		lng: -72.6437
	},
	{
		id: "guilford",
		name: "Guilford",
		state: "CT",
		zip: "06437",
		lat: 41.2828,
		lng: -72.6816
	},
	{
		id: "monroe",
		name: "Monroe",
		state: "CT",
		zip: "06468",
		lat: 41.3326,
		lng: -73.2073
	},
	{
		id: "brookfield",
		name: "Brookfield",
		state: "CT",
		zip: "06804",
		lat: 41.4659,
		lng: -73.3876
	},
	{
		id: "newcanaan",
		name: "New Canaan",
		state: "CT",
		zip: "06840",
		lat: 41.1421,
		lng: -73.4876
	},
	{
		id: "southwindsor",
		name: "South Windsor",
		state: "CT",
		zip: "06074",
		lat: 41.8352,
		lng: -72.5563
	},
	{
		id: "eastlyme",
		name: "East Lyme",
		state: "CT",
		zip: "06333",
		lat: 41.3482,
		lng: -72.2093
	},
	{
		id: "mystic",
		name: "Mystic",
		state: "CT",
		zip: "06388",
		lat: 41.3542,
		lng: -71.9664
	},
	{
		id: "altamontesprings",
		name: "Altamonte Springs",
		state: "FL",
		zip: "32701",
		lat: 28.6611,
		lng: -81.3656
	},
	{
		id: "apopka",
		name: "Apopka",
		state: "FL",
		zip: "32703",
		lat: 28.6762,
		lng: -81.5119
	},
	{
		id: "avemaria",
		name: "Ave Maria",
		state: "FL",
		zip: "34142",
		lat: 26.3351,
		lng: -81.4359
	},
	{
		id: "belleglade",
		name: "Belle Glade",
		state: "FL",
		zip: "33430",
		lat: 26.6845,
		lng: -80.6676
	},
	{
		id: "bocaraton",
		name: "Boca Raton",
		state: "FL",
		zip: "33427",
		lat: 26.3587,
		lng: -80.0831
	},
	{
		id: "bonitasprings",
		name: "Bonita Springs",
		state: "FL",
		zip: "34133",
		lat: 26.3398,
		lng: -81.7787
	},
	{
		id: "boyntonbeach",
		name: "Boynton Beach",
		state: "FL",
		zip: "33424",
		lat: 26.5254,
		lng: -80.0664
	},
	{
		id: "bradenton",
		name: "Bradenton",
		state: "FL",
		zip: "34201",
		lat: 27.4989,
		lng: -82.5748
	},
	{
		id: "brandon",
		name: "Brandon",
		state: "FL",
		zip: "33509",
		lat: 27.9378,
		lng: -82.2859
	},
	{
		id: "brooksville",
		name: "Brooksville",
		state: "FL",
		zip: "34601",
		lat: 28.5555,
		lng: -82.3899
	},
	{
		id: "capecoral",
		name: "Cape Coral",
		state: "FL",
		zip: "33904",
		lat: 26.5629,
		lng: -81.9495
	},
	{
		id: "clearwater",
		name: "Clearwater",
		state: "FL",
		zip: "33755",
		lat: 27.9659,
		lng: -82.8001
	},
	{
		id: "clermont",
		name: "Clermont",
		state: "FL",
		zip: "34711",
		lat: 28.5494,
		lng: -81.7728
	},
	{
		id: "clewiston",
		name: "Clewiston",
		state: "FL",
		zip: "33440",
		lat: 26.7542,
		lng: -80.9337
	},
	{
		id: "cocoa",
		name: "Cocoa",
		state: "FL",
		zip: "32922",
		lat: 28.3861,
		lng: -80.742
	},
	{
		id: "coralgables",
		name: "Coral Gables",
		state: "FL",
		zip: "33134",
		lat: 25.7215,
		lng: -80.2684
	},
	{
		id: "crestview",
		name: "Crestview",
		state: "FL",
		zip: "32536",
		lat: 30.7621,
		lng: -86.5705
	},
	{
		id: "crystalriver",
		name: "Crystal River",
		state: "FL",
		zip: "34423",
		lat: 28.9025,
		lng: -82.5926
	},
	{
		id: "cutlerbay",
		name: "Cutler Bay",
		state: "FL",
		zip: "33189",
		lat: 25.5783,
		lng: -80.3377
	},
	{
		id: "davie",
		name: "Davie",
		state: "FL",
		zip: "33314",
		lat: 26.0629,
		lng: -80.2331
	},
	{
		id: "daytonabeach",
		name: "Daytona Beach",
		state: "FL",
		zip: "32114",
		lat: 29.2108,
		lng: -81.0228
	},
	{
		id: "deerfieldbeach",
		name: "Deerfield Beach",
		state: "FL",
		zip: "33441",
		lat: 26.3184,
		lng: -80.0998
	},
	{
		id: "deland",
		name: "DeLand",
		state: "FL",
		zip: "32720",
		lat: 29.0283,
		lng: -81.3031
	},
	{
		id: "delraybeach",
		name: "Delray Beach",
		state: "FL",
		zip: "33444",
		lat: 26.4615,
		lng: -80.0728
	},
	{
		id: "destin",
		name: "Destin",
		state: "FL",
		zip: "32540",
		lat: 30.3935,
		lng: -86.4958
	},
	{
		id: "doral",
		name: "Doral",
		state: "FL",
		zip: "33178",
		lat: 25.8195,
		lng: -80.3553
	},
	{
		id: "fernandinabeach",
		name: "Fernandina Beach",
		state: "FL",
		zip: "32034",
		lat: 30.6697,
		lng: -81.4626
	},
	{
		id: "floridacity",
		name: "Florida City",
		state: "FL",
		zip: "33034",
		lat: 25.4479,
		lng: -80.4792
	},
	{
		id: "fortlauderdale",
		name: "Fort Lauderdale",
		state: "FL",
		zip: "33301",
		lat: 26.1223,
		lng: -80.1434
	},
	{
		id: "fortmyers",
		name: "Fort Myers",
		state: "FL",
		zip: "33901",
		lat: 26.6217,
		lng: -81.8406
	},
	{
		id: "fortpierce",
		name: "Fort Pierce",
		state: "FL",
		zip: "34945",
		lat: 27.4467,
		lng: -80.3256
	},
	{
		id: "fortwaltonbeach",
		name: "Fort Walton Beach",
		state: "FL",
		zip: "32547",
		lat: 30.4206,
		lng: -86.6171
	},
	{
		id: "gainesville",
		name: "Gainesville",
		state: "FL",
		zip: "32601",
		lat: 29.6516,
		lng: -82.3248
	},
	{
		id: "hialeah",
		name: "Hialeah",
		state: "FL",
		zip: "33002",
		lat: 25.8576,
		lng: -80.2781
	},
	{
		id: "hollywood",
		name: "Hollywood",
		state: "FL",
		zip: "33019",
		lat: 26.0112,
		lng: -80.1495
	},
	{
		id: "homestead",
		name: "Homestead",
		state: "FL",
		zip: "33030",
		lat: 25.4687,
		lng: -80.4776
	},
	{
		id: "immokalee",
		name: "Immokalee",
		state: "FL",
		zip: "34142",
		lat: 26.4187,
		lng: -81.4173
	},
	{
		id: "inverness",
		name: "Inverness",
		state: "FL",
		zip: "34450",
		lat: 28.8358,
		lng: -82.3304
	},
	{
		id: "islamorada",
		name: "Islamorada",
		state: "FL",
		zip: "33036",
		lat: 24.9243,
		lng: -80.6278
	},
	{
		id: "jacksonville",
		name: "Jacksonville",
		state: "FL",
		zip: "32099",
		lat: 30.3322,
		lng: -81.6556
	},
	{
		id: "jacksonvillebeach",
		name: "Jacksonville Beach",
		state: "FL",
		zip: "32240",
		lat: 30.2947,
		lng: -81.3931
	},
	{
		id: "jupiter",
		name: "Jupiter",
		state: "FL",
		zip: "33458",
		lat: 26.9342,
		lng: -80.0942
	},
	{
		id: "kendall",
		name: "Kendall",
		state: "FL",
		zip: "33183",
		lat: 25.6793,
		lng: -80.3173
	},
	{
		id: "keylargo",
		name: "Key Largo",
		state: "FL",
		zip: "33037",
		lat: 25.0865,
		lng: -80.4473
	},
	{
		id: "keywest",
		name: "Key West",
		state: "FL",
		zip: "33040",
		lat: 24.5552,
		lng: -81.7816
	},
	{
		id: "kissimmee",
		name: "Kissimmee",
		state: "FL",
		zip: "34741",
		lat: 28.3047,
		lng: -81.4167
	},
	{
		id: "lakecity",
		name: "Lake City",
		state: "FL",
		zip: "32024",
		lat: 30.1897,
		lng: -82.6393
	},
	{
		id: "lakemary",
		name: "Lake Mary",
		state: "FL",
		zip: "32746",
		lat: 28.7589,
		lng: -81.3178
	},
	{
		id: "lakeland",
		name: "Lakeland",
		state: "FL",
		zip: "33801",
		lat: 28.0395,
		lng: -81.9498
	},
	{
		id: "largo",
		name: "Largo",
		state: "FL",
		zip: "33770",
		lat: 27.9098,
		lng: -82.7884
	},
	{
		id: "leesburg",
		name: "Leesburg",
		state: "FL",
		zip: "34748",
		lat: 28.8108,
		lng: -81.8779
	},
	{
		id: "lehighacres",
		name: "Lehigh Acres",
		state: "FL",
		zip: "33936",
		lat: 26.6254,
		lng: -81.6248
	},
	{
		id: "liveoak",
		name: "Live Oak",
		state: "FL",
		zip: "32060",
		lat: 30.295,
		lng: -82.984
	},
	{
		id: "marathon",
		name: "Marathon",
		state: "FL",
		zip: "33050",
		lat: 24.7138,
		lng: -81.0903
	},
	{
		id: "marcoisland",
		name: "Marco Island",
		state: "FL",
		zip: "34145",
		lat: 25.9412,
		lng: -81.7184
	},
	{
		id: "marianna",
		name: "Marianna",
		state: "FL",
		zip: "32446",
		lat: 30.7744,
		lng: -85.2269
	},
	{
		id: "melbourne",
		name: "Melbourne",
		state: "FL",
		zip: "32901",
		lat: 28.0836,
		lng: -80.6081
	},
	{
		id: "merrittisland",
		name: "Merritt Island",
		state: "FL",
		zip: "32952",
		lat: 28.359,
		lng: -80.69
	},
	{
		id: "miami",
		name: "Miami",
		state: "FL",
		zip: "33101",
		lat: 25.7743,
		lng: -80.1937
	},
	{
		id: "miamibeach",
		name: "Miami Beach",
		state: "FL",
		zip: "33109",
		lat: 25.7907,
		lng: -80.13
	},
	{
		id: "naples",
		name: "Naples",
		state: "FL",
		zip: "34101",
		lat: 26.1423,
		lng: -81.796
	},
	{
		id: "navarre",
		name: "Navarre",
		state: "FL",
		zip: "32566",
		lat: 30.4016,
		lng: -86.8636
	},
	{
		id: "newportrichey",
		name: "New Port Richey",
		state: "FL",
		zip: "34652",
		lat: 28.2442,
		lng: -82.7193
	},
	{
		id: "newsmyrnabeach",
		name: "New Smyrna Beach",
		state: "FL",
		zip: "32168",
		lat: 29.0258,
		lng: -80.927
	},
	{
		id: "northport",
		name: "North Port",
		state: "FL",
		zip: "34286",
		lat: 27.0442,
		lng: -82.2359
	},
	{
		id: "ocala",
		name: "Ocala",
		state: "FL",
		zip: "34470",
		lat: 29.1872,
		lng: -82.1401
	},
	{
		id: "okeechobee",
		name: "Okeechobee",
		state: "FL",
		zip: "34972",
		lat: 27.2439,
		lng: -80.8298
	},
	{
		id: "orangepark",
		name: "Orange Park",
		state: "FL",
		zip: "32065",
		lat: 30.1661,
		lng: -81.7065
	},
	{
		id: "orlando",
		name: "Orlando",
		state: "FL",
		zip: "32801",
		lat: 28.5383,
		lng: -81.3792
	},
	{
		id: "ormondbeach",
		name: "Ormond Beach",
		state: "FL",
		zip: "32173",
		lat: 29.2858,
		lng: -81.0559
	},
	{
		id: "palatka",
		name: "Palatka",
		state: "FL",
		zip: "32177",
		lat: 29.6486,
		lng: -81.6376
	},
	{
		id: "palmbay",
		name: "Palm Bay",
		state: "FL",
		zip: "32905",
		lat: 28.0345,
		lng: -80.5887
	},
	{
		id: "palmbeachgardens",
		name: "Palm Beach Gardens",
		state: "FL",
		zip: "33410",
		lat: 26.8234,
		lng: -80.1386
	},
	{
		id: "palmharbor",
		name: "Palm Harbor",
		state: "FL",
		zip: "34682",
		lat: 28.0781,
		lng: -82.7637
	},
	{
		id: "panamacity",
		name: "Panama City",
		state: "FL",
		zip: "32401",
		lat: 30.1595,
		lng: -85.6598
	},
	{
		id: "panamacitybeach",
		name: "Panama City Beach",
		state: "FL",
		zip: "32407",
		lat: 30.1766,
		lng: -85.8055
	},
	{
		id: "pembrokepines",
		name: "Pembroke Pines",
		state: "FL",
		zip: "33028",
		lat: 26.0032,
		lng: -80.2239
	},
	{
		id: "pensacola",
		name: "Pensacola",
		state: "FL",
		zip: "32501",
		lat: 30.4213,
		lng: -87.2169
	},
	{
		id: "perry",
		name: "Perry",
		state: "FL",
		zip: "32347",
		lat: 30.1177,
		lng: -83.5827
	},
	{
		id: "plantcity",
		name: "Plant City",
		state: "FL",
		zip: "33564",
		lat: 28.0189,
		lng: -82.1147
	},
	{
		id: "plantation",
		name: "Plantation",
		state: "FL",
		zip: "33317",
		lat: 26.1342,
		lng: -80.2318
	},
	{
		id: "pompanobeach",
		name: "Pompano Beach",
		state: "FL",
		zip: "33060",
		lat: 26.2379,
		lng: -80.1248
	},
	{
		id: "portcharlotte",
		name: "Port Charlotte",
		state: "FL",
		zip: "33948",
		lat: 26.9762,
		lng: -82.0906
	},
	{
		id: "portorange",
		name: "Port Orange",
		state: "FL",
		zip: "32129",
		lat: 29.1383,
		lng: -80.9956
	},
	{
		id: "portstlucie",
		name: "Port St. Lucie",
		state: "FL",
		zip: "34952",
		lat: 27.2939,
		lng: -80.3503
	},
	{
		id: "puntagorda",
		name: "Punta Gorda",
		state: "FL",
		zip: "33950",
		lat: 26.9298,
		lng: -82.0454
	},
	{
		id: "quincy",
		name: "Quincy",
		state: "FL",
		zip: "32351",
		lat: 30.5871,
		lng: -84.5833
	},
	{
		id: "riverview",
		name: "Riverview",
		state: "FL",
		zip: "33568",
		lat: 27.8661,
		lng: -82.3265
	},
	{
		id: "sanford",
		name: "Sanford",
		state: "FL",
		zip: "32771",
		lat: 28.8006,
		lng: -81.2731
	},
	{
		id: "sarasota",
		name: "Sarasota",
		state: "FL",
		zip: "34230",
		lat: 27.3364,
		lng: -82.5306
	},
	{
		id: "sebastian",
		name: "Sebastian",
		state: "FL",
		zip: "32958",
		lat: 27.8164,
		lng: -80.4706
	},
	{
		id: "sebring",
		name: "Sebring",
		state: "FL",
		zip: "33870",
		lat: 27.4956,
		lng: -81.4409
	},
	{
		id: "springhill",
		name: "Spring Hill",
		state: "FL",
		zip: "34606",
		lat: 28.4769,
		lng: -82.5255
	},
	{
		id: "staugustine",
		name: "St. Augustine",
		state: "FL",
		zip: "32084",
		lat: 29.8947,
		lng: -81.3145
	},
	{
		id: "stpetersburg",
		name: "St. Petersburg",
		state: "FL",
		zip: "33701",
		lat: 27.7709,
		lng: -82.6793
	},
	{
		id: "stuart",
		name: "Stuart",
		state: "FL",
		zip: "34994",
		lat: 27.1976,
		lng: -80.2528
	},
	{
		id: "sunrise",
		name: "Sunrise",
		state: "FL",
		zip: "33323",
		lat: 26.134,
		lng: -80.1131
	},
	{
		id: "tallahassee",
		name: "Tallahassee",
		state: "FL",
		zip: "32301",
		lat: 30.4383,
		lng: -84.2807
	},
	{
		id: "tampa",
		name: "Tampa",
		state: "FL",
		zip: "33601",
		lat: 27.9475,
		lng: -82.4584
	},
	{
		id: "thevillages",
		name: "The Villages",
		state: "FL",
		zip: "32162",
		lat: 28.9341,
		lng: -81.9599
	},
	{
		id: "titusville",
		name: "Titusville",
		state: "FL",
		zip: "32780",
		lat: 28.6122,
		lng: -80.8076
	},
	{
		id: "venice",
		name: "Venice",
		state: "FL",
		zip: "34284",
		lat: 27.0998,
		lng: -82.4543
	},
	{
		id: "verobeach",
		name: "Vero Beach",
		state: "FL",
		zip: "32960",
		lat: 27.6386,
		lng: -80.3973
	},
	{
		id: "wellington",
		name: "Wellington",
		state: "FL",
		zip: "33414",
		lat: 26.6584,
		lng: -80.2414
	},
	{
		id: "wesleychapel",
		name: "Wesley Chapel",
		state: "FL",
		zip: "33543",
		lat: 28.2397,
		lng: -82.3279
	},
	{
		id: "westpalmbeach",
		name: "West Palm Beach",
		state: "FL",
		zip: "33401",
		lat: 26.7153,
		lng: -80.0534
	},
	{
		id: "wintergarden",
		name: "Winter Garden",
		state: "FL",
		zip: "34777",
		lat: 28.5653,
		lng: -81.5862
	},
	{
		id: "winterhaven",
		name: "Winter Haven",
		state: "FL",
		zip: "33880",
		lat: 28.0222,
		lng: -81.7329
	},
	{
		id: "winterpark",
		name: "Winter Park",
		state: "FL",
		zip: "32789",
		lat: 28.6,
		lng: -81.3392
	}
];
var STORES = [
	{
		id: "adams",
		banner: "adams",
		name: "Adams IGA",
		aka: "Hometown Market",
		address: "92 Main St, Thomaston, CT 06787",
		hours: "7a–9p",
		kind: "Hometown grocer",
		lat: 41.6736,
		lng: -73.0738,
		mult: 1.1,
		loyaltyId: "adams-rewards",
		loyaltyName: "Adams Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "dg",
		banner: "dg",
		name: "Dollar General",
		aka: "South Main grocery",
		address: "475 S Main St, Thomaston, CT 06787",
		hours: "8a–10p",
		kind: "Discount",
		lat: 41.6635,
		lng: -73.0688,
		mult: .92,
		loyaltyId: "dg-rewards",
		loyaltyName: "DG Rewards",
		loyaltyHint: "Phone number"
	},
	{
		id: "terry",
		banner: "terry",
		name: "Adams Hometown",
		aka: "Terryville",
		address: "311 Main St, Terryville, CT 06786",
		hours: "7a–9p",
		kind: "Hometown grocer",
		lat: 41.6778,
		lng: -73.03,
		mult: 1.08,
		loyaltyId: "adams-rewards",
		loyaltyName: "Adams Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "labonne",
		banner: "labonne",
		name: "LaBonne's Market",
		address: "639 Straits Turnpike, Watertown, CT 06795",
		hours: "8a–8p",
		kind: "Hometown grocer",
		lat: 41.626,
		lng: -73.099,
		mult: 1.18,
		loyaltyId: "labonne",
		loyaltyName: "LaBonne's Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "stop",
		banner: "stop",
		name: "Stop & Shop",
		address: "763 Straits Turnpike, Watertown, CT 06795",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.6088,
		lng: -73.112,
		mult: 1.06,
		loyaltyId: "go-rewards",
		loyaltyName: "GO Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "shoprite",
		banner: "shoprite",
		name: "ShopRite",
		address: "943 Wolcott St, Waterbury, CT 06705",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.5755,
		lng: -73.012,
		mult: 1.02,
		loyaltyId: "price-plus",
		loyaltyName: "Price Plus",
		loyaltyHint: "Card or phone"
	},
	{
		id: "aldi",
		banner: "aldi",
		name: "ALDI",
		address: "320 East Elm St, Torrington, CT 06790",
		hours: "8:30a–8p",
		kind: "Discount",
		lat: 41.7998,
		lng: -73.1088,
		mult: .82
	},
	{
		id: "bigy",
		banner: "bigy",
		name: "Big Y",
		address: "504 Winsted Rd, Torrington, CT 06790",
		hours: "7a–9p",
		kind: "Chain",
		lat: 41.821,
		lng: -73.132,
		mult: 1.04,
		loyaltyId: "mybigy",
		loyaltyName: "myBigY",
		loyaltyHint: "Card or phone"
	},
	{
		id: "m32",
		banner: "m32",
		name: "Market 32",
		address: "990 Torringford St, Torrington, CT 06790",
		hours: "7a–11p",
		kind: "Chain",
		lat: 41.814,
		lng: -73.0585,
		mult: .98,
		loyaltyId: "advantedge",
		loyaltyName: "AdvantEdge",
		loyaltyHint: "Card or phone"
	},
	{
		id: "walmart",
		banner: "walmart",
		name: "Walmart",
		address: "970 Torringford St, Torrington, CT 06790",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 41.8105,
		lng: -73.066,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "ss-stamford",
		banner: "stop",
		name: "Stop & Shop",
		aka: "Stamford",
		address: "2200 Bedford Street, Stamford, CT 06905",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.068,
		lng: -73.545,
		mult: 1.06,
		loyaltyId: "go-rewards",
		loyaltyName: "GO Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "ss-norwalk",
		banner: "stop",
		name: "Stop & Shop",
		aka: "Norwalk",
		address: "385 Connecticut Avenue, Norwalk, CT 06854",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.1004,
		lng: -73.4394,
		mult: 1.06,
		loyaltyId: "go-rewards",
		loyaltyName: "GO Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "ss-greenwich",
		banner: "stop",
		name: "Stop & Shop",
		aka: "Greenwich",
		address: "161 West Putnam Avenue, Greenwich, CT 06831",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.0273,
		lng: -73.6313,
		mult: 1.06,
		loyaltyId: "go-rewards",
		loyaltyName: "GO Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "ss-fairfield",
		banner: "stop",
		name: "Stop & Shop",
		aka: "Fairfield",
		address: "1160 Kings Highway Cutoff, Fairfield, CT 06824",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.1512,
		lng: -73.2455,
		mult: 1.06,
		loyaltyId: "go-rewards",
		loyaltyName: "GO Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "ss-bridgeport",
		banner: "stop",
		name: "Stop & Shop",
		aka: "Bridgeport",
		address: "4531 Main Street, Bridgeport, CT 06606",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.2216,
		lng: -73.2191,
		mult: 1.06,
		loyaltyId: "go-rewards",
		loyaltyName: "GO Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "ss-stratford",
		banner: "stop",
		name: "Stop & Shop",
		aka: "Stratford",
		address: "200 East Main Street, Stratford, CT 06614",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.2025,
		lng: -73.1171,
		mult: 1.06,
		loyaltyId: "go-rewards",
		loyaltyName: "GO Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "ss-shelton",
		banner: "stop",
		name: "Stop & Shop",
		aka: "Shelton",
		address: "898 Bridgeport Avenue, Shelton, CT 06484",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.2638,
		lng: -73.1323,
		mult: 1.06,
		loyaltyId: "go-rewards",
		loyaltyName: "GO Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "ss-danbury",
		banner: "stop",
		name: "Stop & Shop",
		aka: "Danbury",
		address: "44 Lake Avenue Ext, Danbury, CT 06811",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.386,
		lng: -73.4879,
		mult: 1.06,
		loyaltyId: "go-rewards",
		loyaltyName: "GO Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "ss-newhaven",
		banner: "stop",
		name: "Stop & Shop",
		aka: "New Haven",
		address: "150 Whalley Avenue, New Haven, CT 06515",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.3138,
		lng: -72.9384,
		mult: 1.06,
		loyaltyId: "go-rewards",
		loyaltyName: "GO Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "ss-wh",
		banner: "stop",
		name: "Stop & Shop",
		aka: "West Hartford",
		address: "1235 Farmington Avenue, West Hartford, CT 06107",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.7543,
		lng: -72.7651,
		mult: 1.06,
		loyaltyId: "go-rewards",
		loyaltyName: "GO Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "ss-glastonbury",
		banner: "stop",
		name: "Stop & Shop",
		aka: "Glastonbury",
		address: "55 Oak Street, Glastonbury, CT 06033",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.7065,
		lng: -72.5949,
		mult: 1.06,
		loyaltyId: "go-rewards",
		loyaltyName: "GO Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "ss-manchester",
		banner: "stop",
		name: "Stop & Shop",
		aka: "Manchester",
		address: "318 West Middle Turnpike, Manchester, CT 06040",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.7792,
		lng: -72.5373,
		mult: 1.06,
		loyaltyId: "go-rewards",
		loyaltyName: "GO Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "ss-middletown",
		banner: "stop",
		name: "Stop & Shop",
		aka: "Middletown",
		address: "416 East Main Street, Middletown, CT 06457",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.5462,
		lng: -72.6371,
		mult: 1.06,
		loyaltyId: "go-rewards",
		loyaltyName: "GO Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "ss-torr",
		banner: "stop",
		name: "Stop & Shop",
		aka: "Torrington",
		address: "211 High Street, Torrington, CT 06790",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.8008,
		lng: -73.1278,
		mult: 1.06,
		loyaltyId: "go-rewards",
		loyaltyName: "GO Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "ss-winsted",
		banner: "stop",
		name: "Stop & Shop",
		aka: "Winsted",
		address: "200 New Hartford Road, Winsted, CT 06098",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.9089,
		lng: -73.0497,
		mult: 1.06,
		loyaltyId: "go-rewards",
		loyaltyName: "GO Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "sr-danbury",
		banner: "shoprite",
		name: "ShopRite",
		aka: "Danbury",
		address: "1 Padanaram Road, Danbury, CT 06811",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.4129,
		lng: -73.4556,
		mult: 1.02,
		loyaltyId: "price-plus",
		loyaltyName: "Price Plus",
		loyaltyHint: "Card or phone"
	},
	{
		id: "sr-norwalk",
		banner: "shoprite",
		name: "ShopRite",
		aka: "Norwalk",
		address: "360 Connecticut Avenue, Norwalk, CT 06854",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.1023,
		lng: -73.4399,
		mult: 1.02,
		loyaltyId: "price-plus",
		loyaltyName: "Price Plus",
		loyaltyHint: "Card or phone"
	},
	{
		id: "sr-fairfield",
		banner: "shoprite",
		name: "ShopRite",
		aka: "Fairfield",
		address: "1975 Black Rock Turnpike, Fairfield, CT 06824",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.1801,
		lng: -73.2498,
		mult: 1.02,
		loyaltyId: "price-plus",
		loyaltyName: "Price Plus",
		loyaltyHint: "Card or phone"
	},
	{
		id: "sr-hamden",
		banner: "shoprite",
		name: "ShopRite",
		aka: "Hamden",
		address: "2100 Dixwell Avenue, Hamden, CT 06514",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.3704,
		lng: -72.9214,
		mult: 1.02,
		loyaltyId: "price-plus",
		loyaltyName: "Price Plus",
		loyaltyHint: "Card or phone"
	},
	{
		id: "sr-manchester",
		banner: "shoprite",
		name: "ShopRite",
		aka: "Manchester",
		address: "214 Spencer Street, Manchester, CT 06040",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.7657,
		lng: -72.5704,
		mult: 1.02,
		loyaltyId: "price-plus",
		loyaltyName: "Price Plus",
		loyaltyHint: "Card or phone"
	},
	{
		id: "sr-wh",
		banner: "shoprite",
		name: "ShopRite",
		aka: "West Hartford",
		address: "46 Kane Street, West Hartford, CT 06119",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.7536,
		lng: -72.7157,
		mult: 1.02,
		loyaltyId: "price-plus",
		loyaltyName: "Price Plus",
		loyaltyHint: "Card or phone"
	},
	{
		id: "sr-newlondon",
		banner: "shoprite",
		name: "ShopRite",
		aka: "New London",
		address: "351 North Frontage Road, New London, CT 06320",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.372,
		lng: -72.1174,
		mult: 1.02,
		loyaltyId: "price-plus",
		loyaltyName: "Price Plus",
		loyaltyHint: "Card or phone"
	},
	{
		id: "sr-norwich",
		banner: "shoprite",
		name: "ShopRite",
		aka: "Norwich",
		address: "624 West Main Street, Norwich, CT 06360",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.5134,
		lng: -72.1012,
		mult: 1.02,
		loyaltyId: "price-plus",
		loyaltyName: "Price Plus",
		loyaltyHint: "Card or phone"
	},
	{
		id: "sr-bristol",
		banner: "shoprite",
		name: "ShopRite",
		aka: "Bristol",
		address: "1200 Farmington Avenue, Bristol, CT 06010",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.6958,
		lng: -72.9024,
		mult: 1.02,
		loyaltyId: "price-plus",
		loyaltyName: "Price Plus",
		loyaltyHint: "Card or phone"
	},
	{
		id: "sr-enfield",
		banner: "shoprite",
		name: "ShopRite",
		aka: "Enfield",
		address: "40 Hazard Avenue, Enfield, CT 06082",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.9879,
		lng: -72.5783,
		mult: 1.02,
		loyaltyId: "price-plus",
		loyaltyName: "Price Plus",
		loyaltyHint: "Card or phone"
	},
	{
		id: "sr-clinton",
		banner: "shoprite",
		name: "ShopRite",
		aka: "Clinton",
		address: "266 East Main Street, Clinton, CT 06413",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.2702,
		lng: -72.5016,
		mult: 1.02,
		loyaltyId: "price-plus",
		loyaltyName: "Price Plus",
		loyaltyHint: "Card or phone"
	},
	{
		id: "sr-southington",
		banner: "shoprite",
		name: "ShopRite",
		aka: "Southington",
		address: "750 Queen Street, Southington, CT 06489",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.6368,
		lng: -72.8751,
		mult: 1.02,
		loyaltyId: "price-plus",
		loyaltyName: "Price Plus",
		loyaltyHint: "Card or phone"
	},
	{
		id: "sr-easthartford",
		banner: "shoprite",
		name: "ShopRite",
		aka: "East Hartford",
		address: "31 Main Street, East Hartford, CT 06118",
		hours: "7a–10p",
		kind: "Chain",
		lat: 41.7286,
		lng: -72.6188,
		mult: 1.02,
		loyaltyId: "price-plus",
		loyaltyName: "Price Plus",
		loyaltyHint: "Card or phone"
	},
	{
		id: "wm-danbury",
		banner: "walmart",
		name: "Walmart",
		aka: "Danbury",
		address: "67 Newtown Road, Danbury, CT 06810",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 41.4064,
		lng: -73.4155,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-norwalk",
		banner: "walmart",
		name: "Walmart",
		aka: "Norwalk",
		address: "650 Main Avenue, Norwalk, CT 06851",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 41.159,
		lng: -73.4179,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-hartford",
		banner: "walmart",
		name: "Walmart",
		aka: "Hartford",
		address: "495 Flatbush Avenue, Hartford, CT 06106",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 41.7398,
		lng: -72.7135,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-manchester",
		banner: "walmart",
		name: "Walmart",
		aka: "Manchester",
		address: "420 Buckland Hills Drive, Manchester, CT 06042",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 41.8067,
		lng: -72.5378,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-hamden",
		banner: "walmart",
		name: "Walmart",
		aka: "Hamden",
		address: "2300 Dixwell Avenue, Hamden, CT 06514",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 41.3726,
		lng: -72.9194,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-milford",
		banner: "walmart",
		name: "Walmart",
		aka: "Milford",
		address: "1365 Boston Post Road, Milford, CT 06460",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 41.238,
		lng: -73.0317,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-groton",
		banner: "walmart",
		name: "Walmart",
		aka: "Groton",
		address: "150 Gold Star Highway, Groton, CT 06340",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 41.3699,
		lng: -72.065,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-newmilford",
		banner: "walmart",
		name: "Walmart",
		aka: "New Milford",
		address: "164 Danbury Road, New Milford, CT 06776",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 41.5519,
		lng: -73.4179,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-putnam",
		banner: "walmart",
		name: "Walmart",
		aka: "Putnam",
		address: "625 School Street, Putnam, CT 06260",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 41.9236,
		lng: -71.8884,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-oldsaybrook",
		banner: "walmart",
		name: "Walmart",
		aka: "Old Saybrook",
		address: "665 Boston Post Road, Old Saybrook, CT 06475",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 41.2966,
		lng: -72.3817,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-northwindham",
		banner: "walmart",
		name: "Walmart",
		aka: "North Windham",
		address: "474 Boston Post Road, North Windham, CT 06256",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 41.741,
		lng: -72.1741,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-cromwell",
		banner: "walmart",
		name: "Walmart",
		aka: "Cromwell",
		address: "161 Berlin Road, Cromwell, CT 06416",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 41.6055,
		lng: -72.7118,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-lisbon",
		banner: "walmart",
		name: "Walmart",
		aka: "Lisbon",
		address: "180 River Road, Lisbon, CT 06351",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 41.5836,
		lng: -71.9897,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-bristol",
		banner: "walmart",
		name: "Walmart",
		aka: "Bristol",
		address: "1400 Farmington Avenue, Bristol, CT 06010",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 41.6974,
		lng: -72.8969,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-wallingford",
		banner: "walmart",
		name: "Walmart",
		aka: "Wallingford",
		address: "844 North Colony Road, Wallingford, CT 06492",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 41.4775,
		lng: -72.8105,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-newhaven",
		banner: "walmart",
		name: "Walmart",
		aka: "New Haven",
		address: "315 Foxon Boulevard, New Haven, CT 06513",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 41.3201,
		lng: -72.8769,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "aldi-danbury",
		banner: "aldi",
		name: "ALDI",
		aka: "Danbury",
		address: "63 Newtown Road, Danbury, CT 06810",
		hours: "9a–8p",
		kind: "Discount",
		lat: 41.4048,
		lng: -73.419,
		mult: .82
	},
	{
		id: "aldi-bristol",
		banner: "aldi",
		name: "ALDI",
		aka: "Bristol",
		address: "110 Middle Street, Bristol, CT 06010",
		hours: "9a–8p",
		kind: "Discount",
		lat: 41.6659,
		lng: -72.9228,
		mult: .82
	},
	{
		id: "aldi-easthartford",
		banner: "aldi",
		name: "ALDI",
		aka: "East Hartford",
		address: "801 Silver Lane, East Hartford, CT 06118",
		hours: "9a–8p",
		kind: "Discount",
		lat: 41.7637,
		lng: -72.6088,
		mult: .82
	},
	{
		id: "aldi-groton",
		banner: "aldi",
		name: "ALDI",
		aka: "Groton",
		address: "688 Long Hill Road, Groton, CT 06340",
		hours: "9a–8p",
		kind: "Discount",
		lat: 41.3505,
		lng: -72.0547,
		mult: .82
	},
	{
		id: "aldi-dayville",
		banner: "aldi",
		name: "ALDI",
		aka: "Dayville",
		address: "728 Hartford Pike, Dayville, CT 06241",
		hours: "9a–8p",
		kind: "Discount",
		lat: 41.841,
		lng: -71.8744,
		mult: .82
	},
	{
		id: "aldi-fairfield",
		banner: "aldi",
		name: "ALDI",
		aka: "Fairfield",
		address: "290 Tunxis Hill Road, Fairfield, CT 06825",
		hours: "9a–8p",
		kind: "Discount",
		lat: 41.1771,
		lng: -73.2281,
		mult: .82
	},
	{
		id: "aldi-enfield",
		banner: "aldi",
		name: "ALDI",
		aka: "Enfield",
		address: "25 Hazard Avenue, Enfield, CT 06082",
		hours: "9a–8p",
		kind: "Discount",
		lat: 41.9914,
		lng: -72.5815,
		mult: .82
	},
	{
		id: "aldi-hamden",
		banner: "aldi",
		name: "ALDI",
		aka: "Hamden",
		address: "2300 Dixwell Avenue, Hamden, CT 06514",
		hours: "9a–8p",
		kind: "Discount",
		lat: 41.3726,
		lng: -72.9194,
		mult: .82
	},
	{
		id: "by-manchester",
		banner: "bigy",
		name: "Big Y",
		aka: "Manchester",
		address: "234 Tolland Turnpike, Manchester, CT 06042",
		hours: "7a–9p",
		kind: "Chain",
		lat: 41.8097,
		lng: -72.515,
		mult: 1.04,
		loyaltyId: "mybigy",
		loyaltyName: "myBigY",
		loyaltyHint: "Card or phone"
	},
	{
		id: "by-enfield",
		banner: "bigy",
		name: "Big Y",
		aka: "Enfield",
		address: "65 Palomba Drive, Enfield, CT 06082",
		hours: "7a–9p",
		kind: "Chain",
		lat: 41.9923,
		lng: -72.5695,
		mult: 1.04,
		loyaltyId: "mybigy",
		loyaltyName: "myBigY",
		loyaltyHint: "Card or phone"
	},
	{
		id: "by-norwich",
		banner: "bigy",
		name: "Big Y",
		aka: "Norwich",
		address: "2245 Salem Turnpike, Norwich, CT 06360",
		hours: "7a–9p",
		kind: "Chain",
		lat: 41.5021,
		lng: -72.1997,
		mult: 1.04,
		loyaltyId: "mybigy",
		loyaltyName: "myBigY",
		loyaltyHint: "Card or phone"
	},
	{
		id: "by-wh",
		banner: "bigy",
		name: "Big Y",
		aka: "West Hartford",
		address: "772 North Main Street, West Hartford, CT 06117",
		hours: "7a–9p",
		kind: "Chain",
		lat: 41.7868,
		lng: -72.7466,
		mult: 1.04,
		loyaltyId: "mybigy",
		loyaltyName: "myBigY",
		loyaltyHint: "Card or phone"
	},
	{
		id: "by-groton",
		banner: "bigy",
		name: "Big Y",
		aka: "Groton",
		address: "995 Poquonnock Road, Groton, CT 06340",
		hours: "7a–9p",
		kind: "Chain",
		lat: 41.345,
		lng: -72.049,
		mult: 1.04,
		loyaltyId: "mybigy",
		loyaltyName: "myBigY",
		loyaltyHint: "Card or phone"
	},
	{
		id: "by-northhaven",
		banner: "bigy",
		name: "Big Y",
		aka: "North Haven",
		address: "345 Washington Avenue, North Haven, CT 06473",
		hours: "7a–9p",
		kind: "Chain",
		lat: 41.4077,
		lng: -72.8459,
		mult: 1.04,
		loyaltyId: "mybigy",
		loyaltyName: "myBigY",
		loyaltyHint: "Card or phone"
	},
	{
		id: "by-newmilford",
		banner: "bigy",
		name: "Big Y",
		aka: "New Milford",
		address: "3 Kent Road, New Milford, CT 06755",
		hours: "7a–9p",
		kind: "Chain",
		lat: 41.6393,
		lng: -73.4821,
		mult: 1.04,
		loyaltyId: "mybigy",
		loyaltyName: "myBigY",
		loyaltyHint: "Card or phone"
	},
	{
		id: "by-mansfield",
		banner: "bigy",
		name: "Big Y",
		aka: "Mansfield",
		address: "141B Storrs Road, Mansfield, CT 06268",
		hours: "7a–9p",
		kind: "Chain",
		lat: 41.8353,
		lng: -72.3081,
		mult: 1.04,
		loyaltyId: "mybigy",
		loyaltyName: "myBigY",
		loyaltyHint: "Card or phone"
	},
	{
		id: "by-danielson",
		banner: "bigy",
		name: "Big Y",
		aka: "Danielson",
		address: "70 Wauregan Road, Danielson, CT 06239",
		hours: "7a–9p",
		kind: "Chain",
		lat: 41.7926,
		lng: -71.8841,
		mult: 1.04,
		loyaltyId: "mybigy",
		loyaltyName: "myBigY",
		loyaltyHint: "Card or phone"
	},
	{
		id: "by-stratford",
		banner: "bigy",
		name: "Big Y",
		aka: "Stratford",
		address: "355 Hawley Lane, Stratford, CT 06614",
		hours: "7a–9p",
		kind: "Chain",
		lat: 41.2321,
		lng: -73.1484,
		mult: 1.04,
		loyaltyId: "mybigy",
		loyaltyName: "myBigY",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-miami",
		banner: "publix",
		name: "Publix",
		aka: "Miami",
		address: "13001 SW 112th St, Miami, FL 33186",
		hours: "7a–10p",
		kind: "Chain",
		lat: 25.6635,
		lng: -80.4057,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-homestead",
		banner: "publix",
		name: "Publix",
		aka: "Homestead",
		address: "23300 SW 112th Ave, Homestead, FL 33032",
		hours: "7a–10p",
		kind: "Chain",
		lat: 25.5516,
		lng: -80.3721,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-keywest",
		banner: "publix",
		name: "Publix",
		aka: "Key West",
		address: "3316 N Roosevelt Blvd, Key West, FL 33040",
		hours: "7a–10p",
		kind: "Chain",
		lat: 24.5699,
		lng: -81.7658,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-keylargo",
		banner: "publix",
		name: "Publix",
		aka: "Key Largo",
		address: "101499 Overseas Hwy, Key Largo, FL 33037",
		hours: "7a–10p",
		kind: "Chain",
		lat: 25.1151,
		lng: -80.4211,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-ftl",
		banner: "publix",
		name: "Publix",
		aka: "Fort Lauderdale",
		address: "1417 E Sunrise Blvd, Fort Lauderdale, FL 33304",
		hours: "7a–10p",
		kind: "Chain",
		lat: 26.1374,
		lng: -80.1295,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-sunrise",
		banner: "publix",
		name: "Publix",
		aka: "Sunrise",
		address: "12500 W Sunrise Blvd, Sunrise, FL 33323",
		hours: "7a–10p",
		kind: "Chain",
		lat: 26.1456,
		lng: -80.3164,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-wpb",
		banner: "publix",
		name: "Publix",
		aka: "West Palm Beach",
		address: "2895 N Military Trl, West Palm Beach, FL 33409",
		hours: "7a–10p",
		kind: "Chain",
		lat: 26.72,
		lng: -80.1108,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-boynton",
		banner: "publix",
		name: "Publix",
		aka: "Boynton Beach",
		address: "6627 W Boynton Beach Blvd, Boynton Beach, FL 33437",
		hours: "7a–10p",
		kind: "Chain",
		lat: 26.5282,
		lng: -80.1493,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-orlando",
		banner: "publix",
		name: "Publix",
		aka: "Orlando",
		address: "4402 Curry Ford Rd, Orlando, FL 32812",
		hours: "7a–10p",
		kind: "Chain",
		lat: 28.5242,
		lng: -81.3309,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-tampa",
		banner: "publix",
		name: "Publix",
		aka: "Tampa",
		address: "10015 N Dale Mabry Hwy, Tampa, FL 33618",
		hours: "7a–10p",
		kind: "Chain",
		lat: 28.0403,
		lng: -82.5049,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-jax",
		banner: "publix",
		name: "Publix",
		aka: "Jacksonville",
		address: "7628 103rd St, Jacksonville, FL 32210",
		hours: "7a–10p",
		kind: "Chain",
		lat: 30.2482,
		lng: -81.7741,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-tallahassee",
		banner: "publix",
		name: "Publix",
		aka: "Tallahassee",
		address: "6753 Thomasville Rd, Tallahassee, FL 32312",
		hours: "7a–10p",
		kind: "Chain",
		lat: 30.5633,
		lng: -84.2151,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-gainesville",
		banner: "publix",
		name: "Publix",
		aka: "Gainesville",
		address: "5801 SW 75th St, Gainesville, FL 32608",
		hours: "7a–10p",
		kind: "Chain",
		lat: 29.6007,
		lng: -82.4213,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-fortmyers",
		banner: "publix",
		name: "Publix",
		aka: "Fort Myers",
		address: "15880 Summerlin Rd, Fort Myers, FL 33908",
		hours: "7a–10p",
		kind: "Chain",
		lat: 26.5123,
		lng: -81.9013,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-naples",
		banner: "publix",
		name: "Publix",
		aka: "Naples",
		address: "15265 Collier Blvd, Naples, FL 34119",
		hours: "7a–10p",
		kind: "Chain",
		lat: 26.2713,
		lng: -81.6894,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-sarasota",
		banner: "publix",
		name: "Publix",
		aka: "Sarasota",
		address: "4840 S Tamiami Trl, Sarasota, FL 34231",
		hours: "7a–10p",
		kind: "Chain",
		lat: 27.2842,
		lng: -82.5308,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-daytona",
		banner: "publix",
		name: "Publix",
		aka: "Daytona Beach",
		address: "2595 N Atlantic Ave, Daytona Beach, FL 32118",
		hours: "7a–10p",
		kind: "Chain",
		lat: 29.263,
		lng: -81.0261,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-melbourne",
		banner: "publix",
		name: "Publix",
		aka: "Melbourne",
		address: "3200 Lake Washington Rd, Melbourne, FL 32934",
		hours: "7a–10p",
		kind: "Chain",
		lat: 28.1467,
		lng: -80.675,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-panamacity",
		banner: "publix",
		name: "Publix",
		aka: "Panama City",
		address: "650 W 23rd St, Panama City, FL 32405",
		hours: "7a–10p",
		kind: "Chain",
		lat: 30.1898,
		lng: -85.6702,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-pensacola",
		banner: "publix",
		name: "Publix",
		aka: "Pensacola",
		address: "5055 N 9th Ave, Pensacola, FL 32504",
		hours: "7a–10p",
		kind: "Chain",
		lat: 30.4724,
		lng: -87.2129,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "wm-miami",
		banner: "walmart",
		name: "Walmart",
		aka: "Miami",
		address: "3200 NW 79th St, Miami, FL 33147",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 25.8457,
		lng: -80.25,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-homestead",
		banner: "walmart",
		name: "Walmart",
		aka: "Homestead",
		address: "1499 Dixie Hwy, Homestead, FL 33034",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 25.4619,
		lng: -80.4751,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-ftl",
		banner: "walmart",
		name: "Walmart",
		aka: "Fort Lauderdale",
		address: "2500 W Broward Blvd, Fort Lauderdale, FL 33312",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 26.1215,
		lng: -80.1755,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-wpb",
		banner: "walmart",
		name: "Walmart",
		aka: "West Palm Beach",
		address: "9990 Belvedere Rd, West Palm Beach, FL 33411",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 26.6915,
		lng: -80.2011,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-orlando",
		banner: "walmart",
		name: "Walmart",
		aka: "Orlando",
		address: "1101 S Goldwyn Ave, Orlando, FL 32805",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 28.5284,
		lng: -81.4179,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-tampa",
		banner: "walmart",
		name: "Walmart",
		aka: "Tampa",
		address: "6216 Elliot Dr, Tampa, FL 33615",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 28.0049,
		lng: -82.5989,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-stpete",
		banner: "walmart",
		name: "Walmart",
		aka: "St. Petersburg",
		address: "3501 34th St S, St. Petersburg, FL 33711",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 27.7363,
		lng: -82.6794,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-sarasota",
		banner: "walmart",
		name: "Walmart",
		aka: "Sarasota",
		address: "3560 Bee Ridge Rd, Sarasota, FL 34239",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 27.2987,
		lng: -82.4984,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-fortmyers",
		banner: "walmart",
		name: "Walmart",
		aka: "Fort Myers",
		address: "9131 College Pkwy, Fort Myers, FL 33919",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 26.5564,
		lng: -81.9046,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-naples",
		banner: "walmart",
		name: "Walmart",
		aka: "Naples",
		address: "6650 Collier Blvd, Naples, FL 34114",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 26.0559,
		lng: -81.6994,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-jax",
		banner: "walmart",
		name: "Walmart",
		aka: "Jacksonville",
		address: "8011 Merrill Rd, Jacksonville, FL 32277",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 30.3524,
		lng: -81.5626,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-gainesville",
		banner: "walmart",
		name: "Walmart",
		aka: "Gainesville",
		address: "1800 NE 12th Ave, Gainesville, FL 32641",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 29.6631,
		lng: -82.3026,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-pensacola",
		banner: "walmart",
		name: "Walmart",
		aka: "Pensacola",
		address: "6670 Mobile Hwy, Pensacola, FL 32526",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 30.475,
		lng: -87.3077,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-panamacity",
		banner: "walmart",
		name: "Walmart",
		aka: "Panama City",
		address: "513 W 23rd St, Panama City, FL 32405",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 30.1897,
		lng: -85.6681,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-daytona",
		banner: "walmart",
		name: "Walmart",
		aka: "Daytona Beach",
		address: "1101 Beville Rd, Daytona Beach, FL 32119",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 29.1743,
		lng: -81.0308,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-ocala",
		banner: "walmart",
		name: "Walmart",
		aka: "Ocala",
		address: "7855 State Rd 200, Ocala, FL 34476",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 29.0869,
		lng: -82.2496,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-lakeland",
		banner: "walmart",
		name: "Walmart",
		aka: "Lakeland",
		address: "5800 US Hwy 98 N, Lakeland, FL 33809",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 28.1203,
		lng: -81.9739,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "aldi-orlando",
		banner: "aldi",
		name: "ALDI",
		aka: "Orlando",
		address: "4607 S Orange Blossom Trl, Orlando, FL 32839",
		hours: "9a–8p",
		kind: "Discount",
		lat: 28.4979,
		lng: -81.3968,
		mult: .82
	},
	{
		id: "aldi-tampa",
		banner: "aldi",
		name: "ALDI",
		aka: "Tampa",
		address: "14933 N Florida Ave, Tampa, FL 33613",
		hours: "9a–8p",
		kind: "Discount",
		lat: 28.086,
		lng: -82.4595,
		mult: .82
	},
	{
		id: "aldi-jax",
		banner: "aldi",
		name: "ALDI",
		aka: "Jacksonville",
		address: "2261 Edgewood Ave W, Jacksonville, FL 32209",
		hours: "9a–8p",
		kind: "Discount",
		lat: 30.3789,
		lng: -81.6983,
		mult: .82
	},
	{
		id: "aldi-fortmyers",
		banner: "aldi",
		name: "ALDI",
		aka: "Fort Myers",
		address: "11281 Cleveland Ave, Fort Myers, FL 33907",
		hours: "9a–8p",
		kind: "Discount",
		lat: 26.5754,
		lng: -81.8718,
		mult: .82
	},
	{
		id: "aldi-wpb",
		banner: "aldi",
		name: "ALDI",
		aka: "West Palm Beach",
		address: "2481 Okeechobee Blvd, West Palm Beach, FL 33409",
		hours: "9a–8p",
		kind: "Discount",
		lat: 26.7065,
		lng: -80.0899,
		mult: .82
	},
	{
		id: "aldi-tallahassee",
		banner: "aldi",
		name: "ALDI",
		aka: "Tallahassee",
		address: "2020 W Pensacola St, Tallahassee, FL 32304",
		hours: "9a–8p",
		kind: "Discount",
		lat: 30.4407,
		lng: -84.3191,
		mult: .82
	},
	{
		id: "aldi-pensacola",
		banner: "aldi",
		name: "ALDI",
		aka: "Pensacola",
		address: "2950 S Blue Angel Pkwy, Pensacola, FL 32506",
		hours: "9a–8p",
		kind: "Discount",
		lat: 30.3622,
		lng: -87.3593,
		mult: .82
	},
	{
		id: "aldi-gainesville",
		banner: "aldi",
		name: "ALDI",
		aka: "Gainesville",
		address: "3773 SW 13th St, Gainesville, FL 32609",
		hours: "9a–8p",
		kind: "Discount",
		lat: 29.6873,
		lng: -82.3389,
		mult: .82
	},
	{
		id: "aldi-sarasota",
		banner: "aldi",
		name: "ALDI",
		aka: "Sarasota",
		address: "3501 S Tamiami Trl, Sarasota, FL 34239",
		hours: "9a–8p",
		kind: "Discount",
		lat: 27.3005,
		lng: -82.5304,
		mult: .82
	},
	{
		id: "wd-miami",
		banner: "winndixie",
		name: "Winn-Dixie",
		aka: "Miami",
		address: "11241 SW 40th St, Miami, FL 33165",
		hours: "7a–10p",
		kind: "Chain",
		lat: 25.7322,
		lng: -80.3765,
		mult: .96,
		loyaltyId: "winn-dixie",
		loyaltyName: "Winn-Dixie Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "wd-keywest",
		banner: "winndixie",
		name: "Winn-Dixie",
		aka: "Key West",
		address: "2778 N Roosevelt Blvd, Key West, FL 33040",
		hours: "7a–10p",
		kind: "Chain",
		lat: 24.5647,
		lng: -81.7743,
		mult: .96,
		loyaltyId: "winn-dixie",
		loyaltyName: "Winn-Dixie Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "wd-tampa",
		banner: "winndixie",
		name: "Winn-Dixie",
		aka: "Tampa",
		address: "805 E Dr Martin Luther King Jr Blvd, Tampa, FL 33603",
		hours: "7a–10p",
		kind: "Chain",
		lat: 27.9814,
		lng: -82.4532,
		mult: .96,
		loyaltyId: "winn-dixie",
		loyaltyName: "Winn-Dixie Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "wd-jax",
		banner: "winndixie",
		name: "Winn-Dixie",
		aka: "Jacksonville",
		address: "5647 Roosevelt Blvd, Jacksonville, FL 32244",
		hours: "7a–10p",
		kind: "Chain",
		lat: 30.2456,
		lng: -81.697,
		mult: .96,
		loyaltyId: "winn-dixie",
		loyaltyName: "Winn-Dixie Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "wd-pensacola",
		banner: "winndixie",
		name: "Winn-Dixie",
		aka: "Pensacola",
		address: "13019 Sorrento Rd, Pensacola, FL 32507",
		hours: "7a–10p",
		kind: "Chain",
		lat: 30.324,
		lng: -87.4166,
		mult: .96,
		loyaltyId: "winn-dixie",
		loyaltyName: "Winn-Dixie Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "wd-homestead",
		banner: "winndixie",
		name: "Winn-Dixie",
		aka: "Homestead",
		address: "27359 Dixie Hwy, Homestead, FL 33032",
		hours: "7a–10p",
		kind: "Chain",
		lat: 25.5131,
		lng: -80.4327,
		mult: .96,
		loyaltyId: "winn-dixie",
		loyaltyName: "Winn-Dixie Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "wd-portcharlotte",
		banner: "winndixie",
		name: "Winn-Dixie",
		aka: "Port Charlotte",
		address: "3280 Tamiami Trl, Port Charlotte, FL 33952",
		hours: "7a–10p",
		kind: "Chain",
		lat: 26.9823,
		lng: -82.0988,
		mult: .96,
		loyaltyId: "winn-dixie",
		loyaltyName: "Winn-Dixie Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "wd-fwb",
		banner: "winndixie",
		name: "Winn-Dixie",
		aka: "Fort Walton Beach",
		address: "798 Beal Pkwy NW, Fort Walton Beach, FL 32547",
		hours: "7a–10p",
		kind: "Chain",
		lat: 30.4475,
		lng: -86.6386,
		mult: .96,
		loyaltyId: "winn-dixie",
		loyaltyName: "Winn-Dixie Rewards",
		loyaltyHint: "Card or phone"
	},
	{
		id: "wm-melbourne",
		banner: "walmart",
		name: "Walmart",
		aka: "Melbourne",
		address: "1001 W Eau Gallie Blvd, Melbourne, FL 32935",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 28.1288,
		lng: -80.6352,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "aldi-homestead",
		banner: "aldi",
		name: "ALDI",
		aka: "Homestead",
		address: "11300 SW 248th St, Homestead, FL 33032",
		hours: "9a–8p",
		kind: "Discount",
		lat: 25.5369,
		lng: -80.3827,
		mult: .82
	},
	{
		id: "wm-ftpierce",
		banner: "walmart",
		name: "Walmart",
		aka: "Fort Pierce",
		address: "5100 Okeechobee Rd, Fort Pierce, FL 34947",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 27.4201,
		lng: -80.3763,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-vero",
		banner: "walmart",
		name: "Walmart",
		aka: "Vero Beach",
		address: "5555 20th St, Vero Beach, FL 32966",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 27.6386,
		lng: -80.4392,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-stuart",
		banner: "walmart",
		name: "Walmart",
		aka: "Stuart",
		address: "4000 SE Federal Hwy, Stuart, FL 34997",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 27.1535,
		lng: -80.2195,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-titusville",
		banner: "walmart",
		name: "Walmart",
		aka: "Titusville",
		address: "3125 Columbia Blvd, Titusville, FL 32780",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 28.5535,
		lng: -80.8419,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-leesburg",
		banner: "walmart",
		name: "Walmart",
		aka: "Leesburg",
		address: "2500 Citrus Blvd, Leesburg, FL 34748",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 28.8431,
		lng: -81.8965,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-sebring",
		banner: "walmart",
		name: "Walmart",
		aka: "Sebring",
		address: "2400 US Hwy 27, Sebring, FL 33870",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 27.5076,
		lng: -81.4922,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-lakecity",
		banner: "walmart",
		name: "Walmart",
		aka: "Lake City",
		address: "4870 US Hwy 90, Lake City, FL 32055",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 30.1845,
		lng: -82.7096,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-palatka",
		banner: "walmart",
		name: "Walmart",
		aka: "Palatka",
		address: "1515 Reid St, Palatka, FL 32177",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 29.6495,
		lng: -81.6446,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-liveoak",
		banner: "walmart",
		name: "Walmart",
		aka: "Live Oak",
		address: "725 Ohio Ave S, Live Oak, FL 32064",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 30.2907,
		lng: -82.9875,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-perry",
		banner: "walmart",
		name: "Walmart",
		aka: "Perry",
		address: "1850 S Byron Butler Pkwy, Perry, FL 32348",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 30.1004,
		lng: -83.5853,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-crystal",
		banner: "walmart",
		name: "Walmart",
		aka: "Crystal River",
		address: "705 N Suncoast Blvd, Crystal River, FL 34429",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 28.8875,
		lng: -82.5841,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-brooksville",
		banner: "walmart",
		name: "Walmart",
		aka: "Brooksville",
		address: "7305 Broad St, Brooksville, FL 34601",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 28.5343,
		lng: -82.4073,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-springhill",
		banner: "walmart",
		name: "Walmart",
		aka: "Spring Hill",
		address: "1485 Commercial Way, Spring Hill, FL 34606",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 28.4571,
		lng: -82.6287,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-okeechobee",
		banner: "walmart",
		name: "Walmart",
		aka: "Okeechobee",
		address: "2100 N Parrott Ave, Okeechobee, FL 34974",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 27.2237,
		lng: -80.8299,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-belleglade",
		banner: "walmart",
		name: "Walmart",
		aka: "Belle Glade",
		address: "100 S Main St, Belle Glade, FL 33430",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 26.6857,
		lng: -80.6679,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "px-marathon",
		banner: "publix",
		name: "Publix",
		aka: "Marathon",
		address: "5407 Overseas Hwy, Marathon, FL 33050",
		hours: "7a–10p",
		kind: "Chain",
		lat: 24.7158,
		lng: -81.0769,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "wm-crestview",
		banner: "walmart",
		name: "Walmart",
		aka: "Crestview",
		address: "4100 S Ferdon Blvd, Crestview, FL 32536",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 30.718,
		lng: -86.5697,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "px-fernandina",
		banner: "publix",
		name: "Publix",
		aka: "Fernandina Beach",
		address: "1525 Sadler Rd, Fernandina Beach, FL 32034",
		hours: "7a–10p",
		kind: "Chain",
		lat: 30.6398,
		lng: -81.4509,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "wm-sebastian",
		banner: "walmart",
		name: "Walmart",
		aka: "Sebastian",
		address: "2001 US Hwy 1, Sebastian, FL 32958",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 27.8313,
		lng: -80.4808,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "px-psl",
		banner: "publix",
		name: "Publix",
		aka: "Port St. Lucie",
		address: "1650 SE Port St Lucie Blvd, Port Saint Lucie, FL 34952",
		hours: "7a–10p",
		kind: "Chain",
		lat: 27.271,
		lng: -80.3012,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "wm-quincy",
		banner: "walmart",
		name: "Walmart",
		aka: "Quincy",
		address: "1200 W Jefferson St, Quincy, FL 32351",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 30.5881,
		lng: -84.5918,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "px-staugustine",
		banner: "publix",
		name: "Publix",
		aka: "St. Augustine",
		address: "125 Jenkins St, St. Augustine, FL 32086",
		hours: "7a–10p",
		kind: "Chain",
		lat: 29.8658,
		lng: -81.3274,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-clermont",
		banner: "publix",
		name: "Publix",
		aka: "Clermont",
		address: "1720 State Rd 50, Clermont, FL 34711",
		hours: "7a–10p",
		kind: "Chain",
		lat: 28.5469,
		lng: -81.7248,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-clearwater",
		banner: "publix",
		name: "Publix",
		aka: "Clearwater",
		address: "619 S Fort Harrison Ave, Clearwater, FL 33756",
		hours: "7a–10p",
		kind: "Chain",
		lat: 27.9593,
		lng: -82.7999,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-ocala",
		banner: "publix",
		name: "Publix",
		aka: "Ocala",
		address: "303 SE 17th St, Ocala, FL 34471",
		hours: "7a–10p",
		kind: "Chain",
		lat: 29.1718,
		lng: -82.1342,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-islamorada",
		banner: "publix",
		name: "Publix",
		aka: "Islamorada",
		address: "83268 Overseas Hwy, Islamorada, FL 33036",
		hours: "7a–10p",
		kind: "Chain",
		lat: 24.9337,
		lng: -80.6174,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "px-avemaria",
		banner: "publix",
		name: "Publix",
		aka: "Ave Maria",
		address: "4975 Avila Ave, Ave Maria, FL 34142",
		hours: "7a–10p",
		kind: "Chain",
		lat: 26.3351,
		lng: -81.4359,
		mult: 1.05,
		loyaltyId: "club-publix",
		loyaltyName: "Club Publix",
		loyaltyHint: "Card or phone"
	},
	{
		id: "wm-sanford",
		banner: "walmart",
		name: "Walmart",
		aka: "Sanford",
		address: "1601 Rinehart Rd, Sanford, FL 32771",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 28.802,
		lng: -81.3309,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-deland",
		banner: "walmart",
		name: "Walmart",
		aka: "DeLand",
		address: "1699 N Woodland Blvd, DeLand, FL 32720",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 29.0611,
		lng: -81.3043,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	},
	{
		id: "wm-marianna",
		banner: "walmart",
		name: "Walmart",
		aka: "Marianna",
		address: "2255 State Hwy 71, Marianna, FL 32448",
		hours: "6a–11p",
		kind: "Supercenter",
		lat: 30.7278,
		lng: -85.1856,
		mult: .9,
		loyaltyId: "walmart",
		loyaltyName: "Walmart account",
		loyaltyHint: "Phone or email"
	}
];
var DG_MEAT_OK = /* @__PURE__ */ new Set([
	"bacon",
	"hotdogs",
	"sausage",
	"breakfast",
	"brats",
	"pepperoni",
	"deli",
	"deliham",
	"delibeef",
	"salami",
	"chorizo"
]);
var DG_BAKERY_SKIP = /* @__PURE__ */ new Set([
	"bagels",
	"croissants",
	"donuts",
	"rolls",
	"baguette"
]);
function stocksAtDg(item) {
	if (item.category === "Produce") return item.id === "bananas";
	if (item.category === "Seafood") return false;
	if (item.category === "Meat") return DG_MEAT_OK.has(item.id);
	if (DG_BAKERY_SKIP.has(item.id)) return false;
	return true;
}
var ITEMS = [
	{
		id: "milk",
		name: "Whole milk",
		size: "1 gal",
		category: "Dairy",
		base: 3.89
	},
	{
		id: "eggs",
		name: "Large eggs",
		size: "1 dozen",
		category: "Dairy",
		base: 3.49
	},
	{
		id: "butter",
		name: "Salted butter",
		size: "1 lb",
		category: "Dairy",
		base: 4.79
	},
	{
		id: "shred",
		name: "Shredded cheddar",
		size: "8 oz",
		category: "Dairy",
		base: 3.69
	},
	{
		id: "yogurt",
		name: "Greek yogurt",
		size: "32 oz",
		category: "Dairy",
		base: 4.99
	},
	{
		id: "bread",
		name: "White bread",
		size: "20 oz loaf",
		category: "Bakery",
		base: 2.49
	},
	{
		id: "bagels",
		name: "Plain bagels",
		size: "6 ct",
		category: "Bakery",
		base: 3.99
	},
	{
		id: "bananas",
		name: "Bananas",
		size: "per lb",
		category: "Produce",
		base: .65
	},
	{
		id: "apples",
		name: "Gala apples",
		size: "per lb",
		category: "Produce",
		base: 1.89
	},
	{
		id: "lettuce",
		name: "Romaine hearts",
		size: "3 ct",
		category: "Produce",
		base: 3.49
	},
	{
		id: "onion",
		name: "Yellow onions",
		size: "3 lb bag",
		category: "Produce",
		base: 2.99
	},
	{
		id: "chicken",
		name: "Chicken breast",
		size: "per lb",
		category: "Meat",
		base: 4.99
	},
	{
		id: "beef",
		name: "Ground beef 80/20",
		size: "per lb",
		category: "Meat",
		base: 5.99
	},
	{
		id: "bacon",
		name: "Bacon",
		size: "16 oz",
		category: "Meat",
		base: 6.99
	},
	{
		id: "cereal",
		name: "Cheerios",
		size: "18 oz",
		category: "Pantry",
		base: 4.99
	},
	{
		id: "pasta",
		name: "Spaghetti",
		size: "16 oz",
		category: "Pantry",
		base: 1.59
	},
	{
		id: "sauce",
		name: "Marinara",
		size: "24 oz",
		category: "Pantry",
		base: 2.19
	},
	{
		id: "rice",
		name: "Long grain rice",
		size: "2 lb",
		category: "Pantry",
		base: 2.49
	},
	{
		id: "peanut",
		name: "Peanut butter",
		size: "16 oz",
		category: "Pantry",
		base: 3.29
	},
	{
		id: "coffee",
		name: "Ground coffee",
		size: "12 oz",
		category: "Pantry",
		base: 7.99
	},
	{
		id: "beans",
		name: "Black beans",
		size: "15 oz can",
		category: "Pantry",
		base: 1.19
	},
	{
		id: "soup",
		name: "Chicken noodle soup",
		size: "10.75 oz",
		category: "Pantry",
		base: 1.49
	},
	{
		id: "oats",
		name: "Old fashioned oats",
		size: "18 oz",
		category: "Pantry",
		base: 3.49
	},
	{
		id: "broccoli",
		name: "Frozen broccoli",
		size: "12 oz",
		category: "Frozen",
		base: 1.79
	},
	{
		id: "pizza",
		name: "Cheese pizza",
		size: "12 in",
		category: "Frozen",
		base: 4.29
	},
	{
		id: "towels",
		name: "Paper towels",
		size: "6 rolls",
		category: "Household",
		base: 8.49
	},
	{
		id: "tp",
		name: "Bath tissue",
		size: "12 rolls",
		category: "Household",
		base: 7.49
	},
	{
		id: "dish",
		name: "Dish soap",
		size: "18 oz",
		category: "Household",
		base: 2.99
	},
	{
		id: "wheat",
		name: "Whole wheat bread",
		size: "20 oz loaf",
		category: "Bakery",
		base: 2.79
	},
	{
		id: "buns",
		name: "Hamburger buns",
		size: "8 ct",
		category: "Bakery",
		base: 2.99
	},
	{
		id: "tortillas",
		name: "Flour tortillas",
		size: "10 ct",
		category: "Bakery",
		base: 2.49
	},
	{
		id: "tomatoes",
		name: "Tomatoes",
		size: "per lb",
		category: "Produce",
		base: 1.99
	},
	{
		id: "potatoes",
		name: "Russet potatoes",
		size: "5 lb bag",
		category: "Produce",
		base: 4.49
	},
	{
		id: "carrots",
		name: "Carrots",
		size: "1 lb bag",
		category: "Produce",
		base: 1.29
	},
	{
		id: "cucumber",
		name: "Cucumber",
		size: "each",
		category: "Produce",
		base: .89
	},
	{
		id: "peppers",
		name: "Bell pepper",
		size: "each",
		category: "Produce",
		base: 1.29
	},
	{
		id: "avocado",
		name: "Avocado",
		size: "each",
		category: "Produce",
		base: 1.49
	},
	{
		id: "grapes",
		name: "Red grapes",
		size: "per lb",
		category: "Produce",
		base: 2.49
	},
	{
		id: "berries",
		name: "Strawberries",
		size: "1 lb",
		category: "Produce",
		base: 3.99
	},
	{
		id: "blueberries",
		name: "Blueberries",
		size: "6 oz",
		category: "Produce",
		base: 3.49
	},
	{
		id: "lemons",
		name: "Lemons",
		size: "each",
		category: "Produce",
		base: .79
	},
	{
		id: "garlic",
		name: "Garlic",
		size: "each",
		category: "Produce",
		base: .69
	},
	{
		id: "celery",
		name: "Celery",
		size: "1 bunch",
		category: "Produce",
		base: 2.49
	},
	{
		id: "spinach",
		name: "Baby spinach",
		size: "5 oz",
		category: "Produce",
		base: 3.29
	},
	{
		id: "sweets",
		name: "Sweet potatoes",
		size: "per lb",
		category: "Produce",
		base: 1.29
	},
	{
		id: "mushrooms",
		name: "White mushrooms",
		size: "8 oz",
		category: "Produce",
		base: 2.99
	},
	{
		id: "oranges",
		name: "Navel oranges",
		size: "per lb",
		category: "Produce",
		base: 1.49
	},
	{
		id: "crown",
		name: "Broccoli crown",
		size: "each",
		category: "Produce",
		base: 2.29
	},
	{
		id: "greenbeans",
		name: "Green beans",
		size: "per lb",
		category: "Produce",
		base: 2.49
	},
	{
		id: "slices",
		name: "Cheddar slices",
		size: "8 oz",
		category: "Dairy",
		base: 3.29
	},
	{
		id: "creamcheese",
		name: "Cream cheese",
		size: "8 oz",
		category: "Dairy",
		base: 2.79
	},
	{
		id: "sourcream",
		name: "Sour cream",
		size: "16 oz",
		category: "Dairy",
		base: 2.49
	},
	{
		id: "oj",
		name: "Orange juice",
		size: "52 oz",
		category: "Dairy",
		base: 4.29
	},
	{
		id: "turkey",
		name: "Ground turkey",
		size: "per lb",
		category: "Meat",
		base: 4.79
	},
	{
		id: "pork",
		name: "Pork chops",
		size: "per lb",
		category: "Meat",
		base: 4.49
	},
	{
		id: "hotdogs",
		name: "Hot dogs",
		size: "16 oz",
		category: "Meat",
		base: 4.49
	},
	{
		id: "deli",
		name: "Deli turkey",
		size: "9 oz",
		category: "Meat",
		base: 5.99
	},
	{
		id: "ketchup",
		name: "Ketchup",
		size: "20 oz",
		category: "Pantry",
		base: 2.79
	},
	{
		id: "mustard",
		name: "Yellow mustard",
		size: "14 oz",
		category: "Pantry",
		base: 1.79
	},
	{
		id: "mayo",
		name: "Mayonnaise",
		size: "30 oz",
		category: "Pantry",
		base: 4.49
	},
	{
		id: "oil",
		name: "Olive oil",
		size: "16 oz",
		category: "Pantry",
		base: 7.99
	},
	{
		id: "sugar",
		name: "Granulated sugar",
		size: "4 lb",
		category: "Pantry",
		base: 3.99
	},
	{
		id: "flour",
		name: "All-purpose flour",
		size: "5 lb",
		category: "Pantry",
		base: 3.49
	},
	{
		id: "tuna",
		name: "Canned tuna",
		size: "5 oz",
		category: "Pantry",
		base: 1.29
	},
	{
		id: "chips",
		name: "Potato chips",
		size: "8 oz",
		category: "Pantry",
		base: 3.99
	},
	{
		id: "crackers",
		name: "Saltine crackers",
		size: "16 oz",
		category: "Pantry",
		base: 3.49
	},
	{
		id: "salsa",
		name: "Salsa",
		size: "16 oz",
		category: "Pantry",
		base: 2.99
	},
	{
		id: "bars",
		name: "Granola bars",
		size: "8 ct",
		category: "Pantry",
		base: 3.99
	},
	{
		id: "water",
		name: "Bottled water",
		size: "24 pack",
		category: "Pantry",
		base: 4.99
	},
	{
		id: "icecream",
		name: "Vanilla ice cream",
		size: "1.5 qt",
		category: "Frozen",
		base: 4.99
	},
	{
		id: "waffles",
		name: "Frozen waffles",
		size: "10 ct",
		category: "Frozen",
		base: 2.79
	},
	{
		id: "mixedveg",
		name: "Mixed vegetables",
		size: "12 oz",
		category: "Frozen",
		base: 1.79
	},
	{
		id: "detergent",
		name: "Laundry detergent",
		size: "46 oz",
		category: "Household",
		base: 9.99
	},
	{
		id: "trash",
		name: "Trash bags",
		size: "30 ct",
		category: "Household",
		base: 8.99
	},
	{
		id: "toothpaste",
		name: "Toothpaste",
		size: "4.2 oz",
		category: "Household",
		base: 3.49
	},
	{
		id: "iceberg",
		name: "Iceberg lettuce",
		size: "1 head",
		category: "Produce",
		base: 1.99
	},
	{
		id: "redonion",
		name: "Red onion",
		size: "each",
		category: "Produce",
		base: 1.29
	},
	{
		id: "scallions",
		name: "Scallions",
		size: "1 bunch",
		category: "Produce",
		base: 1.29
	},
	{
		id: "redpotato",
		name: "Red potatoes",
		size: "3 lb bag",
		category: "Produce",
		base: 3.99
	},
	{
		id: "yukon",
		name: "Yukon gold potatoes",
		size: "3 lb bag",
		category: "Produce",
		base: 4.49
	},
	{
		id: "zucchini",
		name: "Zucchini",
		size: "per lb",
		category: "Produce",
		base: 1.69
	},
	{
		id: "squash",
		name: "Yellow squash",
		size: "per lb",
		category: "Produce",
		base: 1.69
	},
	{
		id: "eggplant",
		name: "Eggplant",
		size: "each",
		category: "Produce",
		base: 1.99
	},
	{
		id: "cabbage",
		name: "Green cabbage",
		size: "each",
		category: "Produce",
		base: 2.49
	},
	{
		id: "cauli",
		name: "Cauliflower",
		size: "1 head",
		category: "Produce",
		base: 3.49
	},
	{
		id: "asparagus",
		name: "Asparagus",
		size: "per lb",
		category: "Produce",
		base: 3.99
	},
	{
		id: "corn",
		name: "Corn",
		size: "each",
		category: "Produce",
		base: .69
	},
	{
		id: "kale",
		name: "Kale",
		size: "1 bunch",
		category: "Produce",
		base: 2.49
	},
	{
		id: "arugula",
		name: "Arugula",
		size: "5 oz",
		category: "Produce",
		base: 3.49
	},
	{
		id: "cilantro",
		name: "Cilantro",
		size: "1 bunch",
		category: "Produce",
		base: 1.29
	},
	{
		id: "parsley",
		name: "Parsley",
		size: "1 bunch",
		category: "Produce",
		base: 1.29
	},
	{
		id: "basil",
		name: "Basil",
		size: "1 package",
		category: "Produce",
		base: 2.99
	},
	{
		id: "ginger",
		name: "Ginger",
		size: "per lb",
		category: "Produce",
		base: 3.99
	},
	{
		id: "limes",
		name: "Limes",
		size: "each",
		category: "Produce",
		base: .59
	},
	{
		id: "jalapeno",
		name: "Jalapeño",
		size: "each",
		category: "Produce",
		base: .39
	},
	{
		id: "watermelon",
		name: "Watermelon",
		size: "each",
		category: "Produce",
		base: 6.99
	},
	{
		id: "cantaloupe",
		name: "Cantaloupe",
		size: "each",
		category: "Produce",
		base: 3.49
	},
	{
		id: "pineapple",
		name: "Pineapple",
		size: "each",
		category: "Produce",
		base: 3.99
	},
	{
		id: "peaches",
		name: "Peaches",
		size: "per lb",
		category: "Produce",
		base: 2.49
	},
	{
		id: "pears",
		name: "Pears",
		size: "per lb",
		category: "Produce",
		base: 1.99
	},
	{
		id: "raspberries",
		name: "Raspberries",
		size: "6 oz",
		category: "Produce",
		base: 3.99
	},
	{
		id: "blackberries",
		name: "Blackberries",
		size: "6 oz",
		category: "Produce",
		base: 3.99
	},
	{
		id: "cherries",
		name: "Cherries",
		size: "per lb",
		category: "Produce",
		base: 4.99
	},
	{
		id: "mango",
		name: "Mango",
		size: "each",
		category: "Produce",
		base: 1.49
	},
	{
		id: "kiwi",
		name: "Kiwi",
		size: "each",
		category: "Produce",
		base: .89
	},
	{
		id: "grapefruit",
		name: "Grapefruit",
		size: "each",
		category: "Produce",
		base: 1.29
	},
	{
		id: "clementines",
		name: "Clementines",
		size: "3 lb bag",
		category: "Produce",
		base: 5.99
	},
	{
		id: "cherrytom",
		name: "Cherry tomatoes",
		size: "1 pint",
		category: "Produce",
		base: 3.49
	},
	{
		id: "roma",
		name: "Roma tomatoes",
		size: "per lb",
		category: "Produce",
		base: 1.79
	},
	{
		id: "radish",
		name: "Radishes",
		size: "1 bunch",
		category: "Produce",
		base: 1.49
	},
	{
		id: "beets",
		name: "Beets",
		size: "1 bunch",
		category: "Produce",
		base: 2.49
	},
	{
		id: "brussels",
		name: "Brussels sprouts",
		size: "per lb",
		category: "Produce",
		base: 3.49
	},
	{
		id: "snap",
		name: "Snap peas",
		size: "8 oz",
		category: "Produce",
		base: 3.99
	},
	{
		id: "salad",
		name: "Spring mix",
		size: "5 oz",
		category: "Produce",
		base: 3.99
	},
	{
		id: "coleslaw",
		name: "Coleslaw mix",
		size: "14 oz",
		category: "Produce",
		base: 2.49
	},
	{
		id: "shallot",
		name: "Shallots",
		size: "per lb",
		category: "Produce",
		base: 3.99
	},
	{
		id: "milk2",
		name: "2% milk",
		size: "1 gal",
		category: "Dairy",
		base: 3.79
	},
	{
		id: "skim",
		name: "Skim milk",
		size: "1 gal",
		category: "Dairy",
		base: 3.69
	},
	{
		id: "half",
		name: "Half and half",
		size: "1 qt",
		category: "Dairy",
		base: 3.49
	},
	{
		id: "cream",
		name: "Heavy cream",
		size: "1 pt",
		category: "Dairy",
		base: 4.29
	},
	{
		id: "buttermilk",
		name: "Buttermilk",
		size: "1 qt",
		category: "Dairy",
		base: 2.49
	},
	{
		id: "mozz",
		name: "Shredded mozzarella",
		size: "8 oz",
		category: "Dairy",
		base: 3.49
	},
	{
		id: "cheddar",
		name: "Cheddar block",
		size: "8 oz",
		category: "Dairy",
		base: 3.29
	},
	{
		id: "parm",
		name: "Parmesan",
		size: "5 oz",
		category: "Dairy",
		base: 4.49
	},
	{
		id: "swiss",
		name: "Swiss slices",
		size: "8 oz",
		category: "Dairy",
		base: 3.79
	},
	{
		id: "american",
		name: "American cheese",
		size: "16 slices",
		category: "Dairy",
		base: 3.49
	},
	{
		id: "cottage",
		name: "Cottage cheese",
		size: "16 oz",
		category: "Dairy",
		base: 2.99
	},
	{
		id: "string",
		name: "String cheese",
		size: "12 ct",
		category: "Dairy",
		base: 4.49
	},
	{
		id: "yogcups",
		name: "Yogurt cups",
		size: "4 pk",
		category: "Dairy",
		base: 3.29
	},
	{
		id: "unsal",
		name: "Unsalted butter",
		size: "1 lb",
		category: "Dairy",
		base: 4.99
	},
	{
		id: "marg",
		name: "Margarine",
		size: "15 oz",
		category: "Dairy",
		base: 1.99
	},
	{
		id: "creamer",
		name: "Coffee creamer",
		size: "32 oz",
		category: "Dairy",
		base: 4.49
	},
	{
		id: "whip",
		name: "Whipped cream",
		size: "7 oz",
		category: "Dairy",
		base: 3.29
	},
	{
		id: "almondmilk",
		name: "Almond milk",
		size: "half gal",
		category: "Dairy",
		base: 3.49
	},
	{
		id: "oatmilk",
		name: "Oat milk",
		size: "half gal",
		category: "Dairy",
		base: 4.29
	},
	{
		id: "mexican",
		name: "Mexican cheese blend",
		size: "8 oz",
		category: "Dairy",
		base: 3.69
	},
	{
		id: "feta",
		name: "Feta",
		size: "6 oz",
		category: "Dairy",
		base: 3.99
	},
	{
		id: "ricotta",
		name: "Ricotta",
		size: "15 oz",
		category: "Dairy",
		base: 3.49
	},
	{
		id: "provolone",
		name: "Provolone",
		size: "8 oz",
		category: "Dairy",
		base: 3.99
	},
	{
		id: "goat",
		name: "Goat cheese",
		size: "4 oz",
		category: "Dairy",
		base: 4.99
	},
	{
		id: "thighs",
		name: "Chicken thighs",
		size: "per lb",
		category: "Meat",
		base: 3.49
	},
	{
		id: "wholebird",
		name: "Whole chicken",
		size: "per lb",
		category: "Meat",
		base: 1.99
	},
	{
		id: "drums",
		name: "Chicken drumsticks",
		size: "per lb",
		category: "Meat",
		base: 2.49
	},
	{
		id: "gchicken",
		name: "Ground chicken",
		size: "per lb",
		category: "Meat",
		base: 4.99
	},
	{
		id: "wings",
		name: "Chicken wings",
		size: "per lb",
		category: "Meat",
		base: 3.99
	},
	{
		id: "sirloin",
		name: "Sirloin steak",
		size: "per lb",
		category: "Meat",
		base: 9.99
	},
	{
		id: "ny",
		name: "NY strip steak",
		size: "per lb",
		category: "Meat",
		base: 14.99
	},
	{
		id: "stew",
		name: "Stew beef",
		size: "per lb",
		category: "Meat",
		base: 7.49
	},
	{
		id: "roast",
		name: "Chuck roast",
		size: "per lb",
		category: "Meat",
		base: 6.99
	},
	{
		id: "corned",
		name: "Corned beef",
		size: "per lb",
		category: "Meat",
		base: 7.99
	},
	{
		id: "tender",
		name: "Pork tenderloin",
		size: "per lb",
		category: "Meat",
		base: 4.99
	},
	{
		id: "ribs",
		name: "Pork ribs",
		size: "per lb",
		category: "Meat",
		base: 4.99
	},
	{
		id: "groundpork",
		name: "Ground pork",
		size: "per lb",
		category: "Meat",
		base: 4.29
	},
	{
		id: "sausage",
		name: "Italian sausage",
		size: "16 oz",
		category: "Meat",
		base: 5.49
	},
	{
		id: "breakfast",
		name: "Breakfast sausage",
		size: "12 oz",
		category: "Meat",
		base: 4.99
	},
	{
		id: "brats",
		name: "Bratwurst",
		size: "19 oz",
		category: "Meat",
		base: 5.99
	},
	{
		id: "chorizo",
		name: "Chorizo",
		size: "12 oz",
		category: "Meat",
		base: 4.99
	},
	{
		id: "ham",
		name: "Sliced ham",
		size: "16 oz",
		category: "Meat",
		base: 5.49
	},
	{
		id: "deliham",
		name: "Deli ham",
		size: "9 oz",
		category: "Meat",
		base: 5.49
	},
	{
		id: "delibeef",
		name: "Deli roast beef",
		size: "9 oz",
		category: "Meat",
		base: 6.99
	},
	{
		id: "salami",
		name: "Salami",
		size: "7 oz",
		category: "Meat",
		base: 4.99
	},
	{
		id: "pepperoni",
		name: "Pepperoni",
		size: "6 oz",
		category: "Meat",
		base: 4.49
	},
	{
		id: "meatballs",
		name: "Italian meatballs",
		size: "16 oz",
		category: "Meat",
		base: 6.99
	},
	{
		id: "turkeybreast",
		name: "Turkey breast",
		size: "per lb",
		category: "Meat",
		base: 6.99
	},
	{
		id: "salmon",
		name: "Salmon fillet",
		size: "per lb",
		category: "Seafood",
		base: 10.99
	},
	{
		id: "shrimp",
		name: "Shrimp",
		size: "12 oz",
		category: "Seafood",
		base: 8.99
	},
	{
		id: "tilapia",
		name: "Tilapia",
		size: "per lb",
		category: "Seafood",
		base: 6.99
	},
	{
		id: "cod",
		name: "Cod fillet",
		size: "per lb",
		category: "Seafood",
		base: 9.99
	},
	{
		id: "scallops",
		name: "Scallops",
		size: "8 oz",
		category: "Seafood",
		base: 12.99
	},
	{
		id: "crab",
		name: "Imitation crab",
		size: "8 oz",
		category: "Seafood",
		base: 3.99
	},
	{
		id: "rye",
		name: "Rye bread",
		size: "16 oz",
		category: "Bakery",
		base: 3.29
	},
	{
		id: "sourdough",
		name: "Sourdough loaf",
		size: "24 oz",
		category: "Bakery",
		base: 4.49
	},
	{
		id: "raisin",
		name: "Cinnamon raisin bread",
		size: "16 oz",
		category: "Bakery",
		base: 3.49
	},
	{
		id: "gf",
		name: "Gluten-free bread",
		size: "16 oz",
		category: "Bakery",
		base: 6.49
	},
	{
		id: "hotbuns",
		name: "Hot dog buns",
		size: "8 ct",
		category: "Bakery",
		base: 2.79
	},
	{
		id: "muffins",
		name: "English muffins",
		size: "6 ct",
		category: "Bakery",
		base: 3.29
	},
	{
		id: "pita",
		name: "Pita",
		size: "6 ct",
		category: "Bakery",
		base: 2.99
	},
	{
		id: "naan",
		name: "Naan",
		size: "4 ct",
		category: "Bakery",
		base: 3.49
	},
	{
		id: "corntort",
		name: "Corn tortillas",
		size: "12 ct",
		category: "Bakery",
		base: 2.29
	},
	{
		id: "wraps",
		name: "Tortilla wraps",
		size: "8 ct",
		category: "Bakery",
		base: 3.29
	},
	{
		id: "rolls",
		name: "Dinner rolls",
		size: "12 ct",
		category: "Bakery",
		base: 3.49
	},
	{
		id: "sub",
		name: "Sub rolls",
		size: "4 ct",
		category: "Bakery",
		base: 3.49
	},
	{
		id: "baguette",
		name: "Baguette",
		size: "each",
		category: "Bakery",
		base: 2.49
	},
	{
		id: "croissants",
		name: "Croissants",
		size: "4 ct",
		category: "Bakery",
		base: 4.49
	},
	{
		id: "donuts",
		name: "Donuts",
		size: "6 ct",
		category: "Bakery",
		base: 4.99
	},
	{
		id: "dicedtom",
		name: "Diced tomatoes",
		size: "14.5 oz",
		category: "Pantry",
		base: 1.39
	},
	{
		id: "tomatosauce",
		name: "Tomato sauce",
		size: "15 oz",
		category: "Pantry",
		base: 1.19
	},
	{
		id: "paste",
		name: "Tomato paste",
		size: "6 oz",
		category: "Pantry",
		base: .99
	},
	{
		id: "crushed",
		name: "Crushed tomatoes",
		size: "28 oz",
		category: "Pantry",
		base: 2.49
	},
	{
		id: "chickpeas",
		name: "Chickpeas",
		size: "15 oz",
		category: "Pantry",
		base: 1.29
	},
	{
		id: "kidney",
		name: "Kidney beans",
		size: "15 oz",
		category: "Pantry",
		base: 1.29
	},
	{
		id: "pinto",
		name: "Pinto beans",
		size: "15 oz",
		category: "Pantry",
		base: 1.19
	},
	{
		id: "bakedbeans",
		name: "Baked beans",
		size: "28 oz",
		category: "Pantry",
		base: 2.29
	},
	{
		id: "refried",
		name: "Refried beans",
		size: "16 oz",
		category: "Pantry",
		base: 1.49
	},
	{
		id: "olives",
		name: "Black olives",
		size: "6 oz",
		category: "Pantry",
		base: 1.79
	},
	{
		id: "pickles",
		name: "Dill pickles",
		size: "24 oz",
		category: "Pantry",
		base: 3.29
	},
	{
		id: "kraut",
		name: "Sauerkraut",
		size: "14 oz",
		category: "Pantry",
		base: 1.79
	},
	{
		id: "cannedcorn",
		name: "Canned corn",
		size: "15 oz",
		category: "Pantry",
		base: 1.09
	},
	{
		id: "cannedgb",
		name: "Canned green beans",
		size: "14.5 oz",
		category: "Pantry",
		base: 1.09
	},
	{
		id: "cannedchicken",
		name: "Canned chicken",
		size: "12.5 oz",
		category: "Pantry",
		base: 3.49
	},
	{
		id: "cannedsalmon",
		name: "Canned salmon",
		size: "14.75 oz",
		category: "Pantry",
		base: 4.99
	},
	{
		id: "spam",
		name: "Luncheon meat",
		size: "12 oz",
		category: "Pantry",
		base: 3.99
	},
	{
		id: "cannedchili",
		name: "Canned chili",
		size: "15 oz",
		category: "Pantry",
		base: 2.49
	},
	{
		id: "ravioli",
		name: "Beef ravioli",
		size: "15 oz",
		category: "Pantry",
		base: 1.79
	},
	{
		id: "tomatosoup",
		name: "Tomato soup",
		size: "10.75 oz",
		category: "Pantry",
		base: 1.49
	},
	{
		id: "mushroomsoup",
		name: "Cream of mushroom",
		size: "10.5 oz",
		category: "Pantry",
		base: 1.69
	},
	{
		id: "vegsoup",
		name: "Vegetable soup",
		size: "10.75 oz",
		category: "Pantry",
		base: 1.49
	},
	{
		id: "penne",
		name: "Penne",
		size: "16 oz",
		category: "Pantry",
		base: 1.59
	},
	{
		id: "macaroni",
		name: "Elbow macaroni",
		size: "16 oz",
		category: "Pantry",
		base: 1.49
	},
	{
		id: "noodles",
		name: "Egg noodles",
		size: "12 oz",
		category: "Pantry",
		base: 2.29
	},
	{
		id: "lasagna",
		name: "Lasagna noodles",
		size: "16 oz",
		category: "Pantry",
		base: 1.99
	},
	{
		id: "ramen",
		name: "Ramen",
		size: "3 oz",
		category: "Pantry",
		base: .49
	},
	{
		id: "brownrice",
		name: "Brown rice",
		size: "2 lb",
		category: "Pantry",
		base: 2.79
	},
	{
		id: "quinoa",
		name: "Quinoa",
		size: "16 oz",
		category: "Pantry",
		base: 4.99
	},
	{
		id: "couscous",
		name: "Couscous",
		size: "10 oz",
		category: "Pantry",
		base: 2.49
	},
	{
		id: "maccheese",
		name: "Macaroni and cheese",
		size: "7.25 oz",
		category: "Pantry",
		base: 1.29
	},
	{
		id: "stuffing",
		name: "Stuffing mix",
		size: "6 oz",
		category: "Pantry",
		base: 2.49
	},
	{
		id: "crumbs",
		name: "Breadcrumbs",
		size: "15 oz",
		category: "Pantry",
		base: 2.49
	},
	{
		id: "croutons",
		name: "Croutons",
		size: "5 oz",
		category: "Pantry",
		base: 2.79
	},
	{
		id: "bbq",
		name: "Barbecue sauce",
		size: "18 oz",
		category: "Pantry",
		base: 2.49
	},
	{
		id: "hotsauce",
		name: "Hot sauce",
		size: "5 oz",
		category: "Pantry",
		base: 2.29
	},
	{
		id: "soy",
		name: "Soy sauce",
		size: "10 oz",
		category: "Pantry",
		base: 2.79
	},
	{
		id: "worcester",
		name: "Worcestershire",
		size: "10 oz",
		category: "Pantry",
		base: 2.99
	},
	{
		id: "ranch",
		name: "Ranch dressing",
		size: "16 oz",
		category: "Pantry",
		base: 3.29
	},
	{
		id: "italian",
		name: "Italian dressing",
		size: "16 oz",
		category: "Pantry",
		base: 3.29
	},
	{
		id: "balsamic",
		name: "Balsamic vinegar",
		size: "8.5 oz",
		category: "Pantry",
		base: 3.49
	},
	{
		id: "vinegar",
		name: "White vinegar",
		size: "32 oz",
		category: "Pantry",
		base: 2.29
	},
	{
		id: "honey",
		name: "Honey",
		size: "12 oz",
		category: "Pantry",
		base: 4.99
	},
	{
		id: "syrup",
		name: "Maple syrup",
		size: "12 oz",
		category: "Pantry",
		base: 4.49
	},
	{
		id: "jam",
		name: "Strawberry jam",
		size: "18 oz",
		category: "Pantry",
		base: 3.49
	},
	{
		id: "grapejelly",
		name: "Grape jelly",
		size: "18 oz",
		category: "Pantry",
		base: 2.99
	},
	{
		id: "relish",
		name: "Sweet relish",
		size: "10 oz",
		category: "Pantry",
		base: 2.29
	},
	{
		id: "alfredo",
		name: "Alfredo sauce",
		size: "15 oz",
		category: "Pantry",
		base: 2.79
	},
	{
		id: "enchilada",
		name: "Enchilada sauce",
		size: "10 oz",
		category: "Pantry",
		base: 1.99
	},
	{
		id: "hummus",
		name: "Hummus",
		size: "10 oz",
		category: "Pantry",
		base: 3.99
	},
	{
		id: "guac",
		name: "Guacamole",
		size: "8 oz",
		category: "Pantry",
		base: 4.49
	},
	{
		id: "tacoseas",
		name: "Taco seasoning",
		size: "1 oz",
		category: "Pantry",
		base: .89
	},
	{
		id: "chili",
		name: "Chili powder",
		size: "2.5 oz",
		category: "Pantry",
		base: 2.49
	},
	{
		id: "cumin",
		name: "Cumin",
		size: "2 oz",
		category: "Pantry",
		base: 2.79
	},
	{
		id: "garlicpow",
		name: "Garlic powder",
		size: "3.4 oz",
		category: "Pantry",
		base: 2.99
	},
	{
		id: "onionpow",
		name: "Onion powder",
		size: "2.6 oz",
		category: "Pantry",
		base: 2.99
	},
	{
		id: "salt",
		name: "Salt",
		size: "26 oz",
		category: "Pantry",
		base: 1.19
	},
	{
		id: "pepper",
		name: "Black pepper",
		size: "3 oz",
		category: "Pantry",
		base: 3.49
	},
	{
		id: "cinnamon",
		name: "Cinnamon",
		size: "2.4 oz",
		category: "Pantry",
		base: 2.79
	},
	{
		id: "vanilla",
		name: "Vanilla extract",
		size: "2 oz",
		category: "Pantry",
		base: 4.99
	},
	{
		id: "bakingsoda",
		name: "Baking soda",
		size: "16 oz",
		category: "Pantry",
		base: 1.29
	},
	{
		id: "bakingpow",
		name: "Baking powder",
		size: "8.1 oz",
		category: "Pantry",
		base: 2.49
	},
	{
		id: "brownsugar",
		name: "Brown sugar",
		size: "2 lb",
		category: "Pantry",
		base: 2.99
	},
	{
		id: "powdersugar",
		name: "Powdered sugar",
		size: "2 lb",
		category: "Pantry",
		base: 2.49
	},
	{
		id: "vegoil",
		name: "Vegetable oil",
		size: "48 oz",
		category: "Pantry",
		base: 4.99
	},
	{
		id: "spray",
		name: "Cooking spray",
		size: "8 oz",
		category: "Pantry",
		base: 3.49
	},
	{
		id: "cornstarch",
		name: "Cornstarch",
		size: "16 oz",
		category: "Pantry",
		base: 1.79
	},
	{
		id: "broth",
		name: "Chicken broth",
		size: "32 oz",
		category: "Pantry",
		base: 2.29
	},
	{
		id: "beefbroth",
		name: "Beef broth",
		size: "32 oz",
		category: "Pantry",
		base: 2.29
	},
	{
		id: "coconut",
		name: "Coconut milk",
		size: "13.5 oz",
		category: "Pantry",
		base: 2.29
	},
	{
		id: "gravy",
		name: "Gravy mix",
		size: "0.87 oz",
		category: "Pantry",
		base: 1.29
	},
	{
		id: "cornbread",
		name: "Cornbread mix",
		size: "15 oz",
		category: "Pantry",
		base: 1.49
	},
	{
		id: "flakes",
		name: "Corn flakes",
		size: "18 oz",
		category: "Pantry",
		base: 3.99
	},
	{
		id: "raisinbran",
		name: "Raisin bran",
		size: "18 oz",
		category: "Pantry",
		base: 4.49
	},
	{
		id: "packets",
		name: "Instant oatmeal",
		size: "10 ct",
		category: "Pantry",
		base: 3.49
	},
	{
		id: "pancake",
		name: "Pancake mix",
		size: "32 oz",
		category: "Pantry",
		base: 3.29
	},
	{
		id: "granola",
		name: "Granola",
		size: "16 oz",
		category: "Pantry",
		base: 4.99
	},
	{
		id: "toaster",
		name: "Toaster pastries",
		size: "8 ct",
		category: "Pantry",
		base: 3.29
	},
	{
		id: "tortchips",
		name: "Tortilla chips",
		size: "11 oz",
		category: "Pantry",
		base: 3.49
	},
	{
		id: "pretzels",
		name: "Pretzels",
		size: "16 oz",
		category: "Pantry",
		base: 3.49
	},
	{
		id: "popcorn",
		name: "Microwave popcorn",
		size: "6 ct",
		category: "Pantry",
		base: 3.99
	},
	{
		id: "cookies",
		name: "Chocolate chip cookies",
		size: "13 oz",
		category: "Pantry",
		base: 3.99
	},
	{
		id: "sandwichcookies",
		name: "Chocolate sandwich cookies",
		size: "13 oz",
		category: "Pantry",
		base: 4.29
	},
	{
		id: "graham",
		name: "Graham crackers",
		size: "14 oz",
		category: "Pantry",
		base: 3.49
	},
	{
		id: "cheesecrackers",
		name: "Cheese crackers",
		size: "6.6 oz",
		category: "Pantry",
		base: 3.29
	},
	{
		id: "peanuts",
		name: "Dry roasted peanuts",
		size: "16 oz",
		category: "Pantry",
		base: 3.99
	},
	{
		id: "almonds",
		name: "Almonds",
		size: "6 oz",
		category: "Pantry",
		base: 5.99
	},
	{
		id: "trail",
		name: "Trail mix",
		size: "14 oz",
		category: "Pantry",
		base: 5.49
	},
	{
		id: "fruitsnacks",
		name: "Fruit snacks",
		size: "10 ct",
		category: "Pantry",
		base: 3.99
	},
	{
		id: "applesauce",
		name: "Applesauce",
		size: "24 oz",
		category: "Pantry",
		base: 2.79
	},
	{
		id: "pudding",
		name: "Pudding cups",
		size: "4 pk",
		category: "Pantry",
		base: 2.99
	},
	{
		id: "gelatin",
		name: "Gelatin cups",
		size: "4 pk",
		category: "Pantry",
		base: 2.49
	},
	{
		id: "chocchips",
		name: "Chocolate chips",
		size: "12 oz",
		category: "Pantry",
		base: 3.49
	},
	{
		id: "yeast",
		name: "Active dry yeast",
		size: "3 pk",
		category: "Pantry",
		base: 1.99
	},
	{
		id: "cakemix",
		name: "Yellow cake mix",
		size: "15.25 oz",
		category: "Pantry",
		base: 1.79
	},
	{
		id: "brownie",
		name: "Brownie mix",
		size: "18 oz",
		category: "Pantry",
		base: 2.29
	},
	{
		id: "frosting",
		name: "Chocolate frosting",
		size: "16 oz",
		category: "Pantry",
		base: 2.29
	},
	{
		id: "applejuice",
		name: "Apple juice",
		size: "64 oz",
		category: "Pantry",
		base: 3.49
	},
	{
		id: "cran",
		name: "Cranberry juice",
		size: "64 oz",
		category: "Pantry",
		base: 3.99
	},
	{
		id: "lemonade",
		name: "Lemonade",
		size: "64 oz",
		category: "Pantry",
		base: 2.79
	},
	{
		id: "cola",
		name: "Cola",
		size: "12 pack",
		category: "Pantry",
		base: 6.99
	},
	{
		id: "dietcola",
		name: "Diet cola",
		size: "12 pack",
		category: "Pantry",
		base: 6.99
	},
	{
		id: "gingerale",
		name: "Ginger ale",
		size: "2 liter",
		category: "Pantry",
		base: 1.99
	},
	{
		id: "sports",
		name: "Sports drink",
		size: "8 pack",
		category: "Pantry",
		base: 5.99
	},
	{
		id: "icedtea",
		name: "Iced tea",
		size: "128 oz",
		category: "Pantry",
		base: 3.49
	},
	{
		id: "pods",
		name: "Coffee pods",
		size: "12 ct",
		category: "Pantry",
		base: 7.99
	},
	{
		id: "tea",
		name: "Tea bags",
		size: "100 ct",
		category: "Pantry",
		base: 4.49
	},
	{
		id: "cocoa",
		name: "Hot cocoa mix",
		size: "8 ct",
		category: "Pantry",
		base: 2.99
	},
	{
		id: "sparkling",
		name: "Sparkling water",
		size: "8 pack",
		category: "Pantry",
		base: 4.49
	},
	{
		id: "juiceboxes",
		name: "Juice boxes",
		size: "8 ct",
		category: "Pantry",
		base: 2.99
	},
	{
		id: "peas",
		name: "Frozen peas",
		size: "12 oz",
		category: "Frozen",
		base: 1.49
	},
	{
		id: "frozencorn",
		name: "Frozen corn",
		size: "12 oz",
		category: "Frozen",
		base: 1.49
	},
	{
		id: "frozenspin",
		name: "Frozen spinach",
		size: "10 oz",
		category: "Frozen",
		base: 1.79
	},
	{
		id: "fries",
		name: "French fries",
		size: "32 oz",
		category: "Frozen",
		base: 3.49
	},
	{
		id: "tots",
		name: "Tater tots",
		size: "32 oz",
		category: "Frozen",
		base: 3.49
	},
	{
		id: "rings",
		name: "Onion rings",
		size: "16 oz",
		category: "Frozen",
		base: 3.99
	},
	{
		id: "nuggets",
		name: "Chicken nuggets",
		size: "29 oz",
		category: "Frozen",
		base: 6.99
	},
	{
		id: "fishsticks",
		name: "Fish sticks",
		size: "19 oz",
		category: "Frozen",
		base: 5.49
	},
	{
		id: "burrito",
		name: "Frozen burritos",
		size: "8 ct",
		category: "Frozen",
		base: 5.99
	},
	{
		id: "fzlasagna",
		name: "Frozen lasagna",
		size: "38 oz",
		category: "Frozen",
		base: 8.99
	},
	{
		id: "chocice",
		name: "Chocolate ice cream",
		size: "1.5 qt",
		category: "Frozen",
		base: 4.99
	},
	{
		id: "pops",
		name: "Popsicles",
		size: "12 ct",
		category: "Frozen",
		base: 3.49
	},
	{
		id: "frozenfruit",
		name: "Frozen mixed berries",
		size: "12 oz",
		category: "Frozen",
		base: 3.99
	},
	{
		id: "bkfast",
		name: "Breakfast sandwiches",
		size: "4 ct",
		category: "Frozen",
		base: 5.99
	},
	{
		id: "hashbrown",
		name: "Hash browns",
		size: "20 oz",
		category: "Frozen",
		base: 3.29
	},
	{
		id: "garlicbread",
		name: "Garlic bread",
		size: "16 oz",
		category: "Frozen",
		base: 3.49
	},
	{
		id: "fzmeatballs",
		name: "Frozen meatballs",
		size: "26 oz",
		category: "Frozen",
		base: 6.99
	},
	{
		id: "fzshrimp",
		name: "Frozen shrimp",
		size: "12 oz",
		category: "Frozen",
		base: 8.49
	},
	{
		id: "pie",
		name: "Apple pie",
		size: "22 oz",
		category: "Frozen",
		base: 6.99
	},
	{
		id: "topping",
		name: "Whipped topping",
		size: "8 oz",
		category: "Frozen",
		base: 2.49
	},
	{
		id: "edamame",
		name: "Edamame",
		size: "12 oz",
		category: "Frozen",
		base: 2.49
	},
	{
		id: "mozzsticks",
		name: "Mozzarella sticks",
		size: "16 oz",
		category: "Frozen",
		base: 5.49
	},
	{
		id: "potpie",
		name: "Chicken pot pie",
		size: "10 oz",
		category: "Frozen",
		base: 2.49
	},
	{
		id: "potstickers",
		name: "Potstickers",
		size: "16 oz",
		category: "Frozen",
		base: 5.99
	},
	{
		id: "sponges",
		name: "Sponges",
		size: "3 ct",
		category: "Household",
		base: 2.49
	},
	{
		id: "cleaner",
		name: "All-purpose cleaner",
		size: "32 oz",
		category: "Household",
		base: 3.49
	},
	{
		id: "bleach",
		name: "Bleach",
		size: "81 oz",
		category: "Household",
		base: 4.49
	},
	{
		id: "softener",
		name: "Fabric softener",
		size: "64 oz",
		category: "Household",
		base: 6.99
	},
	{
		id: "sheets",
		name: "Dryer sheets",
		size: "80 ct",
		category: "Household",
		base: 4.99
	},
	{
		id: "dishpods",
		name: "Dishwasher pods",
		size: "20 ct",
		category: "Household",
		base: 6.49
	},
	{
		id: "foil",
		name: "Aluminum foil",
		size: "75 sq ft",
		category: "Household",
		base: 4.49
	},
	{
		id: "wrap",
		name: "Plastic wrap",
		size: "100 sq ft",
		category: "Household",
		base: 3.49
	},
	{
		id: "parchment",
		name: "Parchment paper",
		size: "30 sq ft",
		category: "Household",
		base: 3.99
	},
	{
		id: "bags",
		name: "Sandwich bags",
		size: "90 ct",
		category: "Household",
		base: 2.99
	},
	{
		id: "freezerbags",
		name: "Freezer bags",
		size: "20 ct",
		category: "Household",
		base: 3.99
	},
	{
		id: "plates",
		name: "Paper plates",
		size: "50 ct",
		category: "Household",
		base: 4.49
	},
	{
		id: "napkins",
		name: "Paper napkins",
		size: "100 ct",
		category: "Household",
		base: 2.49
	},
	{
		id: "tissue",
		name: "Facial tissue",
		size: "3 boxes",
		category: "Household",
		base: 4.99
	},
	{
		id: "brush",
		name: "Toothbrush",
		size: "2 ct",
		category: "Household",
		base: 3.49
	},
	{
		id: "shampoo",
		name: "Shampoo",
		size: "12.5 oz",
		category: "Household",
		base: 4.99
	},
	{
		id: "conditioner",
		name: "Conditioner",
		size: "12.5 oz",
		category: "Household",
		base: 4.99
	},
	{
		id: "bodywash",
		name: "Body wash",
		size: "18 oz",
		category: "Household",
		base: 5.99
	},
	{
		id: "soap",
		name: "Bar soap",
		size: "8 ct",
		category: "Household",
		base: 4.99
	},
	{
		id: "deo",
		name: "Deodorant",
		size: "2.6 oz",
		category: "Household",
		base: 4.49
	},
	{
		id: "handsoap",
		name: "Hand soap",
		size: "7.5 oz",
		category: "Household",
		base: 2.49
	},
	{
		id: "glass",
		name: "Glass cleaner",
		size: "32 oz",
		category: "Household",
		base: 3.49
	},
	{
		id: "diapers",
		name: "Diapers",
		size: "32 ct",
		category: "Household",
		base: 12.99
	},
	{
		id: "wipes",
		name: "Baby wipes",
		size: "64 ct",
		category: "Household",
		base: 4.99
	},
	{
		id: "dogfood",
		name: "Dry dog food",
		size: "15 lb",
		category: "Household",
		base: 16.99
	},
	{
		id: "catfood",
		name: "Dry cat food",
		size: "7 lb",
		category: "Household",
		base: 9.99
	},
	{
		id: "litter",
		name: "Cat litter",
		size: "14 lb",
		category: "Household",
		base: 8.99
	}
];
var OVR = {
	milk: {
		adams: 4.29,
		dg: 3.55,
		terry: 4.19,
		labonne: 4.59,
		stop: 3.99,
		shoprite: 3.89,
		aldi: 3.29,
		bigy: 3.79,
		m32: 3.69,
		walmart: 3.42,
		publix: 4.19,
		winndixie: 3.79
	},
	eggs: {
		adams: 3.99,
		dg: 3.15,
		terry: 3.79,
		labonne: 4.29,
		stop: 3.49,
		shoprite: 3.39,
		aldi: 2.79,
		bigy: 3.29,
		m32: 3.19,
		walmart: 2.98,
		publix: 3.69,
		winndixie: 3.29
	},
	bread: {
		adams: 2.49,
		dg: 1.25,
		terry: 2.29,
		labonne: 3.29,
		stop: 2.69,
		shoprite: 2.49,
		aldi: 1.15,
		bigy: 2.39,
		m32: 2.19,
		walmart: 1.38,
		publix: 2.79,
		winndixie: 2.19
	},
	bananas: {
		adams: .69,
		dg: .79,
		terry: .69,
		labonne: .79,
		stop: .58,
		shoprite: .64,
		aldi: .49,
		bigy: .65,
		m32: .62,
		walmart: .54,
		publix: .69,
		winndixie: .62
	},
	chicken: {
		adams: 5.49,
		dg: null,
		terry: 5.29,
		labonne: 6.29,
		stop: 3.99,
		shoprite: 4.89,
		aldi: 4.19,
		bigy: 4.99,
		m32: 4.69,
		walmart: 4.34,
		publix: 4.49,
		winndixie: 4.29
	},
	beef: {
		adams: 6.29,
		dg: null,
		terry: 6.19,
		labonne: 6.99,
		stop: 6.49,
		shoprite: 6.29,
		aldi: 4.99,
		bigy: 5.89,
		m32: 5.69,
		walmart: 5.24,
		publix: 6.19,
		winndixie: 5.79
	},
	cereal: {
		adams: 5.49,
		dg: 5.79,
		terry: 5.39,
		labonne: 5.99,
		stop: 5.29,
		shoprite: 5.19,
		aldi: 3.65,
		bigy: 5.09,
		m32: 4.89,
		walmart: 4.44,
		publix: 5.39,
		winndixie: 4.99
	},
	pasta: {
		adams: 1.69,
		dg: 1.12,
		terry: 1.59,
		labonne: 1.89,
		stop: 1.79,
		shoprite: 1.69,
		aldi: .95,
		bigy: 1.59,
		m32: 1.49,
		walmart: 1.18,
		publix: 1.79,
		winndixie: 1.49
	},
	sauce: {
		adams: 2.49,
		dg: 2.05,
		terry: 2.39,
		labonne: 2.79,
		stop: 2.29,
		shoprite: 2.29,
		aldi: 1.49,
		bigy: 2.19,
		m32: 1.99,
		walmart: 1.74,
		publix: 2.39,
		winndixie: 2.09
	},
	apples: {
		adams: 1.59,
		dg: null,
		terry: 1.79,
		labonne: 2.49,
		stop: 2.29,
		shoprite: 1.99,
		aldi: 1.55,
		bigy: 1.89,
		m32: 1.79,
		walmart: 1.68,
		publix: 1.99,
		winndixie: 1.79
	},
	lettuce: {
		adams: 2.49,
		dg: null,
		terry: 2.89,
		labonne: 3.99,
		stop: 3.79,
		shoprite: 3.49,
		aldi: 2.85,
		bigy: 3.29,
		m32: 3.19,
		walmart: 2.97,
		publix: 3.29,
		winndixie: 2.99
	},
	towels: {
		adams: 9.49,
		dg: 6.25,
		terry: 8.99,
		labonne: 10.49,
		stop: 8.79,
		shoprite: 8.49,
		aldi: 5.85,
		bigy: 8.29,
		m32: 7.79,
		walmart: 6.97,
		publix: 8.99,
		winndixie: 7.99
	},
	coffee: {
		adams: 8.99,
		dg: 6.98,
		terry: 8.49,
		labonne: 9.49,
		stop: 8.49,
		shoprite: 8.99,
		aldi: 5.75,
		bigy: 7.99,
		m32: 7.49,
		walmart: 6.48,
		publix: 8.29,
		winndixie: 7.49
	}
};
var COUPONS = [
	{
		id: "ss-chicken",
		itemId: "chicken",
		storeIds: ["stop"],
		amount: 1,
		minQty: 1,
		label: "$1.00 off / lb",
		detail: "Boneless chicken breast",
		source: "Stop & Shop digital",
		ends: "Oct 13",
		needsLoyalty: true
	},
	{
		id: "ss-cereal",
		itemId: "cereal",
		storeIds: ["stop"],
		amount: 1,
		minQty: 1,
		label: "$1.00 off",
		detail: "Cheerios 18 oz",
		source: "Stop & Shop digital",
		ends: "Oct 13",
		needsLoyalty: true
	},
	{
		id: "ss-sauce",
		itemId: "sauce",
		storeIds: ["stop"],
		amount: .5,
		minQty: 1,
		label: "50¢ off",
		detail: "Marinara 24 oz",
		source: "Stop & Shop circular",
		ends: "Oct 13",
		needsLoyalty: false
	},
	{
		id: "ss-bacon",
		itemId: "bacon",
		storeIds: ["stop"],
		amount: 1.5,
		minQty: 1,
		label: "$1.50 off",
		detail: "Bacon 16 oz",
		source: "Stop & Shop circular",
		ends: "Oct 13",
		needsLoyalty: false
	},
	{
		id: "iga-beef",
		itemId: "beef",
		storeIds: ["adams"],
		amount: 2.5,
		minQty: 1,
		label: "$2.50 off / lb",
		detail: "Ground beef 80/20",
		source: "Adams IGA card price",
		ends: "Oct 13",
		needsLoyalty: true
	},
	{
		id: "iga-apples",
		itemId: "apples",
		storeIds: ["adams"],
		amount: .3,
		minQty: 1,
		label: "30¢ off / lb",
		detail: "Gala apples",
		source: "Adams IGA card price",
		ends: "Oct 13",
		needsLoyalty: true
	},
	{
		id: "mfr-pasta",
		itemId: "pasta",
		storeIds: [
			"adams",
			"terry",
			"labonne",
			"stop",
			"shoprite",
			"bigy",
			"m32",
			"publix",
			"winndixie"
		],
		amount: .5,
		minQty: 1,
		label: "50¢ off",
		detail: "Barilla spaghetti — not store brand",
		source: "Manufacturer",
		ends: "Oct 31",
		needsLoyalty: false
	},
	{
		id: "sr-coffee",
		itemId: "coffee",
		storeIds: ["shoprite"],
		amount: 1.5,
		minQty: 1,
		label: "$1.50 off",
		detail: "Ground coffee 12 oz",
		source: "ShopRite digital",
		ends: "Oct 13",
		needsLoyalty: true
	},
	{
		id: "by-butter",
		itemId: "butter",
		storeIds: ["bigy"],
		amount: 1,
		minQty: 1,
		label: "$1.00 off",
		detail: "Salted butter",
		source: "Big Y digital",
		ends: "Oct 13",
		needsLoyalty: true
	},
	{
		id: "m32-eggs",
		itemId: "eggs",
		storeIds: ["m32"],
		amount: .5,
		minQty: 1,
		label: "50¢ off",
		detail: "Large eggs, dozen",
		source: "Market 32 digital",
		ends: "Oct 13",
		needsLoyalty: true
	},
	{
		id: "wm-towels",
		itemId: "towels",
		storeIds: ["walmart"],
		amount: 1,
		minQty: 1,
		label: "$1.00 off",
		detail: "Paper towels 6 rolls",
		source: "Walmart digital",
		ends: "Oct 13",
		needsLoyalty: true
	},
	{
		id: "dg-dish",
		itemId: "dish",
		storeIds: ["dg"],
		amount: .5,
		minQty: 1,
		label: "50¢ off",
		detail: "Dish soap 18 oz",
		source: "DG Rewards",
		ends: "Oct 13",
		needsLoyalty: true
	},
	{
		id: "px-chicken",
		itemId: "chicken",
		storeIds: ["publix"],
		amount: 1,
		minQty: 1,
		label: "$1.00 off / lb",
		detail: "Boneless chicken breast",
		source: "Publix digital",
		ends: "Oct 13",
		needsLoyalty: true
	},
	{
		id: "px-cereal",
		itemId: "cereal",
		storeIds: ["publix"],
		amount: 1,
		minQty: 1,
		label: "$1.00 off",
		detail: "Cheerios 18 oz",
		source: "Publix digital",
		ends: "Oct 13",
		needsLoyalty: true
	},
	{
		id: "wd-beef",
		itemId: "beef",
		storeIds: ["winndixie"],
		amount: 1.5,
		minQty: 1,
		label: "$1.50 off / lb",
		detail: "Ground beef 80/20",
		source: "Winn-Dixie digital",
		ends: "Oct 13",
		needsLoyalty: true
	}
];
var STARTER = [
	{
		itemId: "milk",
		qty: 1
	},
	{
		itemId: "eggs",
		qty: 1
	},
	{
		itemId: "bread",
		qty: 1
	},
	{
		itemId: "bananas",
		qty: 3
	},
	{
		itemId: "chicken",
		qty: 2
	},
	{
		itemId: "beef",
		qty: 1
	},
	{
		itemId: "cereal",
		qty: 1
	},
	{
		itemId: "pasta",
		qty: 2
	},
	{
		itemId: "sauce",
		qty: 1
	},
	{
		itemId: "apples",
		qty: 2
	},
	{
		itemId: "lettuce",
		qty: 1
	},
	{
		itemId: "towels",
		qty: 1
	},
	{
		itemId: "coffee",
		qty: 1
	}
];
function round2(n) {
	return Math.round(n * 100) / 100;
}
function buildPrices() {
	const table = {};
	for (const item of ITEMS) {
		const row = {};
		for (const store of STORES) {
			const key = store.banner;
			const over = OVR[item.id]?.[key];
			if (over === null) row[store.id] = null;
			else if (typeof over === "number") row[store.id] = over;
			else if (key === "dg" && !stocksAtDg(item)) row[store.id] = null;
			else row[store.id] = round2(item.base * store.mult);
		}
		table[item.id] = row;
	}
	return table;
}
var PRICES = buildPrices();
var ITEM_MAP = Object.fromEntries(ITEMS.map((item) => [item.id, item]));
var STORE_MAP = Object.fromEntries(STORES.map((store) => [store.id, store]));
var TOWN_MAP = Object.fromEntries(TOWNS.map((town) => [town.id, town]));
var LOYALTY_PROGRAMS = (() => {
	const map = /* @__PURE__ */ new Map();
	for (const store of STORES) {
		if (!store.loyaltyId || !store.loyaltyName || !store.loyaltyHint) continue;
		const existing = map.get(store.loyaltyId);
		if (existing) existing.storeIds.push(store.id);
		else map.set(store.loyaltyId, {
			id: store.loyaltyId,
			name: store.loyaltyName,
			hint: store.loyaltyHint,
			storeIds: [store.id]
		});
	}
	return [...map.values()];
})();
function haversineMiles(a, b) {
	const R = 3958.7613;
	const dLat = (b.lat - a.lat) * Math.PI / 180;
	const dLon = (b.lng - a.lng) * Math.PI / 180;
	const lat1 = a.lat * Math.PI / 180;
	const lat2 = b.lat * Math.PI / 180;
	const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
	return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}
function travelBetween(a, b) {
	const straight = haversineMiles(a, b);
	const miles = Math.round(straight * 1.42 * 10) / 10;
	return {
		miles,
		minutes: Math.max(2, Math.round(miles / (straight > 6 ? 36 : 28) * 60))
	};
}
function qtyLabel(item, qty) {
	if (item.size.startsWith("per ")) return `${qty} ${item.size.slice(4)}`;
	return qty === 1 ? item.size : `${qty} × ${item.size}`;
}
function money(n) {
	return `${n < 0 ? "−" : ""}$${Math.abs(n).toFixed(2)}`;
}
function mapsUrl(origin, addresses) {
	const o = encodeURIComponent(origin);
	return `https://www.google.com/maps/dir/?api=1&origin=${o}&destination=${o}&travelmode=driving&waypoints=${addresses.map((address) => encodeURIComponent(address)).join("|")}`;
}
var DWELL = 10;
function quote(itemId, storeId, qty, unclipped, loyalty = []) {
	const shelf = PRICES[itemId]?.[storeId];
	if (shelf == null) return null;
	const store = STORE_MAP[storeId];
	const program = store?.loyaltyId;
	const banner = store?.banner ?? storeId;
	let best = null;
	for (const coupon of COUPONS) {
		if (coupon.itemId !== itemId) continue;
		if (!coupon.storeIds.includes(banner) && !coupon.storeIds.includes(storeId)) continue;
		if (qty < coupon.minQty) continue;
		if (unclipped.includes(coupon.id)) continue;
		if (coupon.needsLoyalty && (!program || !loyalty.includes(program))) continue;
		if (!best || coupon.amount > best.amount) best = coupon;
	}
	const off = best ? Math.min(best.amount, Math.max(0, shelf - .1)) : 0;
	return {
		shelf,
		unit: Math.round((shelf - off) * 100) / 100,
		off,
		couponId: off > 0 && best ? best.id : null
	};
}
function detourGas(miles, countGas) {
	if (!countGas) return 0;
	return miles * 2 * .72 / 27 * GAS_PRICE;
}
function roundGas(miles, countGas) {
	if (!countGas || miles <= 0) return 0;
	return Math.round(miles / 27 * GAS_PRICE * 100) / 100;
}
function thresholdFor(mode) {
	if (mode === "one") return Number.POSITIVE_INFINITY;
	if (mode === "stretch") return 1;
	return 5;
}
function tour(home, stores) {
	if (stores.length === 0) return {
		order: [],
		legs: [],
		miles: 0,
		minutes: 0
	};
	const remaining = [...stores];
	const order = [];
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
	const lengthOf = (seq) => {
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
		for (let i = 0; i < order.length - 1; i++) for (let k = i + 1; k < order.length; k++) {
			const next = order.slice(0, i).concat(order.slice(i, k + 1).reverse(), order.slice(k + 1));
			if (lengthOf(next) + .05 < lengthOf(order)) {
				order.splice(0, order.length, ...next);
				improved = true;
			}
		}
	}
	const legs = [];
	let miles = 0;
	let minutes = 0;
	let curLabel = "home";
	let cur = home;
	for (const stop of order) {
		const hop = travelBetween(cur, stop);
		legs.push({
			from: curLabel,
			to: stop.id,
			miles: hop.miles,
			minutes: hop.minutes
		});
		miles += hop.miles;
		minutes += hop.minutes;
		cur = stop;
		curLabel = stop.id;
	}
	const back = travelBetween(cur, home);
	legs.push({
		from: curLabel,
		to: "home",
		miles: back.miles,
		minutes: back.minutes
	});
	miles = Math.round((miles + back.miles) * 10) / 10;
	minutes += back.minutes;
	return {
		order,
		legs,
		miles,
		minutes
	};
}
function nearestCarrier(itemId, qty, home, unclipped, loyalty, blocked) {
	let best = null;
	for (const store of STORES) {
		if (blocked.has(store.id)) continue;
		const q = quote(itemId, store.id, qty, unclipped, loyalty);
		if (!q) continue;
		const miles = travelBetween(home, store).miles;
		if (!best || miles < best.miles) best = {
			storeId: store.id,
			miles,
			unit: q.unit
		};
	}
	return best;
}
function planTrip(input) {
	const town = TOWN_MAP[input.townId] ?? TOWN_MAP.thomaston;
	const home = {
		lat: town.lat,
		lng: town.lng
	};
	const lines = input.lines.filter((line) => line.qty > 0 && ITEM_MAP[line.itemId]);
	const unclipped = input.unclipped;
	const loyalty = input.loyalty;
	const blocked = new Set(input.disabled);
	const ranked = STORES.map((store) => ({
		store,
		...travelBetween(home, store)
	})).sort((a, b) => a.miles - b.miles);
	const inRange = ranked.filter((row) => row.miles <= input.radius + .05 && !blocked.has(row.store.id)).map((row) => row.store);
	const scoreOne = (store) => {
		let basket = 0;
		let missing = 0;
		for (const line of lines) {
			const q = quote(line.itemId, store.id, line.qty, unclipped, loyalty);
			if (!q) missing += 1;
			else basket += q.unit * line.qty;
		}
		basket = Math.round(basket * 100) / 100;
		const gas = roundGas(travelBetween(home, store).miles * 2, input.countGas);
		return {
			missing,
			basket,
			gas,
			total: Math.round((basket + gas) * 100) / 100
		};
	};
	const oneStops = ranked.map(({ store }) => {
		const score = lines.length ? scoreOne(store) : {
			missing: 0,
			basket: 0,
			gas: 0,
			total: 0
		};
		return {
			storeId: store.id,
			inRange: inRange.some((s) => s.id === store.id),
			...score
		};
	});
	const emptyMissing = lines.map((line) => {
		const near = nearestCarrier(line.itemId, line.qty, home, unclipped, loyalty, blocked);
		return {
			itemId: line.itemId,
			qty: line.qty,
			storeId: near?.storeId ?? null,
			miles: near?.miles ?? 0,
			unit: near?.unit ?? null
		};
	});
	if (!lines.length || !inRange.length) return {
		trip: blank(emptyMissing),
		oneStops,
		tips: []
	};
	const anchorId = oneStops.filter((row) => row.inRange && row.missing === 0).sort((a, b) => a.total - b.total)[0]?.storeId ?? inRange[0].id;
	const threshold = thresholdFor(input.mode);
	const forced = [...new Set(lines.map((line) => input.pins[line.itemId]).filter((id) => Boolean(id && inRange.some((store) => store.id === id))))];
	const cache = /* @__PURE__ */ new Map();
	const evaluate = (ids) => {
		const activeIds = [.../* @__PURE__ */ new Set([...ids, ...forced])].filter((id) => inRange.some((store) => store.id === id) || forced.includes(id));
		const key = activeIds.slice().sort().join("|");
		const hit = cache.get(key);
		if (hit) return hit;
		const active = new Set(activeIds);
		const assigned = assignLines(lines, active, anchorId, input.pins, inRange, unclipped, loyalty);
		const used = [...new Set(assigned.lines.map((line) => line.storeId))];
		const routed = tour(home, used.map((id) => STORE_MAP[id]));
		const basket = roundMoney(assigned.lines.reduce((sum, line) => sum + line.lineTotal, 0));
		const couponOff = roundMoney(assigned.lines.reduce((sum, line) => sum + line.off * line.qty, 0));
		const gas = roundGas(routed.miles, input.countGas);
		const evaluated = {
			used,
			lines: assigned.lines,
			missing: assigned.missing,
			legs: routed.legs,
			miles: routed.miles,
			minutes: routed.minutes,
			basket,
			couponOff,
			gas,
			total: roundMoney(basket + gas)
		};
		cache.set(key, evaluated);
		return evaluated;
	};
	const searchSet = input.mode === "one" ? inRange : [...inRange.slice(0, 12), ...inRange.slice(12).filter((store) => forced.includes(store.id))];
	const evals = (input.mode === "one" ? searchSet.map((store) => [store.id]) : combinations(searchSet, 4).map((group) => group.map((store) => store.id))).map((ids) => evaluate(ids));
	const worthKeeping = (plan) => {
		if (plan.used.length <= 1) return true;
		if (input.mode === "one") return plan.used.every((id) => forced.includes(id));
		for (const id of plan.used) {
			if (forced.includes(id)) continue;
			const without = evaluate(plan.used.filter((storeId) => storeId !== id));
			const penalty = Math.max(0, without.missing.length - plan.missing.length) * 40;
			if (without.total + penalty - plan.total + .001 < threshold) return false;
		}
		return true;
	};
	const viable = evals.filter(worthKeeping);
	const pool = viable.length ? viable : evals;
	pool.sort((a, b) => a.missing.length - b.missing.length || a.total - b.total || a.used.length - b.used.length || a.miles - b.miles);
	const best = pool[0];
	const stops = best.legs.filter((leg) => leg.to !== "home").map((leg) => leg.to).map((storeId) => {
		const stopLines = best.lines.filter((line) => line.storeId === storeId);
		const basket = roundMoney(stopLines.reduce((sum, line) => sum + line.lineTotal, 0));
		const couponOff = roundMoney(stopLines.reduce((sum, line) => sum + line.off * line.qty, 0));
		let savingsVsAnchor = 0;
		for (const line of stopLines) {
			const there = quote(line.itemId, anchorId, line.qty, unclipped, loyalty);
			if (!there) savingsVsAnchor += line.lineTotal;
			else savingsVsAnchor += (there.unit - line.unit) * line.qty;
		}
		return {
			storeId,
			lines: stopLines,
			basket,
			couponOff,
			savingsVsAnchor: roundMoney(savingsVsAnchor)
		};
	});
	const missing = best.missing.map((line) => {
		const near = nearestCarrier(line.itemId, line.qty, home, unclipped, loyalty, blocked);
		return {
			itemId: line.itemId,
			qty: line.qty,
			storeId: near?.storeId ?? null,
			miles: near?.miles ?? 0,
			unit: near?.unit ?? null
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
			anchorId
		},
		oneStops,
		tips: outsideTips(lines, inRange, home, unclipped, loyalty, blocked, input.countGas)
	};
}
function combinations(items, max) {
	const out = [];
	const walk = (start, acc) => {
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
function outsideTips(lines, inRange, home, unclipped, loyalty, blocked, countGas) {
	const inside = new Set(inRange.map((store) => store.id));
	const tips = [];
	for (const store of STORES) {
		if (inside.has(store.id) || blocked.has(store.id)) continue;
		let save = 0;
		for (const line of lines) {
			const here = quote(line.itemId, store.id, line.qty, unclipped, loyalty);
			if (!here) continue;
			let bestIn = Infinity;
			for (const other of inRange) {
				const q = quote(line.itemId, other.id, line.qty, unclipped, loyalty);
				if (q && q.unit < bestIn) bestIn = q.unit;
			}
			if (bestIn < Infinity && here.unit + .009 < bestIn) save += (bestIn - here.unit) * line.qty;
		}
		const hop = travelBetween(home, store);
		const net = save - detourGas(hop.miles, countGas);
		if (net >= 3) tips.push({
			storeId: store.id,
			miles: hop.miles,
			minutes: hop.minutes,
			save: roundMoney(net)
		});
	}
	tips.sort((a, b) => b.save - a.save);
	return tips.slice(0, 2);
}
function assignLines(lines, active, anchorId, pins, inRange, unclipped, loyalty) {
	const planned = [];
	const missing = [];
	const rangeIds = new Set(inRange.map((store) => store.id));
	for (const line of lines) {
		const pin = pins[line.itemId];
		if (pin && rangeIds.has(pin) && active.has(pin)) {
			const q = quote(line.itemId, pin, line.qty, unclipped, loyalty);
			if (q) {
				planned.push(toLine(line, pin, q, true));
				continue;
			}
		}
		let best = null;
		const pool = active.size ? [...active] : [anchorId];
		for (const storeId of pool) {
			const q = quote(line.itemId, storeId, line.qty, unclipped, loyalty);
			if (!q) continue;
			if (!best || q.unit < best.q.unit - 1e-4) best = {
				storeId,
				q
			};
		}
		if (!best) missing.push(line);
		else planned.push(toLine(line, best.storeId, best.q, false));
	}
	return {
		lines: planned,
		missing
	};
}
function toLine(line, storeId, q, pinned) {
	return {
		itemId: line.itemId,
		qty: line.qty,
		storeId,
		shelf: q.shelf,
		unit: q.unit,
		lineTotal: roundMoney(q.unit * line.qty),
		off: q.off,
		couponId: q.couponId,
		pinned
	};
}
function roundMoney(n) {
	return Math.round(n * 100) / 100;
}
function blank(missing) {
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
		anchorId: null
	};
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var flyersForZip = createServerFn({ method: "GET" }).validator((zip) => {
	if (!/^\d{5}$/.test(zip)) throw new Error("Need a 5-digit ZIP");
	return zip;
}).handler(createSsrRpc("9707ccac9c9028e415ca574bd19d393df3c8301fe551c4403a1fe49cff27ebf4"));
var KEY = "cartwright-v1";
var MODES = [
	{
		id: "stretch",
		label: "Chase",
		hint: "Add a stop when it saves at least $1 after the extra gas."
	},
	{
		id: "balanced",
		label: "Balanced",
		hint: "Add a stop only when it saves at least $5 after the extra gas."
	},
	{
		id: "one",
		label: "One store",
		hint: "Shop the whole list at the single cheapest store in range."
	}
];
function loadSaved() {
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return null;
		const data = JSON.parse(raw);
		if (!data || typeof data !== "object") return null;
		const townId = typeof data.townId === "string" && TOWN_MAP[data.townId] ? data.townId : "thomaston";
		const radius = typeof data.radius === "number" ? Math.min(25, Math.max(3, Math.round(data.radius))) : 12;
		const lines = Array.isArray(data.lines) ? data.lines.filter((line) => line && ITEM_MAP[line.itemId] && line.qty > 0).map((line) => ({
			itemId: line.itemId,
			qty: Math.min(24, Math.round(line.qty))
		})) : STARTER;
		const mode = data.mode === "stretch" || data.mode === "one" || data.mode === "balanced" ? data.mode : "balanced";
		const pins = data.pins && typeof data.pins === "object" ? cleanRecord(data.pins) : {};
		const checks = data.checks && typeof data.checks === "object" ? cleanFlags(data.checks) : {};
		const disabled = Array.isArray(data.disabled) ? data.disabled.filter((id) => typeof id === "string" && STORE_MAP[id]) : [];
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
			cards
		};
	} catch {
		return null;
	}
}
function cleanRecord(value) {
	const out = {};
	for (const [key, entry] of Object.entries(value)) if (typeof entry === "string" && entry.trim()) out[key] = entry.trim().slice(0, 24);
	return out;
}
function cleanFlags(value) {
	const out = {};
	for (const [key, entry] of Object.entries(value)) if (entry === true) out[key] = true;
	return out;
}
function enrolled(cards) {
	return Object.entries(cards).filter(([, value]) => value.trim().length >= 4).map(([id]) => id);
}
function cardNudges(lines, stores, disabled, loyalty) {
	const banners = new Set(stores.filter((store) => !disabled.includes(store.id)).map((store) => store.banner));
	const have = new Set(lines.map((line) => line.itemId));
	const notes = [];
	if (!loyalty.includes("adams-rewards") && (banners.has("adams") || banners.has("terry")) && (have.has("beef") || have.has("apples"))) notes.push("Adams Rewards unlocks the card price on ground beef and apples.");
	if (!loyalty.includes("go-rewards") && banners.has("stop") && (have.has("chicken") || have.has("cereal"))) notes.push("GO Rewards unlocks the Stop & Shop digital coupons.");
	if (!loyalty.includes("club-publix") && banners.has("publix") && (have.has("chicken") || have.has("cereal"))) notes.push("Club Publix unlocks the Publix digital coupons.");
	if (!loyalty.includes("winn-dixie") && banners.has("winndixie") && have.has("beef")) notes.push("Winn-Dixie Rewards unlocks the ground beef deal.");
	return notes;
}
function placeName(store) {
	return store.aka ? `${store.name} · ${store.aka}` : store.name;
}
function cn(...parts) {
	return parts.filter(Boolean).join(" ");
}
function GroceryApp() {
	const [townId, setTownId] = (0, import_react.useState)("thomaston");
	const [radius, setRadius] = (0, import_react.useState)(12);
	const [lines, setLines] = (0, import_react.useState)(STARTER);
	const [unclipped, setUnclipped] = (0, import_react.useState)([]);
	const [mode, setMode] = (0, import_react.useState)("balanced");
	const [countGas, setCountGas] = (0, import_react.useState)(true);
	const [pins, setPins] = (0, import_react.useState)({});
	const [checks, setChecks] = (0, import_react.useState)({});
	const [disabled, setDisabled] = (0, import_react.useState)([]);
	const [cards, setCards] = (0, import_react.useState)({});
	const [tab, setTab] = (0, import_react.useState)("list");
	const [panel, setPanel] = (0, import_react.useState)(null);
	const [query, setQuery] = (0, import_react.useState)("");
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
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
	(0, import_react.useEffect)(() => {
		if (!panel) return;
		const onKey = (event) => {
			if (event.key === "Escape") setPanel(null);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [panel]);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		const payload = {
			townId,
			radius,
			lines,
			unclipped,
			mode,
			countGas,
			pins,
			checks,
			disabled,
			cards
		};
		localStorage.setItem(KEY, JSON.stringify(payload));
	}, [
		ready,
		townId,
		radius,
		lines,
		unclipped,
		mode,
		countGas,
		pins,
		checks,
		disabled,
		cards
	]);
	const town = TOWN_MAP[townId] ?? TOWNS[0];
	const { trip, oneStops, tips } = (0, import_react.useMemo)(() => planTrip({
		townId,
		radius,
		lines,
		unclipped,
		mode,
		countGas,
		pins,
		disabled,
		loyalty: enrolled(cards)
	}), [
		townId,
		radius,
		lines,
		unclipped,
		mode,
		countGas,
		pins,
		disabled,
		cards
	]);
	const placed = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const stop of trip.stops) for (const line of stop.lines) map.set(line.itemId, {
			storeId: stop.storeId,
			line
		});
		return map;
	}, [trip]);
	const inRange = (0, import_react.useMemo)(() => {
		return STORES.map((store) => ({
			store,
			hop: travelBetween(town, store)
		})).filter((row) => row.hop.miles <= radius + .05).sort((a, b) => a.hop.miles - b.hop.miles);
	}, [town, radius]);
	const fullOnes = oneStops.filter((row) => row.inRange && row.missing === 0 && lines.length > 0).sort((a, b) => a.total - b.total);
	const bestOne = fullOnes[0];
	const saveVsOne = bestOne ? Math.round((bestOne.total - trip.total) * 100) / 100 : 0;
	function setQty(itemId, qty) {
		setLines((current) => {
			if (qty <= 0) return current.filter((line) => line.itemId !== itemId);
			if (current.some((line) => line.itemId === itemId)) return current.map((line) => line.itemId === itemId ? {
				...line,
				qty
			} : line);
			return [...current, {
				itemId,
				qty
			}];
		});
	}
	const checkedCount = lines.filter((line) => checks[line.itemId]).length;
	const door = trip.driveMinutes + trip.dwellMinutes;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh w-full max-w-full min-w-0 overflow-x-hidden bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "page-top mx-auto w-full max-w-5xl min-w-0 px-4 lg:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Stores",
							onClick: () => setPanel("stores"),
							className: "inline-flex size-11 shrink-0 items-center justify-center rounded-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
								className: "size-5",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1 px-1 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "title-fit truncate font-medium tracking-tight",
								children: "Coupon King"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setQuery("");
									setPanel("where");
								},
								className: "mx-auto mt-1 inline-flex h-11 max-w-full items-center justify-center gap-2 text-sm text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "size-4 shrink-0",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "truncate",
									children: [
										town.name,
										", ",
										town.state,
										" ",
										town.zip
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setTab("trip"),
							className: "shrink-0 pt-1 text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "money-fit font-medium tabular-nums",
								children: lines.length ? money(trip.total) : "—"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs leading-tight text-muted",
								children: [trip.stops.length === 0 ? "No stops" : trip.stops.length === 1 ? "1 stop" : `${trip.stops.length} stops`, countGas && trip.stops.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: "with gas"
								}) : ""]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 rounded-xl bg-card px-4 py-3 lift",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: "Radius from home"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm tabular-nums text-muted",
								children: [radius, " miles"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 3,
							max: 25,
							step: 1,
							value: radius,
							"aria-label": "Shopping radius in miles",
							onChange: (event) => setRadius(Number(event.target.value))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								inRange.length,
								" ",
								inRange.length === 1 ? "store" : "stores",
								" inside this drive. Connecticut and Florida."
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "page-pad mx-auto grid w-full max-w-5xl min-w-0 grid-cols-1 px-4 lg:grid-cols-2 lg:gap-8 lg:px-6",
				children: [tab !== "deals" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: cn("min-w-0 max-w-full", tab !== "list" && "max-lg:hidden"),
					"aria-label": "Grocery list",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListPane, {
						lines,
						placed,
						pins,
						onQty: setQty,
						onOpen: (id) => setPanel({
							type: "item",
							id
						}),
						onAdd: () => {
							setQuery("");
							setPanel("add");
						},
						onReset: () => {
							setLines(STARTER);
							setPins({});
							setChecks({});
							setDisabled([]);
							setTownId("thomaston");
							setRadius(12);
							setMode("balanced");
							setUnclipped([]);
						}
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: cn("min-w-0 max-w-full", tab !== "trip" && "max-lg:hidden"),
					"aria-label": "Trip",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TripPane, {
						trip,
						townName: town.name,
						mode,
						countGas,
						checks,
						checkedCount,
						lineCount: lines.length,
						bestOne,
						saveVsOne,
						fullOnes,
						tips,
						door,
						nudges: cardNudges(lines, inRange.map((row) => row.store), disabled, enrolled(cards)),
						onDeals: () => setTab("deals"),
						onMode: setMode,
						onGas: () => setCountGas((value) => !value),
						onCheck: (id) => setChecks((current) => ({
							...current,
							[id]: !current[id]
						})),
						onClearChecks: () => setChecks({}),
						onWiden: (miles) => {
							setRadius(Math.max(radius, Math.min(25, Math.ceil(miles))));
						},
						origin: `${town.name}, ${town.state} ${town.zip}`
					})
				})] }), tab === "deals" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "lg:col-span-2",
					"aria-label": "Coupons",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DealsPane, {
						lines,
						unclipped,
						radius,
						town,
						cards,
						loyalty: enrolled(cards),
						onToggle: (id) => setUnclipped((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]),
						onAdd: (id) => setQty(id, (lines.find((line) => line.itemId === id)?.qty ?? 0) + 1),
						onCard: (id, value) => setCards((current) => ({
							...current,
							[id]: value
						}))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "dock pointer-events-none fixed inset-x-0 bottom-0 z-30 px-4",
				"aria-label": "Sections",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto mx-auto mb-1 grid max-w-md grid-cols-3 rounded-xl bg-card p-1 lift",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
							active: tab === "list",
							label: "List",
							onClick: () => setTab("list"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
								className: "size-5",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
							active: tab === "trip",
							label: "Trip",
							onClick: () => setTab("trip"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
								className: "size-5",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
							active: tab === "deals",
							label: "Deals",
							onClick: () => setTab("deals"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticket, {
								className: "size-5",
								"aria-hidden": "true"
							})
						})
					]
				})
			}),
			panel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("fixed inset-0 z-40 bg-ink/25", panel === "stores" ? "flex items-stretch justify-start" : "flex items-end justify-center sm:items-center"),
				onClick: () => setPanel(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "dialog",
					"aria-modal": "true",
					"aria-label": panel === "stores" ? "Stores" : void 0,
					className: cn("overflow-y-auto bg-sheet", panel === "stores" ? "h-dvh w-full max-w-sm p-4" : "sheet-fit max-w-lg rounded-t-xl p-4 sm:rounded-xl"),
					onClick: (event) => event.stopPropagation(),
					children: [
						panel === "stores" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoresPanel, {
							zip: town.zip,
							inRange,
							disabled,
							cards,
							onToggle: (id) => setDisabled((current) => current.includes(id) ? current.filter((storeId) => storeId !== id) : [...current, id]),
							onDeals: () => {
								setPanel(null);
								setTab("deals");
							},
							onClose: () => setPanel(null)
						}),
						panel === "where" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WherePanel, {
							townId,
							query,
							onQuery: setQuery,
							onPick: (id) => {
								setTownId(id);
								setPanel(null);
							},
							onClose: () => setPanel(null)
						}),
						panel === "add" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddPanel, {
							query,
							onQuery: setQuery,
							have: new Set(lines.map((line) => line.itemId)),
							onAdd: (id) => setQty(id, 1),
							onClose: () => setPanel(null)
						}),
						typeof panel === "object" && panel?.type === "item" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemPanel, {
							itemId: panel.id,
							qty: lines.find((line) => line.itemId === panel.id)?.qty ?? 0,
							town,
							radius,
							unclipped,
							loyalty: enrolled(cards),
							pin: pins[panel.id],
							onQty: (qty) => setQty(panel.id, qty),
							onPin: (storeId) => setPins((current) => {
								const next = { ...current };
								if (storeId && next[panel.id] !== storeId) next[panel.id] = storeId;
								else delete next[panel.id];
								return next;
							}),
							onClose: () => setPanel(null)
						})
					]
				})
			})
		]
	});
}
function NavButton({ active, label, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		"aria-current": active ? "page" : void 0,
		className: cn("mx-1 flex h-12 flex-col items-center justify-center gap-0.5 rounded-lg text-xs font-medium", active ? "bg-save-bg text-accent" : "text-muted"),
		children: [children, label]
	});
}
function StoresPanel({ zip, inRange, disabled, cards, onToggle, onDeals, onClose }) {
	const [filter, setFilter] = (0, import_react.useState)("");
	const [flyers, setFlyers] = (0, import_react.useState)({});
	const [ready, setReady] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(null);
	const q = filter.trim().toLowerCase();
	const rows = inRange.filter(({ store }) => {
		if (!q) return true;
		return store.name.toLowerCase().includes(q) || (store.aka ?? "").toLowerCase().includes(q) || store.address.toLowerCase().includes(q);
	});
	(0, import_react.useEffect)(() => {
		let cancel = false;
		setReady(false);
		flyersForZip({ data: zip }).then((list) => {
			if (cancel) return;
			const next = {};
			for (const flyer of list) if (!next[flyer.banner]) next[flyer.banner] = flyer;
			setFlyers(next);
		}).catch(() => {
			if (!cancel) setFlyers({});
		}).finally(() => {
			if (!cancel) setReady(true);
		});
		return () => {
			cancel = true;
		};
	}, [zip]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHead, {
		title: "Stores",
		onClose
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setOpen(null),
				className: "h-11 text-sm text-muted",
				children: "Back to stores"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: open.image,
				alt: `${open.merchant} ${open.name}`,
				className: "w-full rounded-md bg-card"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 font-medium",
				children: [
					open.merchant,
					" · ",
					open.name
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: [
					"Valid ",
					open.label,
					". This cover is the ad posted for ",
					zip,
					". It changes when the store publishes the next one."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: open.href,
				target: "_blank",
				rel: "noreferrer",
				className: "mt-3 inline-flex h-11 items-center text-sm font-medium text-accent",
				children: "Open the full ad"
			})
		]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 text-sm text-muted",
			children: [
				"Inside your radius. Turn a store out if you will not shop there. The thumbnail is this week's ad for ",
				zip,
				"."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mt-3 flex h-11 items-center gap-2 rounded-md border border-line bg-card px-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
				className: "size-4 text-muted",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: filter,
				onChange: (event) => setFilter(event.target.value),
				placeholder: "Chain or town",
				"aria-label": "Filter stores",
				className: "h-full w-full min-w-0 bg-transparent text-sm outline-none"
			})]
		}),
		rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm text-muted",
			children: "Nothing in this drive. Widen the radius, or clear the filter."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 overflow-hidden rounded-xl bg-card lift",
			children: rows.map(({ store, hop }) => {
				const off = disabled.includes(store.id);
				const number = store.loyaltyId ? cards[store.loyaltyId] : "";
				const saved = Boolean(number && number.trim().length >= 4);
				const flyer = flyers[store.banner];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: cn("border-b border-line px-3 py-3 last:border-0", off && "opacity-60"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							flyer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setOpen(flyer),
								className: "shrink-0",
								"aria-label": `${flyer.merchant} weekly ad, ${flyer.label}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: flyer.image,
									alt: "",
									className: "flyer-thumb rounded-sm"
								})
							}) : !ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flyer-thumb shrink-0 rounded-sm",
								"aria-hidden": "true"
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-medium",
									children: placeName(store)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate text-sm text-muted",
									children: [
										hop.minutes,
										" min · ",
										store.hours,
										flyer ? ` · ${flyer.label}` : ""
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": !off,
								"aria-label": off ? `Use ${placeName(store)}` : `Leave ${placeName(store)} out`,
								onClick: () => onToggle(store.id),
								className: cn("h-11 shrink-0 rounded-md px-3 text-sm font-medium", off ? "border border-line bg-sheet text-ink" : "bg-accent text-accent-fg"),
								children: off ? "Out" : "In"
							})
						]
					}), store.loyaltyName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onDeals,
						className: cn("mt-1 h-11 text-left text-sm text-muted", (flyer || !ready) && "pl-14"),
						children: saved ? `${store.loyaltyName} ····${number.trim().slice(-4)}` : `Add ${store.loyaltyName}`
					})]
				}, store.id);
			})
		})
	] })] });
}
function ListPane({ lines, placed, pins, onQty, onOpen, onAdd, onReset }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 flex w-full min-w-0 max-w-full flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-full min-w-0 items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "min-w-0 truncate text-lg font-medium",
					children: "This week"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onAdd,
					className: "inline-flex h-11 shrink-0 items-center gap-2 rounded-lg bg-accent px-4 text-sm font-medium text-accent-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "size-4",
						"aria-hidden": "true"
					}), "Add item"]
				})]
			}),
			lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-card lift px-4 py-8 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "The list is empty"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Add milk, chicken, or whatever is actually on the counter."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "w-full min-w-0 max-w-full overflow-hidden rounded-xl bg-card lift",
				children: lines.map((line) => {
					const item = ITEM_MAP[line.itemId];
					const spot = placed.get(line.itemId);
					const store = spot ? STORE_MAP[spot.storeId] : null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-b border-line last:border-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "item-row px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "item-copy",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => onOpen(line.itemId),
									className: "block w-full max-w-full overflow-hidden text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate font-medium",
										children: item.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-0.5 block truncate text-sm text-muted",
										children: [
											qtyLabel(item, line.qty),
											store ? ` · ${placeName(store)}` : " · not in range",
											pins[line.itemId] ? " · pinned" : "",
											spot?.line.couponId ? " · coupon" : ""
										]
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex shrink-0 flex-col items-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium tabular-nums",
									children: spot ? money(spot.line.lineTotal) : "—"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-label": `Less ${item.name}`,
											onClick: () => onQty(line.itemId, line.qty - 1),
											className: "inline-flex size-11 shrink-0 items-center justify-center rounded-md text-ink",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
												className: "size-4",
												"aria-hidden": "true"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-5 text-center text-sm tabular-nums",
											children: line.qty
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-label": `More ${item.name}`,
											onClick: () => onQty(line.itemId, line.qty + 1),
											className: "inline-flex size-11 shrink-0 items-center justify-center rounded-md text-ink",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
												className: "size-4",
												"aria-hidden": "true"
											})
										})
									]
								})]
							})]
						})
					}, line.itemId);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onReset,
				className: "h-11 self-start text-sm text-muted",
				children: "Reset to the Thomaston starter list"
			})
		]
	});
}
function TripPane({ trip, townName, mode, countGas, checks, checkedCount, lineCount, bestOne, saveVsOne, fullOnes, tips, door, nudges, onDeals, onMode, onGas, onCheck, onClearChecks, onWiden, origin }) {
	const hint = MODES.find((item) => item.id === mode)?.hint;
	const addresses = trip.stops.map((stop) => STORE_MAP[stop.storeId].address);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-1 rounded-xl bg-card p-1 lift",
				children: MODES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onMode(item.id),
					className: cn("h-11 min-w-0 rounded-lg px-1 text-xs font-medium sm:text-sm", mode === item.id ? "bg-save-bg text-accent" : "text-muted"),
					children: item.label
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: hint
			}),
			lineCount === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-card lift px-4 py-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "Nothing to route yet"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Add a few items and the loop will land here."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-card lift p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								trip.stops.length === 1 ? "One stop" : `${trip.stops.length} stops`,
								" · ",
								door,
								" min door to door"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "total-fit mt-1 font-medium tabular-nums tracking-tight",
							children: money(trip.total)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted",
							children: [
								"Groceries ",
								money(trip.basket),
								trip.couponOff > 0 ? ` · coupons −${money(trip.couponOff)}` : "",
								countGas ? ` · gas ${money(trip.gas)}` : " · gas not counted"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [
								trip.miles.toFixed(1),
								" miles of driving · about ",
								trip.dwellMinutes,
								" min in the stores"
							]
						}),
						bestOne && trip.stops.length > 1 && saveVsOne > .2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-save",
							children: [
								money(saveVsOne),
								" less than one stop at ",
								placeName(STORE_MAP[bestOne.storeId]),
								countGas ? ", gas included" : "",
								"."
							]
						}),
						bestOne && trip.stops.length > 1 && saveVsOne <= .2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-muted",
							children: [
								"One stop at ",
								placeName(STORE_MAP[bestOne.storeId]),
								" is ",
								money(bestOne.total),
								" — this loop does not beat it once you count the drive."
							]
						}),
						bestOne && trip.stops.length === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-muted",
							children: [placeName(STORE_MAP[bestOne.storeId]), " is the cheapest single store that can fill this list."]
						})
					]
				}),
				nudges.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onDeals,
					className: "rounded-xl bg-card lift px-4 py-3 text-left text-sm",
					children: note
				}, note)),
				tips.map((tip) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onWiden(tip.miles),
					className: "rounded-xl bg-card lift px-4 py-3 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-medium",
						children: [placeName(STORE_MAP[tip.storeId]), " is just outside"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							tip.minutes,
							" min, ",
							tip.miles.toFixed(1),
							" mi. Widening the radius could save about ",
							money(tip.save),
							" after gas."
						]
					})]
				}, tip.storeId)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "px-1 text-sm text-muted",
							children: ["Leave ", townName]
						}),
						trip.stops.map((stop, index) => {
							const store = STORE_MAP[stop.storeId];
							const leg = trip.legs.find((item) => item.to === stop.storeId);
							const prev = index === 0 ? "home" : placeName(STORE_MAP[trip.stops[index - 1].storeId]);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-xl bg-card lift p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
												className: "text-lg font-medium",
												children: [
													index + 1,
													". ",
													placeName(store)
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm break-words text-muted",
												children: store.address
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-sm text-muted",
												children: [
													leg ? `${leg.minutes} min` : "Nearby",
													" from ",
													prev,
													" · ",
													store.hours
												]
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium tabular-nums",
											children: money(stop.basket)
										})]
									}),
									stop.storeId !== trip.anchorId && stop.savingsVsAnchor > .2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-sm text-save",
										children: [
											"Saves ",
											money(stop.savingsVsAnchor),
											" on these items versus ",
											STORE_MAP[trip.anchorId ?? stop.storeId].name,
											"."
										]
									}),
									stop.couponOff > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-save",
										children: ["Coupons on this stop: −", money(stop.couponOff)]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-3 border-t border-line",
										children: stop.lines.map((line) => {
											const item = ITEM_MAP[line.itemId];
											const on = Boolean(checks[line.itemId]);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-2 border-b border-line py-1 last:border-0",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														"aria-pressed": on,
														"aria-label": on ? `Uncheck ${item.name}` : `Check ${item.name}`,
														onClick: () => onCheck(line.itemId),
														className: "inline-flex size-11 items-center justify-center",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: cn("flex size-5 items-center justify-center rounded-xs border", on ? "border-accent bg-accent text-accent-fg" : "border-line"),
															children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
																className: "size-3.5",
																"aria-hidden": "true"
															}) : null
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "min-w-0 flex-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: cn("truncate", on && "text-muted"),
															children: item.name
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "text-sm text-muted",
															children: [
																qtyLabel(item, line.qty),
																line.off > 0 ? ` · ${money(line.unit)} after ${money(line.off)} off` : ` · ${money(line.unit)}`,
																line.pinned ? " · pinned" : ""
															]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "tabular-nums",
														children: money(line.lineTotal)
													})
												]
											}, line.itemId);
										})
									})
								]
							}, store.id);
						}),
						trip.stops.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "px-1 text-sm text-muted",
							children: ["Back home", trip.legs.length ? ` · ${trip.legs[trip.legs.length - 1]?.minutes ?? 0} min` : ""]
						})
					]
				}),
				trip.missing.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-card lift p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium",
						children: "Not on this loop"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 flex flex-col gap-2",
						children: trip.missing.map((miss) => {
							const item = ITEM_MAP[miss.itemId];
							const store = miss.storeId ? STORE_MAP[miss.storeId] : null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "text-sm text-muted",
								children: [
									item.name,
									store ? ` — nearest is ${placeName(store)}, ${miss.miles.toFixed(1)} mi` : " — nobody nearby stocks it",
									miss.unit != null ? ` at ${money(miss.unit)}` : ""
								]
							}, miss.itemId);
						})
					})]
				}),
				addresses.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: mapsUrl(origin, addresses),
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex h-11 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg",
					children: "Open this loop in Maps"
				}),
				checkedCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onClearChecks,
					className: "h-11 self-start text-sm text-muted",
					children: [
						"Clear ",
						checkedCount,
						" of ",
						lineCount,
						" checked"
					]
				}),
				fullOnes.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-medium",
					children: "If you only stop once"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 overflow-hidden rounded-xl bg-card lift",
					children: fullOnes.slice(0, 4).map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-3 border-b border-line px-4 py-3 last:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: placeName(STORE_MAP[row.storeId])
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								"Groceries ",
								money(row.basket),
								countGas ? ` · gas ${money(row.gas)}` : ""
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "tabular-nums",
							children: money(row.total)
						})]
					}, row.storeId))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onGas,
					className: "h-11 self-start text-left text-sm text-muted",
					children: countGas ? `Counting gas at ${money(GAS_PRICE)}/gal and 27 mpg. Tap to ignore gas.` : "Gas is hidden. Tap to count it."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						"Sample prices for the week of ",
						CIRCULAR,
						". Confirm the shelf tag before you pay."
					]
				})
			] })
		]
	});
}
function DealsPane({ lines, unclipped, radius, town, cards, loyalty, onToggle, onAdd, onCard }) {
	const have = new Set(lines.map((line) => line.itemId));
	const mine = COUPONS.filter((coupon) => have.has(coupon.itemId));
	const rest = COUPONS.filter((coupon) => !have.has(coupon.itemId));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-medium",
					children: "Loyalty cards"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Digital coupons and card prices apply only after a number is saved. Paper circulars and manufacturer coupons do not need one. ALDI has no card. Numbers stay on this phone."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-col gap-2",
					children: LOYALTY_PROGRAMS.map((program) => {
						const names = [...new Set(program.storeIds.map((id) => STORE_MAP[id]?.name).filter(Boolean))].join(" · ");
						const on = loyalty.includes(program.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl bg-card lift p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: program.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm text-muted",
										children: names
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: cards[program.id] ?? "",
										onChange: (event) => onCard(program.id, event.target.value.slice(0, 24)),
										placeholder: program.hint,
										autoComplete: "off",
										spellCheck: false,
										"aria-label": `${program.name} number`,
										className: "mt-3 h-11 w-full rounded-md border border-line bg-sheet px-3 text-sm outline-none"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: on ? "Card prices are on." : "Enter at least 4 characters to turn card prices on."
							})]
						}, program.id);
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-medium",
				children: "Clipped for this list"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: [
					"Sample deals for the week of ",
					CIRCULAR,
					". This is not every coupon in the store, and next week does not load by itself."
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CouponList, {
				coupons: mine,
				unclipped,
				radius,
				town,
				loyalty,
				onToggle,
				onAdd,
				have
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-medium",
				children: "Also in the circulars"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Add the item and the loop will use the coupon if that store earns a stop."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CouponList, {
				coupons: rest,
				unclipped,
				radius,
				town,
				loyalty,
				onToggle,
				onAdd,
				have
			})
		]
	});
}
function CouponList({ coupons, unclipped, radius, town, loyalty, onToggle, onAdd, have }) {
	if (!coupons.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Nothing in this pile."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex flex-col gap-2",
		children: coupons.map((coupon) => {
			const item = ITEM_MAP[coupon.itemId];
			const clipped = !unclipped.includes(coupon.id);
			const stores = coupon.storeIds.map((id) => STORE_MAP[id]).filter(Boolean);
			const program = stores.find((store) => store.loyaltyId);
			const locked = coupon.needsLoyalty && (!program?.loyaltyId || !loyalty.includes(program.loyaltyId));
			const near = stores.map((store) => ({
				store,
				hop: travelBetween(town, store)
			})).sort((a, b) => a.hop.miles - b.hop.miles)[0];
			const inside = near ? near.hop.miles <= radius + .05 : false;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl bg-card lift p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-medium",
								children: [
									coupon.label,
									" · ",
									item.name
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted",
								children: [
									coupon.source,
									" · ends ",
									coupon.ends
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									[...new Set(stores.map((store) => store.name))].join(", "),
									near ? inside ? ` · ${near.hop.minutes} min` : ` · ${near.hop.miles.toFixed(1)} mi outside` : "",
									coupon.needsLoyalty ? " · needs the card" : ""
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": clipped && !locked,
						disabled: locked,
						onClick: () => onToggle(coupon.id),
						className: cn("h-11 shrink-0 rounded-md px-3 text-sm font-medium", locked ? "border border-line bg-sheet text-muted" : clipped ? "bg-accent text-accent-fg" : "border border-line bg-sheet text-ink"),
						children: locked ? "Needs card" : clipped ? "Using" : "Skip"
					})]
				}), !have.has(coupon.itemId) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onAdd(coupon.itemId),
					className: "mt-2 h-11 text-sm font-medium text-ink",
					children: [
						"Add ",
						item.name,
						" to the list"
					]
				})]
			}, coupon.id);
		})
	});
}
function WherePanel({ townId, query, onQuery, onPick, onClose }) {
	const q = query.trim().toLowerCase();
	const towns = TOWNS.filter((town) => !q || town.name.toLowerCase().includes(q) || town.zip.includes(q));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHead, {
			title: "Home base",
			onClose
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: "Connecticut and Florida. Pick the town you leave from."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mt-3 flex h-11 items-center gap-2 rounded-md border border-line bg-card px-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
				className: "size-4 text-muted",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: query,
				onChange: (event) => onQuery(event.target.value),
				placeholder: "Town or ZIP",
				className: "h-full w-full bg-transparent text-sm outline-none",
				autoFocus: true
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-3",
			children: [towns.map((town) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onPick(town.id),
				className: "flex h-11 w-full items-center justify-between text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					town.name,
					", ",
					town.state,
					" ",
					town.zip
				] }), town.id === townId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-save",
					children: "Home"
				}) : null]
			}) }, town.id)), towns.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "py-3 text-sm text-muted",
				children: "Try a town or ZIP in Connecticut or Florida."
			})]
		})
	] });
}
var AISLES = [
	"Produce",
	"Dairy",
	"Meat",
	"Seafood",
	"Bakery",
	"Pantry",
	"Frozen",
	"Household"
];
function AddPanel({ query, onQuery, have, onAdd, onClose }) {
	const [aisle, setAisle] = (0, import_react.useState)(null);
	const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
	const items = ITEMS.filter((item) => {
		if (have.has(item.id)) return false;
		if (terms.length > 0) {
			const hay = `${item.name} ${item.category}`.toLowerCase();
			return terms.every((term) => hay.includes(term));
		}
		return aisle === null || item.category === aisle;
	});
	const groups = /* @__PURE__ */ new Map();
	for (const item of items) {
		const list = groups.get(item.category) ?? [];
		list.push(item);
		groups.set(item.category, list);
	}
	const showList = terms.length > 0 || aisle !== null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHead, {
			title: "Add to the list",
			onClose
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mt-3 flex h-11 items-center gap-2 rounded-md border border-line bg-card px-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
				className: "size-4 text-muted",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: query,
				onChange: (event) => onQuery(event.target.value),
				placeholder: "Search the book",
				className: "h-full w-full bg-transparent text-sm outline-none",
				autoFocus: true
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 text-sm text-muted",
			children: [
				"One staple per item, not every brand. ",
				ITEMS.length,
				" in the book."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex flex-wrap gap-2",
			children: AISLES.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-pressed": aisle === name,
				onClick: () => setAisle((current) => current === name ? null : name),
				className: cn("h-11 rounded-md px-3 text-sm", aisle === name ? "bg-accent text-accent-fg" : "border border-line bg-card"),
				children: name
			}, name))
		}),
		showList ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-col gap-4",
			children: [[...groups.entries()].map(([category, group]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-medium text-muted",
				children: category
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-1",
				children: group.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onAdd(item.id),
					className: "flex h-11 w-full items-center justify-between gap-3 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 truncate",
						children: item.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 text-sm text-muted",
						children: item.size
					})]
				}) }, item.id))
			})] }, category)), items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Nothing in the book matches that."
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm text-muted",
			children: "Pick an aisle, or search."
		})
	] });
}
function ItemPanel({ itemId, qty, town, radius, unclipped, loyalty, pin, onQty, onPin, onClose }) {
	const item = ITEM_MAP[itemId];
	const rows = STORES.map((store) => {
		const q = quote(itemId, store.id, Math.max(qty, 1), unclipped, loyalty);
		const hop = travelBetween(town, store);
		return {
			store,
			q,
			hop,
			inside: hop.miles <= radius + .05
		};
	}).filter((row) => row.q).sort((a, b) => {
		if (a.inside !== b.inside) return a.inside ? -1 : 1;
		if (a.inside && b.inside) return (a.q?.unit ?? 99) - (b.q?.unit ?? 99);
		return a.hop.miles - b.hop.miles;
	});
	const inside = rows.filter((row) => row.inside);
	const shown = [...inside, ...rows.filter((row) => !row.inside).slice(0, 4)];
	const cheapestInside = inside[0]?.q?.unit;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHead, {
			title: item.name,
			onClose
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 text-sm text-muted",
			children: [
				item.category,
				" · ",
				item.size
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Decrease quantity",
					onClick: () => onQty(qty - 1),
					className: "inline-flex size-11 items-center justify-center rounded-md border border-line bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
						className: "size-4",
						"aria-hidden": "true"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-8 text-center tabular-nums",
					children: qty
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Increase quantity",
					onClick: () => onQty(qty + 1),
					className: "inline-flex size-11 items-center justify-center rounded-md border border-line bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "size-4",
						"aria-hidden": "true"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onQty(0),
					className: "ml-auto h-11 text-sm text-muted",
					children: "Remove"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 flex flex-col gap-1",
			children: shown.map((row) => {
				const coupon = row.q?.couponId ? COUPONS.find((item) => item.id === row.q?.couponId) : null;
				const lowest = row.inside && row.q && cheapestInside != null && row.q.unit === cheapestInside;
				const pinned = pin === row.store.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: !row.inside,
					onClick: () => onPin(pinned ? null : row.store.id),
					className: cn("flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left", pinned && "bg-save-bg", !row.inside && "opacity-60"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate font-medium",
							children: placeName(row.store)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block text-sm text-muted",
							children: [
								row.hop.minutes,
								" min",
								!row.inside ? " · outside radius" : "",
								coupon ? ` · ${coupon.label}` : "",
								lowest ? " · lowest in range" : "",
								pinned ? " · pinned" : row.inside ? " · tap to pin" : ""
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 text-right tabular-nums",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: row.q ? money(row.q.unit) : "—"
						}), row.q && row.q.off > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm text-muted line-through",
							children: money(row.q.shelf)
						}) : null]
					})]
				}) }, row.store.id);
			})
		})
	] });
}
function PanelHead({ title, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl font-medium tracking-tight",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Close",
			onClick: onClose,
			className: "inline-flex size-11 items-center justify-center rounded-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
				className: "size-5",
				"aria-hidden": "true"
			})
		})]
	});
}
var SplitComponent = GroceryApp;
//#endregion
export { SplitComponent as component };
