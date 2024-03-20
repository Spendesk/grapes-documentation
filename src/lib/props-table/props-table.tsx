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

export function PropsTable({ components }: Props) {
  return (
    <div className="mt-s">
      {components.map((component, index) => (
        <Fragment key={index}>
          {components.length > 1 && <h2 id={component}>{component}</h2>}
          <ListView className={classNames(components.length > 0 && "mt-m")}>
            {getSortedProps(component).map(
              ({ name, required, type, defaultValue, description }) => {
                const isAnIconProp =
                  type.raw && type.raw.includes("arrow-bottom");

                return (
                  <ListItem key={name} className={styles.listItem}>
                    <div className="flex items-baseline gap-xs ">
                      {isAnIconProp ? (
                        <Link
                          className={classNames(
                            "text-complementary title-l",
                            required && styles.required,
                          )}
                          href="/docs/components/icon"
                        >
                          {name}
                        </Link>
                      ) : (
                        <span
                          className={classNames(
                            "text-complementary title-l",
                            required && styles.required,
                          )}
                        >
                          {name}
                        </span>
                      )}
                      <InlineBlock code={type.raw ?? type.name} />
                    </div>
                    <p className="text-neutral-dark mt-xs">{description}</p>
                    {defaultValue != null ? (
                      <Tag className="mt-xxs" variant="neutral">
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
