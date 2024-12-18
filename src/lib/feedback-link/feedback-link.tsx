"use client";

import { Link as GrapesLink } from "@dev-spendesk/grapes";
import { usePathname } from "next/navigation";

const APP_URL = "https://grapes.spendesk.design";
const AIRTABLE_FORM =
  "https://airtable.com/appMQbJp4nbJxFK5j/pagIFKFvCfLmUmuiC/form";

export function FeedbackLink() {
  const pathname = usePathname();

  return (
    <GrapesLink
      isExternal
      href={`${AIRTABLE_FORM}?prefill_URL=${APP_URL}${pathname}`}
    >
      Leave feedback
    </GrapesLink>
  );
}
