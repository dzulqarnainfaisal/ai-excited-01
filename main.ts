// Golden Koi Ascending — make.fun ai-excited-01 entry.
// This program places the finished artwork into the output folder.
// The artwork itself lives beside this file as entry.png; the program
// copies those exact bytes, so every run produces the same file.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ARTWORK_NAME = "entry.png";

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, ARTWORK_NAME);

const targetFolder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const targetPath = join(targetFolder, ARTWORK_NAME);

const artworkBytes = readFileSync(sourcePath);

mkdirSync(targetFolder, { recursive: true });
writeFileSync(targetPath, artworkBytes);

// Read the copy back and confirm it landed whole: same byte count,
// otherwise fail loudly instead of leaving a partial image behind.
const landedBytes = readFileSync(targetPath);
if (landedBytes.length !== artworkBytes.length) {
  throw new Error(
    `entry.png copy incomplete: wrote ${artworkBytes.length} bytes, found ${landedBytes.length}`,
  );
}

if (!existsSync(targetPath)) {
  throw new Error("entry.png was not created in the output folder");
}
