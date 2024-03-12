"use client";

import { IconButton, Tooltip, colors } from "@dev-spendesk/grapes";
import lzString from "lz-string";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  code: string;
};

function makeCodeForSandbox(code: string) {
  if (!code.includes("Demo") && code.includes("return")) {
    return `const Demo = () => {
  ${code}
}

render(<Demo />);
`;
  }

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
  const pathname = usePathname();

  if (
    // Display the button only for component examples
    !pathname.includes("components") ||
    // TODO: add directive [disable-sandbox] in MDX
    code.includes("otherProps") ||
    code.includes("import {")
  ) {
    return null;
  }

  return (
    <Tooltip content="Open in Sandbox" triggerAsChild>
      <IconButton
        iconName="external"
        className="docs-cta-open"
        iconColor={colors.white}
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
