"use client";

import { useState } from "react";
import * as GrapesImports from "@dev-spendesk/grapes";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import * as prettier from "prettier";
import parserBabel from "prettier/plugins/babel";
import * as prettierPluginEstree from "prettier/plugins/estree";
import lzString from "lz-string";
import { usePathname, useRouter } from "next/navigation";

import { classNames } from "@/utils/classNames";
import { CodeEditor } from "./CodeEditor";
import { CopyButton } from "../copy-button/copy-button";
import { examples, initialCode } from "./examples";

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
      <div className={styles.codeLiveToolbar}>
        <div className={styles.codeLiveToolbarItem}>
          <GrapesImports.Tag variant="info">Code</GrapesImports.Tag>
          <div className="flex items-center gap-s">
            <GrapesImports.DropdownMenu
              options={examples}
              renderButton={(getToggleButtonProps) => (
                <GrapesImports.Button
                  {...getToggleButtonProps()}
                  variant="secondary"
                  text="Load an example"
                />
              )}
              renderOption={(option) => (
                <GrapesImports.DropdownItem label={option.label} />
              )}
              onSelect={(option) => {
                if (option) {
                  setCode(option.code);
                }
              }}
            />
            <GrapesImports.Button
              iconName="magic-wand"
              text="Format"
              variant="secondary"
              onClick={async () => {
                const formattedCode = await prettier.format(code, {
                  parser: "babel",
                  plugins: [parserBabel, prettierPluginEstree],
                });
                setCode(formattedCode);
              }}
            />
            <GrapesImports.Button
              iconName="link"
              text="Share"
              variant="secondary"
              onClick={() => {
                const currentUrl = window.location.href;
                navigator.clipboard.writeText(currentUrl);
              }}
            />
          </div>
        </div>
        <div className={styles.codeLiveToolbarItem}>
          <GrapesImports.Tag variant="info">Preview</GrapesImports.Tag>
        </div>
      </div>
      <div
        className={styles.codeLiveContainer}
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className={classNames(styles.codeLiveItem, "relative")}
          style={{ height: "100%" }}
        >
          <CodeEditor
            value={code}
            onChange={(newCode) => {
              setCode(newCode);
              const compressedCode =
                lzString.compressToEncodedURIComponent(newCode);
              router.replace(`${pathname}?code=${compressedCode}`);
            }}
          />
          <CopyButton content={code} className="absolute top-0 right-0" />
        </div>
        <div className={styles.codeLiveItem}>
          <LiveProvider noInline code={code} scope={{ ...GrapesImports }}>
            <LiveError />
            <LivePreview />
          </LiveProvider>
        </div>
      </div>
    </div>
  );
}
