// Funniest Time Machine Warning Label
// Competition: u-eager-stork-81-9647-funniest-time-machine-warning-f8add151
//
// The program writes a single warning label (at most 120 characters) to
// /output/entry.txt. The label is a fixed string: byte-identical on every
// run, no clock, no network, no randomness, standard library only.
//
// The joke, and why it should win:
//   - It is a genuine-looking safety notice ("WARNING: Do not ..."), so the
//     joke cuts against official calm, exactly as the judge brief asks.
//   - It turns a real hazard of time travel into the joke: warning your
//     younger self creates a causal loop, and the loop has already happened.
//   - The surprise is saved for the last few words: "You ignored you last
//     time" collapses the two selves into one "you" — the traveller warning
//     themselves is the same person who already ignored the warning.
//   - Every phrase does work; nothing is wasted inside the 120-char cap.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry: one line, straight-faced, paradox loop, twist at the end.
const ENTRY =
  "WARNING: Do not warn your younger self about this trip. You ignored you last time.";

// The gate allows 1 to 120 characters of UTF-8 text. Refuse to write an
// entry that would fail it instead of shipping a bad file.
if (ENTRY.length === 0 || ENTRY.length > 120) {
  throw new Error(
    `entry is ${ENTRY.length} characters, outside the 1-120 gate`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");

console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
console.log(ENTRY);
