// Charm the Commuter: Forecast a City That Isn't
// make.fun competition u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e
//
// One line of weather (1-140 chars) for a city that does not exist, written
// to /output/entry.txt. Node 22, stdlib only, no network, no secrets.
//
// The entry: a broadcast-weather greeting for the invented city Drizzlewick,
// real forecast facts (light rain, 14 deg), a commuter's small miracle (the
// 8:15 bus actually on time), one concrete funny image (even the ducks are
// in on the miracle), and a closing turn of phrase that hands the commuter
// a grin.

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Good morning, Drizzlewick: light rain, 14\u00B0, and the 8:15 bus is actually on time. Even the ducks look smug. Bring a brolly and a grin.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not only white space. Fail loudly here rather than shipping a bad file.
if (ENTRY.length < 1 || ENTRY.length > 140 || !ENTRY.trim()) {
  throw new Error(`entry is ${ENTRY.length} chars; gate needs 1-140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
// /output is shared across concurrent builders, so read the file back in
// this same process, immediately after writing, and refuse to report
// success unless the bytes on disk are exactly the entry we just wrote.
const onDisk = readFileSync("/output/entry.txt", "utf8");
if (onDisk !== ENTRY) {
  throw new Error("entry.txt on disk differs from the entry just written");
}
const sha256 = createHash("sha256").update(onDisk, "utf8").digest("hex");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars) sha256=${sha256}`);
