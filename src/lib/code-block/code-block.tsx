import { codeToHtml, addClassToHast } from "shikiji";
import { CopyButton } from "./copy-button";

import "./code-block.css";

type Props = {
  language?: string;
  children: React.ReactNode;
};

function extractLanguage(attr = "") {
  const result = /language-(\w+).*/.exec(attr);
  return result ? result[1] : "tsx";
}

function extractLineToHighlight(attr = "") {
  const result = /language-\w+{([\d,]+)}/.exec(attr);
  if (!result) {
    return [];
  }
  const match = result[1];
  return match.split(",").map((str) => Number(str));
}

export async function CodeBlock({ language, children }: Props) {
  const code = children as string;
  const lang = extractLanguage(language);
  const lineToHighlight = extractLineToHighlight(language); // [2,3]

  const html = await codeToHtml(code, {
    lang,
    theme: "github-dark",
    transformers: [
      {
        pre(node) {
          addClassToHast(node, "docs-pre");
        },
        line(node, line) {
          if (lineToHighlight.includes(line)) {
            addClassToHast(node, "highlighted");
          }
          return node;
        },
      },
    ],
  });

  return (
    <div className="docs-code">
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <CopyButton content={code} />
    </div>
  );
}
