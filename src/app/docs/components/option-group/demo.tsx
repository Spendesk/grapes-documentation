"use client";

import { OptionGroup, OptionGroupProps } from "@dev-spendesk/grapes";
import { useState } from "react";

export function Demo(props: OptionGroupProps) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  return (
    <OptionGroup
      name="optionGroupField"
      options={props.options}
      value={selectedValue}
      onChange={(event) => {
        setSelectedValue(event.target.value);
      }}
    />
  );
}
