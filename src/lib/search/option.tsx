"use client";

import { Icon } from "@dev-spendesk/grapes";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";

export type OptionType = {
  label: string;
  url: string;
};

type OptionProps = {
  option: OptionType;
  isSelected: boolean;
  onOptionClick: () => void;
};

export function Option({ option, isSelected, onOptionClick }: OptionProps) {
  return (
    <Link
      key={option.label}
      href={option.url}
      className="search-result"
      onClick={onOptionClick}
    >
      <li role="option" aria-selected={isSelected}>
        {option.label}
        <Icon name="caret-right" size="m" />
      </li>
    </Link>
  );
}
