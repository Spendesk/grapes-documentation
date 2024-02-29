"use client";

import React, { useState } from "react";
import * as GrapesImports from "@dev-spendesk/grapes";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import lzString from "lz-string";
import { usePathname, useRouter } from "next/navigation";

import { CodeEditor } from "./CodeEditor";
import { CodeEditorToolbar } from "./CodeEditorToolbar";
import { CopyButton } from "../copy-button/copy-button";
import { initialCode } from "./examples";

import styles from "./CodeLive.module.css";

type Props = {
  decompressedCode?: string;
};

export function CodeLive({ decompressedCode }: Props) {
  const [code, setCode] = useState(decompressedCode ?? initialCode);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={styles.codeLive}>
      <div className={styles.codeLiveItem}>
        <CodeEditorToolbar code={code} setCode={setCode} />
        <CodeEditor
          className={styles.codeLiveEditor}
          value={code}
          onChange={(newCode) => {
            setCode(newCode);
            const compressedCode =
              lzString.compressToEncodedURIComponent(newCode);
            router.replace(`${pathname}?code=${compressedCode}`);
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
        <GrapesImports.Tag
          className="absolute bottom-xs right-xs"
          variant="info"
        >
          Beta
        </GrapesImports.Tag>
      </div>
    </div>
  );
}
