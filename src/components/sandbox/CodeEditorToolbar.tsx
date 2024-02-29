import { Button, DropdownItem, DropdownMenu } from "@dev-spendesk/grapes";
import * as prettier from "prettier";
import parserBabel from "prettier/plugins/babel";
import parserTypeScript from "prettier/plugins/typescript";
import * as prettierPluginEstree from "prettier/plugins/estree";

import { examples } from "./examples";

import styles from "./CodeLive.module.css";

type Props = {
  code: string;
  setCode: (code: string) => void;
};

export const CodeEditorToolbar = ({ code, setCode }: Props) => {
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
        <Button
          iconName="link"
          text="Share"
          variant="ghost"
          onClick={() => {
            const currentUrl = window.location.href;
            navigator.clipboard.writeText(currentUrl);
          }}
        />
      </div>
    </div>
  );
};
