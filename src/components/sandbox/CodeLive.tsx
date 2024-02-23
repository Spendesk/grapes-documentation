"use client";

import { useState } from "react";
import * as GrapesImports from "@dev-spendesk/grapes";
import { LiveProvider, LiveError, LivePreview } from "react-live";

import { classNames } from "@/utils/classNames";
import { CodeEditor } from "./CodeEditor";
import { CopyButton } from "../copy-button/copy-button";
import { examples, initialCode } from "./examples";

import styles from "./CodeLive.module.css";

export function CodeLive() {
  const [code, setCode] = useState(initialCode);

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
