"use client";

import { Autocomplete, AutocompleteNoOptions } from "@dev-spendesk/grapes";
import { useState } from "react";

type CostCenterOptions = { key: string; label: string };
const costCenterOptions = [
  { key: "1", label: "Marketing" },
  { key: "2", label: "Legal" },
  { key: "3", label: "Office" },
  { key: "4", label: "Platform" },
  { key: "5", label: "Finance" },
  { key: "6", label: "Recruitment" },
  { key: "7", label: "Growth" },
  { key: "8", label: "Management" },
];

export function DemoAutocomplete() {
  const [options, setOptions] = useState(costCenterOptions);
  const [selectedOption, setSelectedOption] = useState<
    CostCenterOptions | undefined
  >();
  return (
    <div className="box">
      <Autocomplete
        className="w-[360px]"
        value={selectedOption}
        options={options}
        renderNoOptions={(rawValue) => (
          <AutocompleteNoOptions>
            <div>There are no results for {rawValue}</div>
          </AutocompleteNoOptions>
        )}
        onSearch={(value) => {
          if (!value) {
            setOptions(costCenterOptions);
            return;
          }
          setOptions(
            costCenterOptions.filter((option) =>
              option.label.toLowerCase().includes(value.toLowerCase())
            )
          );
        }}
        onSelect={setSelectedOption}
        placeholder="Search a cost center"
      />
    </div>
  );
}
