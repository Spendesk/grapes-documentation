"use client";

import {
  Button,
  CheckboxInput,
  DropdownItem,
  DropdownMenu,
} from "@dev-spendesk/grapes";
import { useState } from "react";

import { classNames } from "@/lib/classNames";

const costCenters = [
  { key: "marketing", label: "Marketing" },
  { key: "legal", label: "Legal" },
  { key: "office", label: "Office" },
  { key: "platform", label: "Platform" },
  { key: "finance", label: "Finance" },
  { key: "recruitment", label: "Recruitment" },
];

type Props = {
  placement?: "bottom-end" | "bottom-start" | "top-end" | "top-start";
  fitToButton?: boolean;
};

export function DemoDropdownMenu({ fitToButton, placement }: Props) {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  return (
    <DropdownMenu
      options={costCenters}
      placement={placement}
      renderButton={(getToggleButtonProps) => (
        <div className={classNames(fitToButton && "w-[300px]")}>
          <Button
            {...getToggleButtonProps()}
            fit={fitToButton ? "parent" : "content"}
            variant="tertiaryNeutral"
            text={placement ?? "Cost centers"}
          />
        </div>
      )}
      renderOption={(option) => (
        <DropdownItem
          label={option.label}
          isSelected={selectedOption === option.key}
        />
      )}
      onSelect={(option) => {
        if (option) {
          setSelectedOption(option.key);
        }
      }}
    />
  );
}

export function DemoDropdownMenuCheckboxes() {
  const [selectedOptions, setSelectedOptions] = useState<string[] | undefined>(
    undefined,
  );

  return (
    <DropdownMenu
      keepOpenOnSelect
      renderButton={(getToggleButtonProps) => (
        <Button
          {...getToggleButtonProps()}
          variant="tertiaryNeutral"
          text="Cost centers"
        />
      )}
      options={costCenters}
      onSelect={(option) => {
        if (selectedOptions?.includes(option.key)) {
          const filteredSelectedOptions = selectedOptions?.filter(
            (s) => s !== option.key,
          );
          setSelectedOptions(
            filteredSelectedOptions.length
              ? filteredSelectedOptions
              : undefined,
          );
        } else {
          setSelectedOptions([...(selectedOptions ?? []), option.key]);
        }
      }}
      renderOption={(option) => {
        const isSelected = selectedOptions
          ? selectedOptions.includes(option.key)
          : false;
        return (
          <DropdownItem
            key={option.key}
            label={option.label}
            isSelected={isSelected}
            isHighlighted={isSelected}
            prefix={
              <CheckboxInput isChecked={isSelected} onChange={() => {}} />
            }
          />
        );
      }}
    />
  );
}
