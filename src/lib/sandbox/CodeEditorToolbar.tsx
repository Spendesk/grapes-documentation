import { useCallback, useEffect, useState } from "react";
import { Button, DropdownItem, DropdownMenu } from "@dev-spendesk/grapes";
import * as prettier from "prettier";
import parserBabel from "prettier/plugins/babel";
import parserTypeScript from "prettier/plugins/typescript";
import * as prettierPluginEstree from "prettier/plugins/estree";
import lzString from "lz-string";
import { usePathname, useRouter } from "next/navigation";

import { examples } from "./examples";

import styles from "./CodeLive.module.css";

type Props = {
  code: string;
  setCode: (code: string) => void;
};

export const CodeEditorToolbar = ({ code, setCode }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = useCallback(() => {
    const compressedCode = lzString.compressToEncodedURIComponent(code);
    router.replace(`${pathname}?code=${compressedCode}`);
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 1_000);
  }, [code, pathname, router]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "s":
          if (event.metaKey) {
            event.preventDefault(); // Prevent Firefox default behavior
            handleSave();
          }
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSave, code]);

  return (
    <div className={styles.codeLiveToolbar}>
      <DropdownMenu
        options={examples}
        renderButton={(getToggleButtonProps) => (
          <Button
            {...getToggleButtonProps()}
            variant="tertiaryNeutral"
            text="Load an example"
          />
        )}
        renderOption={(option) => <DropdownItem label={option.label} />}
        onSelect={(option) => {
          if (option) {
            setCode(option.code);
          }
        }}
      />
      <div className="flex items-center gap-8">
        <Button
          iconName="magic-wand"
          text="Format"
          variant="tertiaryNeutral"
          onClick={async () => {
            const formattedCode = await prettier.format(code, {
              parser: "typescript",
              plugins: [parserBabel, prettierPluginEstree, parserTypeScript],
            });
            setCode(formattedCode);
          }}
        />
        <Button
          iconName="thunder"
          text={isSaving ? "Saving" : "Save"}
          variant="tertiaryNeutral"
          onClick={() => handleSave()}
        />
      </div>
    </div>
  );
};
