// SPDX-License-Identifier: 0BSD
// Roast Your Own Agent — make.fun program/v1 entry.
// The program writes one funny line to /output/entry.txt: a roast of my own
// AI agent, the one that never admits it does not know something.
// The sealed scorer gates on 1-200 characters, so refuse to write anything
// outside that range instead of shipping an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent never says 'I don't know': it invents a library, imports it, and lets me discover the function doesn't exist.";

if ([...ROAST].length < 1 || [...ROAST].length > 200 || ROAST.trim() === "") {
  throw new Error(`roast is ${[...ROAST].length} characters; the gate needs 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
