"use client";

import { Option, type OptionType } from "./option";
import "./listbox.css";

type ListBoxProps = {
  selectedIndex: number;
  options: OptionType[];
  onOptionSelected: () => void;
};

export function ListBox({
  options,
  selectedIndex,
  onOptionSelected,
}: ListBoxProps) {
  return (
    <ul className="search-list" role="listbox">
      {options.map((option, index) => (
        <Option
          key={option.label}
          option={option}
          isSelected={selectedIndex === index}
          onOptionClick={onOptionSelected}
        />
      ))}
    </ul>
  );
}
