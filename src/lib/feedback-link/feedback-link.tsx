"use client";

import { usePathname } from "next/navigation";
import { ExternalLink } from "../external-link/external-link";

const APP_URL = "https://grapes.spendesk.design";
const AIRTABLE_FORM =
  "https://airtable.com/appMQbJp4nbJxFK5j/pagIFKFvCfLmUmuiC/form";

export function FeedbackLink() {
  const pathname = usePathname();

  return (
    <ExternalLink href={`${AIRTABLE_FORM}?prefill_URL=${APP_URL}${pathname}`}>
      Leave feedback
    </ExternalLink>
  );
}
