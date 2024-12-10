"use client";

import { DatePicker, DatePickerProps } from "@dev-spendesk/grapes";
import { useState } from "react";

export function Demo(props: DatePickerProps) {
  const [date, setDate] = useState<Date | undefined>(props.value);

  return <DatePicker {...props} value={date} onChange={setDate} />;
}
