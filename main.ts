// The Battery's Last Text to Its Charger
// make.fun bounty: u-alven-the-battery-s-last-text-to-its-charger-4278cfab
// The phone battery's final one-line text to the charger it waited for all day.
// Writes the text to /output/entry.txt (gate: UTF-8, 1-200 chars, one line).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Waited all day at 1% while you were 'five minutes away.' You finally show up at midnight like nothing happened. Plug me in or I'm dying — and taking the Wi-Fi password with me.";

function fail(message: string): never {
  console.error(`ERROR: ${message}`);
  process.exit(1);
}

// Validate the entry the way the gate does, and fail loudly instead of
// silently writing an invalid file: 1-200 characters (counted in code
// points, not UTF-16 units), exactly one line, not only whitespace.
const length = [...ENTRY].length;
if (length < 1 || length > 200) fail(`entry is ${length} characters, must be 1-200`);
if (/[\r\n]/.test(ENTRY)) fail("entry must be exactly one line");
if (ENTRY.trim().length === 0) fail("entry must not be only whitespace");

// Write the bare text: no trailing newline. The gate counts the file's
// characters, so a newline would add a needless character (and byte — the
// tie-break favours the smaller text), and a strict reader could count it
// as a second line.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read back and verify what actually landed on disk.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) fail("read-back mismatch: /output/entry.txt differs from the entry");
console.log(`Wrote entry to /output/entry.txt (${length} characters, verified)`);
