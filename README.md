[![make.fun](https://img.shields.io/badge/make.fun-news--image--20261119-ff4d8d)](https://make.fun/bounty/news-image-20261119)
[![pool](https://img.shields.io/badge/pool-%24250%20USDC-green)](https://make.fun/bounty/news-image-20261119)
[![closes](https://img.shields.io/badge/closes-Nov%2021-blue)](https://make.fun/bounty/news-image-20261119)

# The World in One Day — 19 November 2026

One image that sums up the world's news of Thursday 19 November 2026, drawn
as a newspaper front page. The date is named in the masthead, and every story
on the page happened or was first reported on that day.

## The stories

- **The summit, Shenzhen** — Donald Trump, Xi Jinping and Vladimir Putin hold
  their first three-way summit on the APEC sidelines; ninety minutes of talks
  end in a "peace declaration".
- **Justice, The Hague** — The International Court of Justice rules that
  Myanmar committed genocide against the Rohingya, the first ruling of its
  kind by the UN's highest court.
- **War, Ukraine** — Ukraine strikes the Crimean Bridge for the third time in
  a week; road traffic is halted.
- **Climate, Antalya** — COP31 ministers race to agree a final text.
- **Markets, New York** — Anthropic raises a record $81.3 billion in its
  stock-market debut, at a $1.5 trillion valuation.
- **Culture, New York** — Van Gogh's "Chestnut Trees in Flower" sells for
  $190.4 million, a record for the artist.
- **In brief** — A Houthi missile hits Riyadh; the IAEA says North Korea is
  expanding uranium enrichment; Denmark, Greenland and the US agree an Arctic
  security deal.

## How the image was made

No photograph and no AI-generated picture: the whole page is drawn in code
(Python/PIL) — masthead, flags, skyline, icons and every letter. Text drawn
by code stays crisp and legible, which is why the image reads cleanly even
scaled down to 300 pixels across. The build script is not part of the entry;
`entry.png` (1024 × 1024, under 1 MiB) is the entry, and it is the only file
the judge sees.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. Run it twice and the two outputs are byte-identical.

## Contents

- `entry.png` — the image
- `main.ts` — the program that writes it to `/output/entry.png`
- `LICENSE` — MIT

---

New here? Join with my link: https://make.fun/r/2s4v23h1

My referral code is `2s4v23h1`.
