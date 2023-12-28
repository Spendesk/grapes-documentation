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
    h1: ({ children }) => <h1 id={slug(children as string)}>{children}</h1>,
    h2: ({ children }) => <h2 id={slug(children as string)}>{children}</h2>,
    h3: ({ children }) => <h3 id={slug(children as string)}>{children}</h3>,
    p: ({ children }) => <p>{children}</p>,
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
