"use client";

import { TextInput } from "@dev-spendesk/grapes";
import { useState } from "react";

export function DemoTextInput() {
  const [value, setValue] = useState("");
  return (
    <div className="w-[360px]">
      <TextInput
        placeholder="This input accepts up to 8 digits"
        fit="parent"
        value={value}
        pattern="\d{0,8}"
        onChange={(event) => {
          if (event.target.checkValidity()) {
            setValue(event.target.value);
          }
        }}
      />
    </div>
  );
}
