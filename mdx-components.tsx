import { Callout, Link as GrapesLink, Icon } from "@dev-spendesk/grapes";
import Link from "next/link";
import { slug } from "github-slugger";

import type { MDXComponents } from "mdx/types";

import { CodeBlock } from "@/components/code-block/code-block";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ children }) => {
      return (
        // @ts-ignore
        <CodeBlock language={children.props.className}>
          {/* @ts-ignore */}
          {children.props.children}
        </CodeBlock>
      );
    },
    blockquote: ({ children }) => {
      return <Callout title={children} />;
    },
    code: ({ children }) => (
      <code className="bg-neutral-lighter text-s p-xxs rounded-xxs">
        {children}
      </code>
    ),
    h1: ({ children }) => <h1 id={slug(children as string)}>{children}</h1>,
    h2: ({ children }) => (
      <h2 id={slug(children as string)}>
        <Link href={`#${slug(children as string)}`}>{children}</Link>
      </h2>
    ),
    h3: ({ children }) => (
      <h3 id={slug(children as string)}>
        <Link href={`#${slug(children as string)}`}>{children}</Link>
      </h3>
    ),
    p: ({ children }) => <p>{children}</p>,
    a: ({ children, href }) =>
      href?.startsWith("http") ? (
        <GrapesLink
          as="a"
          href={href}
          isExternal
          className="inline-flex gap-xxs items-center"
        >
          {children}
          <Icon name="external" size="s" />
        </GrapesLink>
      ) : (
        <Link href={href ?? "#"}>{children}</Link>
      ),
    strong: ({ children }) => (
      <strong className="font-medium">{children}</strong>
    ),
    ...components,
  };
}
