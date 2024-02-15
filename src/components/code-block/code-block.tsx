"use client";

import React, { useState } from "react";
import { codeToHtml, addClassToHast } from "shiki";
import { transformerNotationHighlight } from "@shikijs/transformers";
import * as GrapesImports from "@dev-spendesk/grapes";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { themes } from "prism-react-renderer";

import { CopyButton } from "./copy-button";
import { Preview } from "../preview/preview";

import "./code-block.css";

type Props = {
  language?: string;
  children: React.ReactNode;
};

function extractLanguage(attr = "") {
  const result = /language-(\w+).*/.exec(attr);
  return result ? result[1] : "tsx";
}

export async function CodeBlock({ language, children }: Props) {
  const [code, setCode] = useState(children as string);
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
      transformerNotationHighlight(),
    ],
  });

  return (
    <>
      <LiveProvider
        code={code}
        scope={{ ...React, ...GrapesImports }}
        enableTypeScript
      >
        <LiveEditor theme={themes.vsDark} />
        <Preview>
          <LiveError />
          <LivePreview Component={React.Fragment} />
        </Preview>
      </LiveProvider>
      <div className="docs-code">
        <div
          contentEditable
          onInput={(event) => {
            setCode(event.currentTarget.textContent);
          }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <CopyButton content={code} />
      </div>
    </>
  );
}
