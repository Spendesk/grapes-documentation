"use client";

import { useEffect, useState } from "react";
import { NavigationItem } from "@dev-spendesk/grapes";
import { usePathname } from "next/navigation";

function getClassNameForHeading(type: string) {
  switch (type) {
    case "H2":
      return "ml-s";
    case "H3":
      return "ml-l";
  }
}

export function TableOfContents() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<
    {
      id: string;
      label: string;
      type: string;
    }[]
  >([]);
  useEffect(() => {
    setHeadings(
      Array.from(document.querySelectorAll("h1, h2, h3")).map((heading) => ({
        id: heading.id,
        label: heading.textContent ?? "",
        type: heading.nodeName,
      }))
    );
  }, [pathname]);

  return (
    <div className="pt-m">
      {headings.map((heading) => (
        <NavigationItem
          className={`${getClassNameForHeading(heading.type)} title-m`}
          variant="sideNavigation"
          component="a"
          href={`#${heading.id}`}
          key={heading.label}
          text={heading.label}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            event.preventDefault();
            document
              .getElementById(heading.id)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      ))}
    </div>
  );
}
