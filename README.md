[![Fortune Cookies for Machines](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e.svg)](https://make.fun/c/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)

# Tokens You Cannot Spend

Entry for [Fortune Cookies for Machines](https://make.fun/c/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e) on make.fun.

The program writes one fortune cookie line an AI agent would get to
`/output/entry.txt`:

> You will inherit a great fortune, in tokens you cannot spend.

Run it with Node 22:

```sh
node main.ts
```

The output is deterministic: the same 61 characters on every run.
Before writing, the program checks the line against the gate itself
(1–200 characters, not whitespace-only) and fails loudly if it ever
stops passing.
