"use client";

import {
  Autocomplete,
  AutocompleteNoOptions,
  DropdownItem,
  type AutocompleteProps,
  Avatar,
} from "@dev-spendesk/grapes";
import { useState } from "react";

type Option = (typeof unfilteredOptions)[number];
export const unfilteredOptions = [
  { key: "1", label: "Marketing" },
  { key: "2", label: "Legal" },
  { key: "3", label: "Office" },
  { key: "4", label: "Platform" },
  { key: "5", label: "Finance" },
  { key: "6", label: "Recruitment" },
  { key: "7", label: "Growth" },
  { key: "8", label: "Management" },
];

type DemoProps = Partial<{
  fit: "parent";
  showClearSelectionButton: boolean;
  placement: "top-start";
  defaultValueIndex: number;
  withCustomRenderOption: boolean;
  withCustomPrefix: boolean;
}>;

export const Demo = ({
  defaultValueIndex,
  withCustomPrefix,
  withCustomRenderOption,
  ...props
}: DemoProps) => {
  const [options, setOptions] = useState(unfilteredOptions);
  const [selectedOption, setSelectedOption] = useState<Option | undefined>(
    () =>
      defaultValueIndex !== undefined
        ? unfilteredOptions[defaultValueIndex]
        : undefined,
  );

  const renderOption = withCustomRenderOption
    ? (
        option: Option,
        state: { isSelected: boolean; isHighlighted: boolean },
      ) => (
        <DropdownItem
          {...state}
          label={option.label}
          prefix={<Avatar size={24} text={option.label} variant="square" />}
        />
      )
    : undefined;

  const renderPrefix =
    withCustomPrefix && selectedOption !== undefined
      ? () => (
          <Avatar
            size={24}
            text={selectedOption.label ?? ""}
            variant="square"
          />
        )
      : undefined;

  return (
    <Autocomplete
      {...props}
      renderPrefix={renderPrefix}
      renderOption={renderOption}
      options={options}
      value={selectedOption}
      renderNoOptions={(rawValue) => (
        <AutocompleteNoOptions>
          <span>There are no results for {rawValue}</span>
        </AutocompleteNoOptions>
      )}
      onSearch={(value) => {
        if (!value) {
          setOptions(unfilteredOptions);
          return;
        }
        setOptions(
          unfilteredOptions.filter((option) =>
            option.label.toLowerCase().includes(value.toLowerCase()),
          ),
        );
      }}
      onSelect={setSelectedOption}
      placeholder="Search a cost center"
    />
  );
};
