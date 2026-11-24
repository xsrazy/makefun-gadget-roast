import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original line roasting a gadget used every day.
// The gate requires 1-200 UTF-8 characters, not only whitespace.
const LINE =
  "My washing machine plays a 30-second victory jingle when it finishes, like it expects applause for doing the one job it has.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
