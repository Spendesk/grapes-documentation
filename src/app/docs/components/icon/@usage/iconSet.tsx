"use client";

import { getSortedProps } from "@/components/props-table/utils";
import { Icon, Input, Button, type IconName } from "@dev-spendesk/grapes";
import { useState } from "react";

import "./iconSet.css";

const iconProps = getSortedProps("Icon");
const nameProp = iconProps.find((prop) => prop.name === "name");
const icons = nameProp?.type.value?.map((name) =>
  name.value.replace(/\"/g, ""),
) as IconName[];

export function IconSet() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search icon"
        fit="parent"
        type="search"
        leftAddon={<Icon name="search" className="ml-xs" />}
      />

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
                    <Button
                      text="Copy name"
                      variant="secondary"
                      onClick={() => navigator.clipboard.writeText(icon)}
                    />
                    <Button
                      text="Copy JSX"
                      variant="secondary"
                      onClick={() =>
                        navigator.clipboard.writeText(`<Icon name="${icon}" />`)
                      }
                    />
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
