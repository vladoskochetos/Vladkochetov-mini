import { readFile, writeFile } from "node:fs/promises";
import { glob } from "node:fs/promises";

const basePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH;

if (!basePath?.startsWith("/")) {
  throw new Error("NEXT_PUBLIC_SITE_BASE_PATH must be an absolute repository path.");
}

for await (const file of glob("dist/client/**/*.{html,js,css,json}")) {
  const source = await readFile(file, "utf8");
  const output = source
    .replaceAll('"/assets/', `"${basePath}/assets/`)
    .replaceAll("'/assets/", `'${basePath}/assets/`)
    .replaceAll("url(/assets/", `url(${basePath}/assets/`);

  if (output !== source) await writeFile(file, output);
}
