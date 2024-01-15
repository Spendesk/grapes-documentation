import { Metadata } from "next";
import { GrapesProvider } from "@dev-spendesk/grapes";
import { GlobalHeader } from "@/components/global-header/global-header";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://grapes.spendesk.design"),
  title: {
    template: "%s",
    default: "Grapes",
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
          {children}
        </GrapesProvider>
      </body>
    </html>
  );
}
