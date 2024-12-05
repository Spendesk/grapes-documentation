import { ImageResponse } from "next/og";

import OgImage, { fetchFonts } from "@/lib/og-image/ogImage";

export const alt = "Grapes: Spendesk Design System";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const revalidate = false;

export default async function Image() {
  const fonts = await fetchFonts();
  return new ImageResponse(
    <OgImage title="Sandbox" subtitle="Spendesk Design System" />,
    {
      ...size,
      fonts,
    },
  );
}
