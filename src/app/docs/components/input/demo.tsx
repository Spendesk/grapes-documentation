"use client";

import { Input, FormField, type InputProps } from "@dev-spendesk/grapes";
import { useState } from "react";

export function DemoNumberInput() {
  const [value, setValue] = useState(0);
  return (
    <FormField className="w-[360px]" label="Quantity">
      <Input
        placeholder="Enter a quantity"
        type="number"
        value={value}
        onChange={(event) => {
          setValue(event.target.valueAsNumber);
        }}
      />
    </FormField>
  );
}

export function DemoNumberConstraint() {
  const [value, setValue] = useState(0);
  return (
    <FormField className="w-[360px]" label="Quantity">
      <Input
        placeholder="Enter a quantity"
        type="number"
        min={3}
        max={5}
        value={value}
        onChange={(event) => {
          if (event.target.checkValidity()) {
            setValue(event.target.valueAsNumber);
          }
        }}
      />
    </FormField>
  );
}

export function DemoStringConstraint() {
  const [value, setValue] = useState("");
  return (
    <FormField className="w-[360px]" label="Name">
      <Input
        placeholder="Enter a name"
        type="text"
        pattern="[a-w]{0,8}"
        value={value}
        onChange={(event) => {
          if (event.target.checkValidity()) {
            setValue(event.target.value);
          }
        }}
      />
    </FormField>
  );
}

export function DemoEmailInput() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  return (
    <FormField
      className="w-[360px]"
      label="Email"
      alertMessage={error ? "Email invalid" : undefined}
    >
      <Input
        placeholder="Enter your email"
        type="email"
        value={value}
        onChange={(event) => {
          setError(!event.target.checkValidity());
          setValue(event.target.value);
        }}
      />
    </FormField>
  );
}
