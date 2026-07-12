import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const dir = path.join(process.cwd(), "public", "images");

const presets = {
  hero: { width: 1920, quality: 72 },
  about: { width: 1200, quality: 72 },
  service: { width: 1200, quality: 72 },
  project: { width: 1200, quality: 72 },
  blog: { width: 1200, quality: 72 },
  team: { width: 800, quality: 70 },
  cta: { width: 1600, quality: 70 },
};

function presetFor(name) {
  const key = Object.keys(presets).find((k) => name.startsWith(k));
  return presets[key] ?? { width: 1400, quality: 72 };
}

const files = (await fs.readdir(dir)).filter((f) => /\.jpe?g$/i.test(f));
let before = 0;
let after = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  const input = await fs.readFile(filePath);
  before += input.length;
  const { width, quality } = presetFor(file);
  const output = await sharp(input)
    .rotate()
    .resize({ width, height: width, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true, progressive: true })
    .toBuffer();
  await fs.writeFile(filePath, output);
  after += output.length;
  console.log(
    `${file}: ${(input.length / 1024).toFixed(0)}KB -> ${(output.length / 1024).toFixed(0)}KB`,
  );
}

console.log(
  `TOTAL: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB`,
);
