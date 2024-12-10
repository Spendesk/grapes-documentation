"use client";

import { RadioBox, RadioGroup } from "@dev-spendesk/grapes";
import { useState } from "react";

const options: { label: string; description: string; value: string }[] = [
  {
    label: "Administrator",
    description: "An admin can set-up the account",
    value: "administrator",
  },
  {
    label: "Controller",
    description: "A controller has access to all accounting features",
    value: "controller",
  },
  {
    label: "Requester",
    description: "A requester can request and make purchases",
    value: "requester",
  },
];

export function DemoRadioBox() {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  return (
    <RadioGroup
      name="example_1"
      value={selectedValue}
      onChange={(event) => {
        setSelectedValue(event?.target.value);
      }}
      direction="column"
      className="gap-8"
    >
      {options.map((option) => (
        <RadioBox key={option.value} {...option} />
      ))}
    </RadioGroup>
  );
}

export function DemoDefaultValue() {
  const [selectedValue, setSelectedValue] = useState<string | null>(
    "administrator",
  );

  return (
    <RadioGroup
      name="example_2"
      value={selectedValue}
      onChange={(event) => {
        setSelectedValue(event?.target.value);
      }}
      direction="column"
      className="gap-8"
    >
      <RadioBox
        label="Administrator"
        description="An admin can set-up the account"
        value="administrator"
      />
      <RadioBox
        label="Controller"
        description="A controller has access to all accounting features"
        value="controller"
      />
      <RadioBox
        label="Requester"
        description="A requester can request and make purchases"
        value="requester"
      />
    </RadioGroup>
  );
}

export function DemoWithIconRadioBox() {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  return (
    <RadioGroup
      name="example_3"
      value={selectedValue}
      onChange={(event) => {
        setSelectedValue(event?.target.value);
      }}
      direction="column"
      className="gap-8"
    >
      <RadioBox
        iconName="single-purchase-card"
        label="Single use"
        description="If you need to make a one-time payment"
        value="singleUse"
      />
      <RadioBox
        iconName="recurring-card"
        label="Recurring"
        description="If you want to manage your subscriptions"
        value="recurring"
      />
    </RadioGroup>
  );
}

export function DemoBooleanRadioBox() {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  return (
    <RadioGroup
      name="example_4"
      value={selectedValue}
      onChange={(event) => {
        setSelectedValue(event?.target.value);
      }}
      className="w-[400px]"
    >
      <RadioBox label="Yes" value="yes" />
      <RadioBox label="No" value="no" />
    </RadioGroup>
  );
}
