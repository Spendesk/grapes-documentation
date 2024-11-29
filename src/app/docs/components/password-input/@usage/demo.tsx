"use client";

import { PasswordInput, type PasswordRule } from "@dev-spendesk/grapes";
import { useState } from "react";

export const passwordRules: PasswordRule[] = [
  {
    label: "characters",
    required: 12,
    validate: (value): boolean => !!value && value.length >= 12,
  },
  {
    label: "lowercase",
    required: 1,
    validate: (value): boolean => !!value && value.toUpperCase() !== value,
  },
  {
    label: "uppercase",
    required: 1,
    validate: (value): boolean => !!value && value.toLowerCase() !== value,
  },
  {
    label: "digit",
    required: 1,
    validate: (value): boolean => !!value && /\d/.test(value),
  },
];

export const getConfirmPasswordRule = (
  password: string | null,
): PasswordRule => {
  return {
    label: "Passwords match",
    validate: (value) => Boolean(password && value && value === password),
  };
};

export function DemoPasswordInput() {
  const [password, setPassword] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState<string | null>(null);

  return (
    <div className="w-[360px]">
      <PasswordInput
        fit="parent"
        rules={passwordRules}
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <PasswordInput
        fit="parent"
        className="mt-16"
        rules={[getConfirmPasswordRule(password)]}
        value={confirmPassword}
        onChange={(event) => {
          setConfirmPassword(event.target.value);
        }}
      />
    </div>
  );
}
