"use client";

import { AmountInput, AmountInputProps } from "@dev-spendesk/grapes";
import { useState } from "react";

const currencies = [
  { key: "EUR", label: "€ - Euro" },
  {
    key: "GBP",
    label: "£ - British Pound",
  },
  {
    key: "USD",
    label: "$ - US Dollar",
  },
  { key: "JPY", label: "¥ - Yen" },
];

export function Demo(props: AmountInputProps & { defaultValue: number }) {
  const [selectedValue, setSelectedValue] = useState<number | null>(
    props.defaultValue ?? null,
  );

  return (
    <AmountInput
      {...props}
      currency={{ key: "EUR", label: "€ - Euro" }}
      value={selectedValue}
      onChange={(_, newValue) => {
        setSelectedValue(newValue);
      }}
    />
  );
}

export function DemoWithMultipleCurrencies() {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [currency, setCurrency] = useState(currencies[0]);

  return (
    <AmountInput
      currencies={currencies}
      onSelectCurrency={(selectedCurrency) => {
        setCurrency(selectedCurrency);
      }}
      currency={currency}
      value={selectedValue}
      onChange={(_, newValue) => {
        setSelectedValue(newValue);
      }}
    />
  );
}
