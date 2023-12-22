import { Link } from "@dev-spendesk/grapes";
import { slug } from "github-slugger";
import type { MDXComponents } from "mdx/types";

import { CodeBlock } from "@/components/code-block/code-block";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ children }) => (
      // @ts-ignore
      <CodeBlock language={children.props.className}>
        {/* @ts-ignore */}
        {children.props.children}
      </CodeBlock>
    ),
    code: ({ children }) => (
      <code className="bg-neutral-lighter text-s p-xxs rounded-xxs">
        {children}
      </code>
    ),
    h1: ({ children }) => (
      <h1 className="title-xl leading-10 my-xs" id={slug(children as string)}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="title-l leading-8 my-xs" id={slug(children as string)}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="title-m leading-8 my-xs" id={slug(children as string)}>
        {children}
      </h3>
    ),
    p: ({ children }) => <p className="my-xs">{children}</p>,
    a: ({ children, href }) => (
      <Link as="a" href={href}>
        {children}
      </Link>
    ),
    strong: ({ children }) => (
      <strong className="font-medium">{children}</strong>
    ),
    ...components,
  };
}
