"use client";

import { useState } from "react";
import * as GrapesImports from "@dev-spendesk/grapes";
import { LiveProvider, LiveError, LivePreview } from "react-live";

import { CodeEditor } from "./CodeEditor";

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
    <div className="flex" style={{ height: "100%", width: "100%" }}>
      <div className={styles.containerItem} style={{ height: "100%" }}>
        <CodeEditor
          value={code}
          onChange={(newCode) => {
            setCode(newCode);
          }}
        />
      </div>
      <div className={styles.containerItem}>
        <LiveProvider noInline code={code} scope={{ ...GrapesImports }}>
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </div>
    </div>
  );
}
