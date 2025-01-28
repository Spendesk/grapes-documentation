import { codeToHtml, addClassToHast } from "shiki";
import {
  transformerNotationHighlight,
  transformerNotationDiff,
} from "@shikijs/transformers";
import { CopyButton } from "@/lib/copy-button/copy-button";
import { OpenInSandboxButton } from "@/lib/open-in-sandbox-button/open-in-sandbox-button";

import "./code-block.css";

type Props = {
  language?: string;
  displaySandboxButton?: boolean;
  children: React.ReactNode;
};

function extractLanguage(attr = "") {
  const result = /language-(\w+).*/.exec(attr);
  return result ? result[1] : "tsx";
}

export async function CodeBlock({
  language,
  children,
  displaySandboxButton = false,
}: Props) {
  const code = children as string;
  const lang = extractLanguage(language);

  const html = await codeToHtml(code, {
    lang,
    theme: "github-dark",
    transformers: [
      {
        pre(node) {
          addClassToHast(node, "docs-pre");
        },
      },
      transformerNotationHighlight({
        matchAlgorithm: "v3",
      }),
      transformerNotationDiff({ matchAlgorithm: "v3" }),
    ],
  });

  return (
    <div className="docs-code">
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <CopyButton content={code} className="docs-cta-copy" />
      {displaySandboxButton && <OpenInSandboxButton code={code} />}
    </div>
  );
}
