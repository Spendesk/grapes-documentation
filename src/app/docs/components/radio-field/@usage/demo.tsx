"use client";

import { RadioField } from "@dev-spendesk/grapes";
import { useState } from "react";

export function DemoRadioField() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <RadioField
      name="approval"
      value="approval-needed"
      label="Approval Needed"
      isChecked={isChecked}
      onChange={(e) => {
        setIsChecked(true);
      }}
    />
  );
}
