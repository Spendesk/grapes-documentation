"use client";

import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useHeadsObserver } from "./useHeadsObserver";

import { classNames } from "@/lib/classNames";

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
        Array.from(
          document.querySelectorAll(`main :is(h2, h3):not([id^=grapes])`),
        )
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
    <nav aria-labelledby={titleId} className="pt-24">
      <h3 id={titleId} className="title-m text-brand-default m-8">
        On this page
      </h3>
      <ul aria-labelledby={titleId} className="list-none">
        {headings.map((heading) => (
          <li key={heading.label}>
            <Link
              className={classNames(
                heading.type === "H3" ? "ml-8" : "",
                "docs-nav-link",
                activeId === heading.id && "active",
              )}
              href={`#${heading.id}`}
            >
              {heading.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
