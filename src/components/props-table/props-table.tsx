import { ListView, ListItem, Tag } from "@dev-spendesk/grapes";
import { classNames } from "@/utils/classNames";

import { getSortedProps } from "./utils";
import { InlineBlock } from "./inline-code";

import styles from "./props-table.module.css";
import { Fragment } from "react";

type Props = {
  components: string[];
};

export function PropsTable({ components }: Props) {
  return (
    <div className="mt-s">
      {components.map((component, index) => (
        <Fragment key={index}>
          {components.length > 1 && <h2 id={component}>{component}</h2>}
          <ListView
            className={classNames(
              styles.table,
              components.length > 0 && "mt-m",
            )}
          >
            {getSortedProps(component).map(
              ({ name, required, type, defaultValue, description }) => {
                return (
                  <ListItem key={name} className="py-s">
                    <div className="flex items-baseline gap-xs body-m">
                      <span
                        className={classNames(
                          "text-complementary title-l",
                          required && styles.required,
                        )}
                      >
                        {name}
                      </span>
                      <InlineBlock code={type.raw ?? type.name} />
                    </div>
                    <p className="text-neutral-dark body-m mt-xs">
                      {description}
                    </p>
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
