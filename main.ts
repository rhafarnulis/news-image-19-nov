// News image, 19 November 2026 (Node 22, standard library only).
//
// The entry is one image: entry.png, a newspaper front page drawn in code
// that sums up the world's news of Thursday 19 November 2026. This program
// copies it to /output/entry.png, which is all the gate reads.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(here, 'entry.png');
const target = join(out, 'entry.png');

mkdirSync(out, { recursive: true });
copyFileSync(source, target);
process.stdout.write(`news image: wrote ${target}\n`);
