"use client";

import { Calendar } from "@dev-spendesk/grapes";
import { useState } from "react";

export function DemoCalendar() {
  const [value, setValue] = useState(new Date("2022-02-14T23:00:00.000Z"));

  return <Calendar value={value} onClick={setValue} />;
}
