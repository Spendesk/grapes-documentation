import type { Metadata, Viewport } from "next";
import { GrapesProvider } from "@dev-spendesk/grapes";
import { GlobalHeader } from "@/lib/global-header/global-header";

import "./globals.css";

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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#303232" },
  ],
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
                showOptions: "Show options",
                edit: "Edit",
                clearSelection: "Clear selection",
                selectCurrency: "Select a currency",
                deleteWithName: "Delete",
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
