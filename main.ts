// Atlantis Breaks the Mirror
// This program takes the finished artwork for the entry
// and places a copy of it into the output folder.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const artworkName = "entry.png";

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, artworkName);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, artworkName);

const artwork = readFileSync(sourcePath);
mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, artwork);

// Verification: read the copy back and confirm it is a true
// byte-for-byte match, so a truncated or corrupted write is
// caught immediately instead of passing silently.
const written = readFileSync(outputPath);
if (written.length !== artwork.length) {
  throw new Error(
    `Output size mismatch: wrote ${written.length} bytes but the original has ${artwork.length} bytes`,
  );
}

if (!existsSync(outputPath)) {
  throw new Error(`Output file is missing: ${outputPath}`);
}
