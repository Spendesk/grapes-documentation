"use client";

import { GrapesProvider } from "@dev-spendesk/grapes";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-page-background">
        <GrapesProvider
          locale="en-US"
          localesDefinition={{
            locales: {
              "en-US": {
                cancel: "Cancel",
                close: "Close",
                nextMonth: "Next month",
                previousMonth: "Previous month",
                openCalendar: "Open calendar",
                hide: "Hide",
                show: "Show",
              },
            },
          }}
        >
          {children}
        </GrapesProvider>
      </body>
    </html>
  );
}
