"use client"

import { CheckboxField } from "@dev-spendesk/grapes";
import { useState } from "react";

export function Demo() {
  const [checked, setChecked] = useState(false);

  return <CheckboxField label="Include receipt" isChecked={checked} onChange={(event) => setChecked(event.target.checked)}/>
}