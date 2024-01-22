import { ImageResponse } from "next/og";

import OgImage, { fetchFonts } from "@/components/og-image/ogImage";

export const alt = "Component: ListBox";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const fonts = await fetchFonts();
  return new ImageResponse(<OgImage title="ListBox" subtitle="Component" />, {
    ...size,
    fonts,
  });
}
