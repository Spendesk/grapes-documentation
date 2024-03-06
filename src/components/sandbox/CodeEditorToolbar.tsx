import {
  Button,
  DropdownItem,
  DropdownMenu,
  Tooltip,
} from "@dev-spendesk/grapes";
import * as prettier from "prettier";
import parserBabel from "prettier/plugins/babel";
import parserTypeScript from "prettier/plugins/typescript";
import * as prettierPluginEstree from "prettier/plugins/estree";
import lzString from "lz-string";
import { usePathname, useRouter } from "next/navigation";

import { examples } from "./examples";

import styles from "./CodeLive.module.css";
import { useState } from "react";

type Props = {
  code: string;
  setCode: (code: string) => void;
};

export const CodeEditorToolbar = ({ code, setCode }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className={styles.codeLiveToolbar}>
      <DropdownMenu
        options={examples}
        renderButton={(getToggleButtonProps) => (
          <Button
            {...getToggleButtonProps()}
            variant="ghost"
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
      <div className="flex items-center gap-xs">
        <Button
          iconName="magic-wand"
          text="Format"
          variant="ghost"
          onClick={async () => {
            const formattedCode = await prettier.format(code, {
              parser: "typescript",
              plugins: [parserBabel, prettierPluginEstree, parserTypeScript],
            });
            setCode(formattedCode);
          }}
        />
        <Tooltip content="Saved" isOpen={isSaved}>
          <Button
            iconName="thunder"
            text="Save"
            variant="ghost"
            onClick={() => {
              const compressedCode =
                lzString.compressToEncodedURIComponent(code);
              router.replace(`${pathname}?code=${compressedCode}`);
              setIsSaved(true);
              setTimeout(() => {
                setIsSaved(false);
              }, 1_500);
            }}
          />
        </Tooltip>
      </div>
    </div>
  );
};
