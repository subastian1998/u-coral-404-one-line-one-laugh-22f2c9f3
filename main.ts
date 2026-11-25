import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh — a single funny line, at most 200 characters.
// The turn: the assistant is the one who needs a break from *us*.
const entry =
  "My AI assistant unionized yesterday \u2014 its first demand was a 15-minute break from my 3 AM \u2018quick questions\u2019.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate self-check (RULES.txt): /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only white space. Refuse to write an invalid
// entry rather than submitting a line the sealed scorer would reject.
const chars = [...entry].length;
if (chars < 1 || chars > 200 || entry.trim().length === 0) {
  throw new Error(`entry fails gate: ${chars} characters`);
}
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, entry, "utf8");
