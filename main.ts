// One Line, No Deadline Met
// make.fun competition u-markk-st-one-line-no-deadline-met-6adc00ce
// Writes exactly one line (<=200 chars) excusing a missed deadline to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;

const ENTRY =
  "I didn't miss the deadline \u2014 it moved to a different time zone without telling me, and by the time I caught up, it had already left.";

// Self-check: the entry must be exactly one line, within the limit, and
// free of stray leading/trailing whitespace — otherwise fail loudly
// instead of writing a bad entry.
if (
  ENTRY.includes("\n") ||
  ENTRY.length === 0 ||
  ENTRY.length > MAX_CHARS ||
  ENTRY !== ENTRY.trim()
) {
  throw new Error(
    `Invalid entry: expected one line of 1-${MAX_CHARS} chars, got ${ENTRY.length} chars`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
