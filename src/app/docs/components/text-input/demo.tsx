"use client";

import { TextInput } from "@dev-spendesk/grapes";
import { useState } from "react";

export function DemoTextInput() {
  const [value, setValue] = useState("");

  return (
    <div className="box">
      <TextInput
        className="w-[360px]"
        placeholder="Enter account number"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}
