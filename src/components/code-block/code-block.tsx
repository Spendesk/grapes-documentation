import { codeToHtml, addClassToHast } from "shikiji";
import { CopyButton } from "./copy-button";

import "./code-block.css";

type Props = {
  language?: string;
  children: React.ReactNode;
};

export async function CodeBlock({ language, children }: Props) {
  const code = children as string;

  const html = await codeToHtml(code, {
    lang: language?.replace("language-", "") ?? "tsx",
    theme: "github-dark",
    transformers: [
      {
        pre(node) {
          addClassToHast(node, "docs-pre");
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
