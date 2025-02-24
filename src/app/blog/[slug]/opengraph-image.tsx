import { ImageResponse } from "next/og";

import OgImage, { fetchFonts } from "@/lib/og-image/ogImage";
import { getBlogPosts } from "../utils";

export const alt = "Blog";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const revalidate = false;

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};
export default async function Image({ params }: Props) {
  const slug = (await params).slug;

  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    throw new Error("Unable to find post");
  }

  const fonts = await fetchFonts();
  return new ImageResponse(<OgImage title={post.metadata.title} />, {
    ...size,
    fonts,
  });
}
