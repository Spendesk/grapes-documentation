import { Metadata } from "next";
import { GrapesProvider } from "@dev-spendesk/grapes";
import { GlobalHeader } from "@/lib/global-header/global-header";

import "./globals.css";
import { Tracking } from "@/lib/tracking/tracking";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://grapes.spendesk.design"),
  title: {
    template: "%s | Grapes",
    default: "Grapes",
  },
  description: "Spendesk Design System",
  openGraph: {
    // Globally enable openGraph
    siteName: "Grapes",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
          <GlobalHeader />
          {process.env.NODE_ENV === "production" && (
            <Suspense>
              <Tracking />
            </Suspense>
          )}
          {children}
        </GrapesProvider>
      </body>
    </html>
  );
}
