"use client";

import {
  Avatar,
  Button,
  ListBox,
  type ListBoxProps,
} from "@dev-spendesk/grapes";
import { useState } from "react";

type Option = {
  avatar: string;
  birthDate: string;
  description: string;
  id: string;
  name: string;
};

const options: Option[] = [
  {
    avatar: "/aurelien.webp",
    birthDate: "1979-09-19",
    description: "Growth team",
    id: "michael",
    name: "Michael Murphy",
  },
  {
    avatar: "/bertrand.webp",
    birthDate: "1980-03-01",
    description: "Design team",
    id: "nayden",
    name: "Nayden Lennart",
  },
  {
    avatar: "/mahedine.webp",
    birthDate: "1980-06-05",
    description: "Growth team",
    id: "nicolas",
    name: "Nicolas Harvey",
  },
  {
    avatar: "/jean.webp",
    birthDate: "1980-07-30",
    description: "Design team",
    id: "lewis",
    name: "Lewis Barker",
  },
  {
    avatar: "/laurent.webp",
    birthDate: "1980-07-31",
    description: "Design team",
    id: "george",
    name: "George Gray",
  },
  {
    avatar: "/chloe.webp",
    birthDate: "1981-02-13",
    description: "Marketing team",
    id: "laura",
    name: "Laura Lagarde",
  },
];

type Props = {
  isListEmpty?: boolean;
  isCompact?: boolean;
  isSelectable?: boolean;
  withHeader?: boolean;
  withFooter?: boolean;
  withGroups?: boolean;
  withRowVariant?: boolean;
  withDisabledRows?: boolean;
};

export function DemoListBox({
  isListEmpty,
  isCompact,
  isSelectable,
  withHeader,
  withFooter,
  withGroups,
  withRowVariant,
  withDisabledRows,
}: Props) {
  const [activeOption, setActiveOption] = useState<string | undefined>();
  const [optionsSelected, setOptionSelected] = useState<string[]>([]);

  const optionalProps: Pick<
    ListBoxProps<Option>,
    | "rowHeight"
    | "header"
    | "footer"
    | "getOptionVariant"
    | "groupBy"
    | "renderGroupedOptionsHeader"
    | "getIsOptionDisabled"
    | "onOptionChange"
    | "onAllOptionsChange"
    | "checkedOptionIds"
  > = {
    ...(isCompact && { rowHeight: "compact" }),
    ...(withHeader && { header: <div>Members</div> }),
    ...(withFooter && {
      footer: (
        <div className="my-8 mx-auto">
          <Button fit="content" text="Load more" variant="secondaryNeutral" />
        </div>
      ),
    }),
    ...(withRowVariant === true && {
      getOptionVariant: (option) => {
        switch (option.id) {
          case "george":
            return "alert";
          case "lewis":
            return "warning";
          default:
            return undefined;
        }
      },
    }),
    ...(withGroups && {
      groupBy: (option) => {
        const date = new Date(option.birthDate);
        return `${date.getFullYear()}`;
      },
      renderGroupedOptionsHeader: (value, aggregatedOptions) => {
        const aggregatedCount = aggregatedOptions.length;
        return (
          <div className="flex justify-between">
            <span>{value}</span>
            <span>
              {aggregatedCount} {aggregatedCount > 1 ? "members" : "member"}
            </span>
          </div>
        );
      },
    }),
    ...(withDisabledRows && {
      getIsOptionDisabled: (option) => option.id === "laura",
    }),
    ...(isSelectable && {
      onOptionChange: (_, id, checked) => {
        setOptionSelected((options) => {
          if (checked) {
            return options.concat(id);
          }
          return options.filter((optionId) => optionId !== id);
        });
      },
      onAllOptionsChange: (_, ids, checked) => {
        setOptionSelected(checked ? ids : []);
      },
      checkedOptionIds: optionsSelected,
    }),
  };

  return (
    // @ts-expect-error Demo is too generic for TS
    <ListBox
      getOptionId={(option) => option.id}
      options={!isListEmpty ? options : []}
      emptyState={{
        title: "No employee found",
        subtitle: "Add employees to get started",
      }}
      getIsOptionActive={(option) => option.id === activeOption}
      onOptionClick={(option) => {
        setActiveOption(option.id);
      }}
      aria-label="Employees"
      {...optionalProps}
    >
      {(option, titleId) => (
        <div className="flex gap-16 items-center">
          <Avatar variant="circle" src={option.avatar} text={option.name} />
          <div className="flex-grow">
            <div className="title-m" id={titleId}>
              {option.name}
            </div>
            {!isCompact && (
              <div className="body-m text-secondary-bg-primary mt-4">
                {option.description}
              </div>
            )}
          </div>
          <span>{option.birthDate}</span>
        </div>
      )}
    </ListBox>
  );
}
