import { ListView, ListItem, Tag } from "@dev-spendesk/grapes";
import Link from "next/link";
import { Fragment } from "react";
import { classNames } from "@/lib/classNames";

import { getSortedProps } from "./utils";
import { InlineBlock } from "./inline-code";

import styles from "./props-table.module.css";

type Props = {
  components: string[];
};

const collator = Intl.Collator("en-US");
const MAX_VALUES_DISPLAYED = 16;
function extractValues(values: { value: string }[]): string {
  const extractedValues = values
    .map(({ value }) => value)
    .sort(collator.compare);

  if (extractedValues.length > MAX_VALUES_DISPLAYED) {
    return `${extractedValues.slice(0, MAX_VALUES_DISPLAYED).join(" | ")} | ... ${extractedValues.length - MAX_VALUES_DISPLAYED} more ...`;
  }
  return extractedValues.join(" | ");
}

export function PropsTable({ components }: Props) {
  return (
    <div className="mt-16">
      {components.map((component, index) => (
        <Fragment key={index}>
          {components.length > 1 && <h2 id={component}>{component}</h2>}
          <ListView className={classNames(components.length > 0 && "mt-24")}>
            {getSortedProps(component).map(
              ({ name, required, type, defaultValue, description }) => {
                const isAnIconProp =
                  type.raw && type.raw.includes("arrow-bottom");

                return (
                  <ListItem key={name} className={styles.listItem}>
                    <div className="flex items-baseline gap-8 ">
                      {isAnIconProp ? (
                        <Link
                          className={classNames(
                            "text-content-primary title-l",
                            required && styles.required,
                          )}
                          href="/docs/components/icon"
                        >
                          {name}
                        </Link>
                      ) : (
                        <span
                          className={classNames(
                            "text-content-primary title-l",
                            required && styles.required,
                          )}
                        >
                          {name}
                        </span>
                      )}
                      <InlineBlock
                        code={
                          type.value ? extractValues(type.value) : type.name
                        }
                      />
                    </div>
                    <p className="text-secondary-bg-primary body-m mt-8">
                      {description}
                    </p>
                    {defaultValue != null ? (
                      <Tag className="mt-4" variant="neutral">
                        Default: {`${defaultValue.value}`}
                      </Tag>
                    ) : null}
                  </ListItem>
                );
              },
            )}
          </ListView>
        </Fragment>
      ))}
    </div>
  );
}
