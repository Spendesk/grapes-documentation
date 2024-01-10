"use client";

import { AutocompleteMultiple } from "@dev-spendesk/grapes";
import { useState } from "react";

type Option = (typeof unfilteredOptions)[number];
const unfilteredOptions = [
  { key: "1", label: "Marketing" },
  { key: "2", label: "Legal" },
  { key: "3", label: "Office" },
  { key: "4", label: "Platform" },
  { key: "5", label: "Finance" },
  { key: "6", label: "Recruitment" },
  { key: "7", label: "Growth" },
  { key: "8", label: "Management" },
];

export const Demo = () => {
  const [options, setOptions] = useState(unfilteredOptions);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  return (
    <AutocompleteMultiple
      options={options}
      values={selectedOptions}
      translations={{
        selectAll: `Select all (${options.length} cost centers)`,
        selected: `${selectedOptions.length} cost centers selected`,
      }}
      onSearch={(value) => {
        if (!value) {
          setOptions(unfilteredOptions);
          return;
        }
        setOptions(
          unfilteredOptions.filter((option) =>
            option.label.toLowerCase().includes(value.toLowerCase())
          )
        );
      }}
      onSelect={setSelectedOptions}
      placeholder="Search a cost center"
    />
  );
};
