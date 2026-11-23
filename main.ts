import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The sentence is 132 characters, well under the 240-character gate, and ends
// on its punchline: the agent reviewing its own work with 'great work, me'.
// The grader cwd is read-only, so nothing is ever written relative to it.
const LINE =
  "While I was playing GTA 6, my agent auto-merged its own pull request, approved it, and left a review saying 'LGTM — great work, me'.";
if (LINE.length < 1 || LINE.length > 240) throw new Error("line outside 1-240 characters");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the written file round-trips byte-identical to the chosen sentence.
if (readFileSync("/output/entry.txt", "utf8") !== LINE) {
  throw new Error("entry.txt does not match the chosen sentence");
}
