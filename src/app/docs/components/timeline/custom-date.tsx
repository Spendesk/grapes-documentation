"use client";

import { Tag, Timeline, TimelineItem } from "@dev-spendesk/grapes";

export function TimelineWithCustomDate() {
  return (
    <Timeline renderDate={(date, locale) => date.toLocaleString(locale)}>
      <TimelineItem date={new Date("2020-12-22T21:29:00.000Z")}>
        <section>
          <div>New request created</div>
          <div>Submitted by Roger Dupont</div>
          <div>Amount requested: 39€</div>
        </section>
      </TimelineItem>
      <TimelineItem date={new Date("2021-01-05T14:29:00.000Z")}>
        <section>
          <div>Approved by manager</div>
          <div>Approver: Jean</div>
        </section>
      </TimelineItem>
      <TimelineItem date={new Date("2021-01-08T08:24:00.000Z")}>
        <div className="flex items-center gap-4">
          <Tag variant="success" iconName="circle-check">
            Validated
          </Tag>
          by
          <Tag variant="carbon">Finance Team</Tag>
        </div>
      </TimelineItem>
    </Timeline>
  );
}
