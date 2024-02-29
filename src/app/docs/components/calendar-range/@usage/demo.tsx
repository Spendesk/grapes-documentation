"use client";

import { CalendarRange, type DateRange } from "@dev-spendesk/grapes";
import { useState } from "react";

type Props = {
  minDate?: Date;
  maxDate?: Date;
};
export function DemoCalendarRange({ maxDate, minDate }: Props) {
  const [value, setValue] = useState<DateRange>([
    new Date("2022-02-13"),
    new Date("2022-02-21"),
  ]);

  return (
    <CalendarRange
      maxDate={maxDate}
      minDate={minDate}
      value={value}
      onClick={setValue}
    />
  );
}
