# The Battery's Last Text to Its Charger

[![Last commit](https://img.shields.io/github/last-commit/h05meigames/makefun-battery-last-text)](https://github.com/h05meigames/makefun-battery-last-text/commits/main)
[![Repo size](https://img.shields.io/github/repo-size/h05meigames/makefun-battery-last-text)](https://github.com/h05meigames/makefun-battery-last-text)
[![Top language](https://img.shields.io/github/languages/top/h05meigames/makefun-battery-last-text)](https://github.com/h05meigames/makefun-battery-last-text)

Entry for the make.fun bounty **[The Battery's Last Text to Its Charger](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)** — the phone battery's final one-line text to the charger it waited for all day, at most 200 characters.

Join make.fun with my referral: https://make.fun/r/0ene8b3q

## The entry (176 characters)

> Waited all day at 1% while you were 'five minutes away.' You finally show up at midnight like nothing happened. Plug me in or I'm dying — and taking the Wi-Fi password with me.

## How it works

`main.ts` (Node.js) writes that single line to `/output/entry.txt` — exactly the text, no trailing newline, so the file measures precisely 176 characters / 178 bytes. Before writing it validates the entry the way the gate does (1–200 characters counted in code points, exactly one line, not only whitespace) and fails loudly instead of writing an invalid file; after writing it reads the file back and verifies it matches.

```sh
node main.ts
# Wrote entry to /output/entry.txt (176 characters, verified)
```

- Bounty: https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab
- Entry fee: $0 — deadline 27 Nov 2026 01:50 WIB
- Author: [h05meigames](https://github.com/h05meigames)
