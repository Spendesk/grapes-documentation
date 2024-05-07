"use client";

import { useEffect, useId, useState } from "react";
import { NavigationItem } from "@dev-spendesk/grapes";
import { usePathname } from "next/navigation";
import { useHeadsObserver } from "./useHeadsObserver";

export function TableOfContents() {
  const titleId = useId();
  const pathname = usePathname();

  const { activeId } = useHeadsObserver(pathname);

  const [headings, setHeadings] = useState<
    {
      id: string;
      label: string;
      type: string;
    }[]
  >([]);

  useEffect(() => {
    const container = document.querySelector("main");
    if (container == null) {
      return;
    }

    function setHeading() {
      setHeadings(
        Array.from(document.querySelectorAll(`main :is(h2, h3)`))
          .filter((heading) => heading.clientWidth > 0)
          .map((heading) => ({
            id: heading.id,
            label: heading.textContent ?? "",
            type: heading.nodeName,
          })),
      );
    }

    const observer = new MutationObserver(setHeading);
    observer.observe(container, {
      childList: true,
      subtree: true,
    });
    setHeading();

    return () => {
      observer.disconnect();
    };
  }, []);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav aria-labelledby={titleId} className="pt-m">
      <h3 id={titleId} className="title-m text-primary-dark m-xs">
        On this page
      </h3>
      <ul aria-labelledby={titleId} className="list-none">
        {headings.map((heading) => (
          <li key={heading.label}>
            <NavigationItem
              isEmphasized={activeId === heading.id}
              className={`${heading.type === "H3" ? "ml-s" : ""} title-m`}
              variant="sideNavigation"
              component="a"
              href={`#${heading.id}`}
              text={heading.label}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
