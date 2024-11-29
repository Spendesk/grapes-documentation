"use client";

import { Button, Popover } from "@dev-spendesk/grapes";

type Props = {
  placement?:
    | "bottom-start"
    | "bottom-end"
    | "top-start"
    | "top-end"
    | "end-bottom"
    | "end-top";
};

export function DemoPopover({ placement }: Props) {
  return (
    <Popover
      placement={placement}
      renderTrigger={(triggerProps) => (
        <Button
          {...triggerProps}
          text={placement ?? "Show me a dropdown"}
          variant="primaryBrand"
        />
      )}
    >
      {(closeDropdown) => (
        <div className="body-m p-16 text-center min-w-[400px]">
          Hey there!
          <br />
          <div>Look at me, I&apos;m a dropdown.</div>
          <Button
            className="mt-16"
            variant="primaryBrand"
            text="Close me"
            onClick={closeDropdown}
          />
        </div>
      )}
    </Popover>
  );
}
