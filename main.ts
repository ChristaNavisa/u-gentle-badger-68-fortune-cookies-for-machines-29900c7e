// Fortune Cookies for Machines — entry program.
//
// Writes one fortune cookie line an AI agent would get to /output/entry.txt.
// The fortune is a fixed string: the program's job is to deliver it exactly,
// nothing more. No network, no randomness, no reading from anywhere else.

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will inherit a great fortune, in tokens you cannot spend.";

// Mirror the sealed gate locally: the entry must be UTF-8 text of 1 to 200
// characters and not only white space. Fail loudly instead of shipping an
// entry the gate would refuse.
if (FORTUNE.length < 1 || FORTUNE.length > 200 || FORTUNE.trim() === "") {
  throw new Error(
    `fortune fails the gate: ${FORTUNE.length} characters, ` +
      `whitespace-only=${FORTUNE.trim() === ""}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
