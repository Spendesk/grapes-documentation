import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      [remarkFrontmatter, { type: "yaml", marker: "-" }],
      [remarkMdxFrontmatter, { name: "metadata", parsers: "yaml" }],
    ],
  },
  experimental: {
    mdxRs: true,
  },
});

export default withMDX(nextConfig);
