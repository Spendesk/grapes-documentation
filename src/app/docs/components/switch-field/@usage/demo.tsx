"use client";

import { SwitchField } from "@dev-spendesk/grapes";
import { useState } from "react";

type Props = {
  withHelpText?: boolean;
};

export function DemoSwitchField({ withHelpText }: Props) {
  const [isChecked, setChecked] = useState(false);
  return (
    <SwitchField
      label="Use a default account"
      helpText={
        withHelpText &&
        "This default account will be used for all employees without dedicated accounts."
      }
      isChecked={isChecked}
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    />
  );
}
