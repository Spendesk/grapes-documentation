"use client";

import { Icon, Link } from "@dev-spendesk/grapes";
import { usePathname } from "next/navigation";

const APP_URL = "https://grapes.spendesk.design";
const AIRTABLE_FORM =
  "https://airtable.com/appMQbJp4nbJxFK5j/pagIFKFvCfLmUmuiC/form";

export function FeedbackLink() {
  const pathname = usePathname();

  return (
    <Link
      as="a"
      href={`${AIRTABLE_FORM}?prefill_URL=${APP_URL}${pathname}`}
      isExternal
      className="inline-flex gap-xxs items-center"
    >
      Leave feedback
      <Icon name="external" size="s" />
    </Link>
  );
}
