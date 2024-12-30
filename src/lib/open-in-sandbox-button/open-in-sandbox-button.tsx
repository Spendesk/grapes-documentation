"use client";

import React from "react";
import { IconButton, Tooltip, colors } from "@dev-spendesk/grapes";
import lzString from "lz-string";
import { useRouter } from "next/navigation";

type Props = {
  code: string;
};

function makeCodeForSandbox(code: string) {
  if (!code.includes("Demo")) {
    return `const Demo = () => {
  return (
    ${code}
  );
}

render(<Demo />);
`;
  }

  return `${code}

render(<Demo />);`;
}

export function OpenInSandboxButton({ code }: Props) {
  const router = useRouter();

  return (
    <Tooltip content="Open in Sandbox" triggerAsChild>
      <IconButton
        iconName="arrow-top-right-square"
        className="docs-cta-open"
        aria-label="Open in Sandbox"
        iconColor={colors.backgroundPrimaryDefault}
        onClick={() => {
          const parsedCode = makeCodeForSandbox(code);
          const compressedCode =
            lzString.compressToEncodedURIComponent(parsedCode);
          router.push(`/sandbox?code=${compressedCode}`);
        }}
      />
    </Tooltip>
  );
}
