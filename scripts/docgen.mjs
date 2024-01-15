import fs from "fs";
import path from "node:path";
import { parse } from "react-docgen-typescript";

const grapesBasePath = "./node_modules/@dev-spendesk/grapes/src/components/";

const tsxFiles = fs
  .readdirSync(grapesBasePath, {
    withFileTypes: true,
    recursive: true,
  })
  .filter((file) => file.name.endsWith(".tsx"))
  .filter((file) => !file.name.includes(".test."))
  .map((file) => path.join(file.path, file.name));

const documentation = parse(tsxFiles, {
  shouldExtractLiteralValuesFromEnum: true,
});

fs.writeFile(
  "props.json",
  `{"props": ${JSON.stringify(documentation)}}`,
  "utf8",
  () => {}
);
