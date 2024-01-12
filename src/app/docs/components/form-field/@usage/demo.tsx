"use client"

import { FormField, FormFieldProps, TextInput } from "@dev-spendesk/grapes";
import { useState } from "react";


export function Demo(props: FormFieldProps) {
  const [state, setState] = useState('');

  return <FormField {...props}>
    <TextInput value={state} onChange={(event) => setState(event.target.value)} />
  </FormField>
}