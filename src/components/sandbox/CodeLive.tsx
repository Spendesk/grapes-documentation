"use client";

import { useState } from "react";
import * as GrapesImports from "@dev-spendesk/grapes";
import { LiveProvider, LiveError, LivePreview } from "react-live";

import { classNames } from "@/utils/classNames";
import { CodeEditor } from "./CodeEditor";
import { CopyButton } from "../copy-button/copy-button";

import styles from "./CodeLive.module.css";

const initialCode = `const Demo = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button
        variant="primary"
        text="Click me!"
        onClick={() => setIsOpen(true)}
      />
      <Modal
        isOpen={isOpen}
        title="It's a modal"
        iconName="sparkles"
        actions={[
          <Button
            key="certified"
            variant="primary"
            text="Thank you :)"
            onClick={() => setIsOpen(false)}
          />,
        ]}
      />
    </>
  );
};

render(<Demo />);
`;

export function CodeLive() {
  const [code, setCode] = useState(initialCode);

  return (
    <div className={styles.codeLive}>
      <div className={styles.codeLiveToolbar}>
        <div className={styles.codeLiveToolbarItem}>
          <GrapesImports.Tag variant="info">Code</GrapesImports.Tag>
          <GrapesImports.Button
            iconName="magic-wand"
            text="Format"
            variant="secondary"
          />
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
