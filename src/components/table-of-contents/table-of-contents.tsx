"use client";

import { useEffect, useState } from "react";
import { NavigationItem } from "@dev-spendesk/grapes";
import { usePathname, useSearchParams } from "next/navigation";
import { useHeadsObserver } from "./useHeadsObserver";

export function TableOfContents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { activeId } = useHeadsObserver(pathname);

  const [headings, setHeadings] = useState<
    {
      id: string;
      label: string;
      type: string;
    }[]
  >([]);

  useEffect(() => {
    setHeadings(
      Array.from(
        document.querySelectorAll(
          `[role="tabpanel"]:not([hidden]) h2, [role="tabpanel"]:not([hidden]) h3`
        )
      ).map((heading) => ({
        id: heading.id,
        label: heading.textContent ?? "",
        type: heading.nodeName,
      }))
    );
  }, [pathname, searchParams]);

  return (
    <div className="pt-m">
      {headings.map((heading) => (
        <NavigationItem
          isEmphasized={activeId === heading.id}
          className={`${heading.type === "H3" ? "ml-s" : ""} title-m`}
          variant="sideNavigation"
          component="a"
          href={`#${heading.id}`}
          key={heading.label}
          text={heading.label}
        />
      ))}
    </div>
  );
}
