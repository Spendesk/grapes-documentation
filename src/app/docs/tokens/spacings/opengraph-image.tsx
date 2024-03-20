import { ImageResponse } from "next/og";

import OgImage, { fetchFonts } from "@/lib/og-image/ogImage";

export const alt = "Design Tokens: Spacings";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const fonts = await fetchFonts();
  return new ImageResponse(
    <OgImage title="Spacings" subtitle="Design Tokens" />,
    {
      ...size,
      fonts,
    },
  );
}
