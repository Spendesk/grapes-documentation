"use client";

import { DropdownItem, Select } from "@dev-spendesk/grapes";
import { useState } from "react";

type Option = { key: string; label: string };
type CostCenter = Option & { owner: string };

const costCenters: CostCenter[] = [
  {
    key: "marketing",
    label: "Marketing",
    owner: "Michael Murphy",
  },
  {
    key: "legal",
    label: "Legal",
    owner: "Nayden Lennart",
  },
  {
    key: "office",
    label: "Office",
    owner: "Nicolas Harvey",
  },
  {
    key: "platform",
    label: "Platform",
    owner: "Lewis Barker",
  },
  {
    key: "finance",
    label: "Finance",
    owner: "George Gray",
  },
  {
    key: "recruitment",
    label: "Recruitment",
    owner: "Laura Lagarde",
  },
];

type Props = {
  placement?: "bottom-end" | "bottom-start" | "top-end" | "top-start";
  placeholder?: string;
  withMaxHeight?: boolean;
  withRenderOption?: boolean;
};

export function DemoSelect({
  placement,
  placeholder,
  withMaxHeight,
  withRenderOption,
}: Props) {
  const [selectedOption, setSelectedOption] = useState<Option>();

  return (
    <div className="w-[360px]">
      <Select
        fit="parent"
        placeholder={placeholder ?? "Select a cost center"}
        options={costCenters}
        value={selectedOption}
        dropdownContentMaxHeight={withMaxHeight ? "232px" : undefined}
        placement={placement}
        renderOption={
          withRenderOption
            ? (option: CostCenter, optionState) => (
                <DropdownItem
                  label={`${option.label} (${option.owner})`}
                  {...optionState}
                />
              )
            : undefined
        }
        onSelect={setSelectedOption}
      />
    </div>
  );
}
