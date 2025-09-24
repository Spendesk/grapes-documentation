import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";
import { h } from "hastscript";

function myRemarkPlugin() {
  /**
   * @param {import('mdast').Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return function (tree) {
    visit(tree, function (node) {
      if (node.type === "containerDirective") {
        const data = node.data || (node.data = {});

        const hast = h(node.name, node.attributes);

        data.hName = "callout";
        data.hProperties = { variant: hast.tagName, ...hast.properties };
      }
    });
  };
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "tsx"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkDirective,
      myRemarkPlugin,
      [remarkFrontmatter, { type: "yaml", marker: "-" }],
      [remarkMdxFrontmatter, { name: "metadata", parsers: "yaml" }],
    ],
  },
});

export default withMDX(nextConfig);
