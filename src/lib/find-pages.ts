import process from "node:process";
import path from "node:path";
import fs from "node:fs";

function getAppDir() {
  const rootPath = process.cwd();
  return path.join(rootPath, "src/app");
}

function toPascalCase(name: string): string {
  return name.replace(/^(\w)|(-\w)/g, (match) =>
    match.replace("-", "").toUpperCase()
  );
}

export function getPages() {
  const appDir = getAppDir();
  const docsDir = path.join(appDir, "docs");

  const files = fs
    .readdirSync(docsDir, {
      withFileTypes: true,
      recursive: true,
    })
    .filter((file) => !file.path.includes("@")) // Exclude partial route
    .filter((file) => file.name.startsWith("page."))
    .map((file) => {
      const url = file.path.replace(appDir, "");
      const segments = url.split(path.sep);
      const lastSegment = segments.at(-1);

      return {
        url,
        name: toPascalCase(lastSegment ?? ""),
      };
    });

  return files;
}
