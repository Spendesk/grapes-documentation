"use client";

import React, { useState } from "react";
import * as GrapesImports from "@dev-spendesk/grapes";
import { LiveProvider, LiveError, LivePreview } from "react-live";

import { classNames } from "@/utils/classNames";

import { CodeEditor } from "./CodeEditor";
import { CodeEditorToolbar } from "./CodeEditorToolbar";
import { CopyButton } from "../copy-button/copy-button";
import { FeedbackLink } from "../feedback-link/feedback-link";
import { initialCode } from "./examples";

import styles from "./CodeLive.module.css";

type Props = {
  decompressedCode?: string;
};

export function CodeLive({ decompressedCode }: Props) {
  const [code, setCode] = useState(decompressedCode ?? initialCode);

  return (
    <div className={classNames(styles.codeLive, "body-m")}>
      <div className={styles.codeLiveItem}>
        <CodeEditorToolbar code={code} setCode={setCode} />
        <CodeEditor
          className={styles.codeLiveEditor}
          value={code}
          onChange={(newCode) => {
            setCode(newCode);
          }}
        />
        <CopyButton content={code} className={styles.copyButton} />
      </div>
      <div className={styles.codeLiveItem}>
        <LiveProvider
          noInline
          code={code}
          scope={{ ...React, ...GrapesImports }}
        >
          <LiveError />
          <LivePreview />
        </LiveProvider>
        <div className="absolute bottom-xs right-xs flex items-center gap-xs">
          <GrapesImports.Tag variant="info">Beta</GrapesImports.Tag>
          <FeedbackLink />
        </div>
      </div>
    </div>
  );
}
