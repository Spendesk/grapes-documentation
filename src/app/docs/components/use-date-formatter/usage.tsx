"use client";

import { DATE_FORMAT, Table, dateFormatter } from "@dev-spendesk/grapes";

import styles from "./usage.module.css";

const option: Intl.DateTimeFormatOptions = {
  month: "2-digit",
  day: "2-digit",
};

const locales = ["en-US", "en-UK", "fr-FR", "it-IT", "de-DE", "es-ES"];

export function DateFormatterUsage() {
  return (
    <Table
      className={styles.table}
      columns={[
        {
          header: "",
          id: "locale",
          renderCell: ({ locale }) => locale,
        },
        {
          header: "SHORT",
          id: "short",
          renderCell: ({ short }) => short,
        },
        {
          header: "MEDIUM",
          id: "medium",
          renderCell: ({ medium }) => medium,
        },
        {
          header: "LONG_WITH_TIME",
          id: "longWithTime",
          renderCell: ({ longWithTime }) => longWithTime,
        },
        {
          header: "CUSTOM",
          id: "custom",
          renderCell: ({ custom }) => custom,
        },
      ]}
      data={locales.map((locale) => ({
        locale,
        short: dateFormatter(locale, new Date(), DATE_FORMAT.SHORT),
        medium: dateFormatter(locale, new Date(), DATE_FORMAT.MEDIUM),
        longWithTime: dateFormatter(
          locale,
          new Date(),
          DATE_FORMAT.LONG_WITH_TIME,
        ),
        custom: dateFormatter(locale, new Date(), DATE_FORMAT.CUSTOM, option),
      }))}
    />
  );
}
