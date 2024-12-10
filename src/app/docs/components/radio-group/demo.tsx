"use client";

import { RadioField, RadioGroup } from "@dev-spendesk/grapes";
import { ChangeEvent, useState } from "react";

const options: {
  value: string;
  label: string;
  isDisabled?: boolean;
}[] = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "yearly", label: "Yearly" },
];

type Props = {
  isColumn?: boolean;
};

export function DemoRadioGroup({ isColumn }: Props) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioGroup
      name="time"
      value={selectedValue}
      onChange={handleChange}
      direction={isColumn ? "column" : "row"}
    >
      {options.map((props) => (
        <RadioField {...props} key={props.value} />
      ))}
    </RadioGroup>
  );
}
