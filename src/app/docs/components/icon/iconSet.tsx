"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Icon, Input, type IconName } from "@dev-spendesk/grapes";
import { getSortedProps } from "@/lib/props-table/utils";

import "./iconSet.css";

const iconProps = getSortedProps("Icon");
const nameProp = iconProps.find((prop) => prop.name === "name");
const collator = new Intl.Collator("en-US");
const icons = nameProp?.type.value
  ?.map((name) => name.value.replace(/\"/g, ""))
  .sort(collator.compare) as IconName[];

export function IconSet() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState<string>(
    () => searchParams.get("search") ?? "",
  );

  return (
    <div>
      <form method="GET">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search icon"
          fit="parent"
          type="search"
          name="search"
          leftAddon={<Icon name="magnifying-glass" className="ml-8" />}
        />
      </form>
      <ul className="docs-icon-set">
        {icons
          .filter((iconName) => {
            const reg = new RegExp(`${search}`, "ig");
            return reg.test(iconName);
          })
          .map((icon) => {
            return (
              <li key={icon} className="docs-icon-item">
                <div className="docs-icon-box">
                  <Icon size="l" name={icon} />
                  <div className="docs-cta-stack">
                    <button
                      type="button"
                      onClick={() => navigator.clipboard.writeText(icon)}
                    >
                      Copy name
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        navigator.clipboard.writeText(`<Icon name="${icon}" />`)
                      }
                    >
                      Copy JSX
                    </button>
                  </div>
                </div>
                {icon}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
