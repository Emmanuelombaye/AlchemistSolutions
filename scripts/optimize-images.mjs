import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const dir = path.join(process.cwd(), "public", "images");

const presets = {
  hero: { width: 1920, quality: 68 },
  about: { width: 1200, quality: 68 },
  service: { width: 1100, quality: 68 },
  project: { width: 1100, quality: 68 },
  blog: { width: 1100, quality: 68 },
  team: { width: 800, quality: 65 },
  cta: { width: 1600, quality: 65 },
};

function presetFor(name) {
  const key = Object.keys(presets).find((k) => name.startsWith(k));
  return presets[key] ?? { width: 1400, quality: 68 };
}

const files = (await fs.readdir(dir)).filter((f) => /\.jpe?g$/i.test(f));
let before = 0;
let after = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  const input = await fs.readFile(filePath);
  before += input.length;
  const { width, quality } = presetFor(file);
  const pipeline = sharp(input)
    .rotate()
    .resize({ width, height: width, fit: "inside", withoutEnlargement: true });

  const jpeg = await pipeline
    .clone()
    .jpeg({ quality, mozjpeg: true, progressive: true })
    .toBuffer();
  await fs.writeFile(filePath, jpeg);

  const webpName = file.replace(/\.jpe?g$/i, ".webp");
  const webpPath = path.join(dir, webpName);
  const webp = await pipeline
    .clone()
    .webp({ quality, effort: 6 })
    .toBuffer();
  await fs.writeFile(webpPath, webp);

  after += webp.length;
  console.log(
    `${file}: ${(input.length / 1024).toFixed(0)}KB -> jpeg ${(jpeg.length / 1024).toFixed(0)}KB / webp ${(webp.length / 1024).toFixed(0)}KB`,
  );
}

console.log(
  `TOTAL source: ${(before / 1024 / 1024).toFixed(2)}MB -> webp set: ${(after / 1024 / 1024).toFixed(2)}MB`,
);
