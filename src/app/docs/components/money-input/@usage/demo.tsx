"use client";

import { MoneyInput, MoneyInputProps } from "@dev-spendesk/grapes";
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

export function Demo(props: MoneyInputProps & { defaultValue: number }) {
  const [selectedValue, setSelectedValue] = useState<number | null>(
    props.defaultValue ?? null
  );

  return (
    <MoneyInput
      {...props}
      currency={{ key: "EUR", label: "€ - Euro" }}
      value={selectedValue}
      onChange={(event) => {
        setSelectedValue(event.target.valueAsNumber);
      }}
    />
  );
}

export function DemoWithMultipleCurrencies() {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [currency, setCurrency] = useState(currencies[0]);

  return (
    <MoneyInput
      currencies={currencies}
      onSelectCurrency={(selectedCurrency) => {
        setCurrency(selectedCurrency);
      }}
      currency={currency}
      value={selectedValue}
      onChange={(event) => {
        setSelectedValue(event.target.valueAsNumber);
      }}
    />
  );
}
