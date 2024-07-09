import { Callout, Link as GrapesLink, Icon } from "@dev-spendesk/grapes";
import Link from "next/link";
import { slug } from "github-slugger";

import type { MDXComponents } from "mdx/types";

import { CodeBlock } from "@/lib/code-block/code-block";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ children }) => {
      return (
        <CodeBlock
          // @ts-ignore
          language={children.props.className}
          // @ts-ignore
          displaySandboxButton={children.props.sandbox}
        >
          {/* @ts-ignore */}
          {children.props.children}
        </CodeBlock>
      );
    },
    blockquote: ({ children }) => {
      return <Callout title={children} />;
    },
    h1: ({ children }) => <h1 id={slug(children as string)}>{children}</h1>,
    h2: ({ children }) => (
      <h2 id={slug(children as string)}>
        <a href={`#${slug(children as string)}`}>{children}</a>
      </h2>
    ),
    h3: ({ children }) => (
      <h3 id={slug(children as string)}>
        <a href={`#${slug(children as string)}`}>{children}</a>
      </h3>
    ),
    p: ({ children }) => <p>{children}</p>,
    a: ({ children, href }) =>
      href?.startsWith("http") ? (
        <GrapesLink
          href={href}
          isExternal
          className="inline-flex gap-xxs items-center"
        >
          {children}
          <Icon name="external" size="s" aria-hidden="true" />
        </GrapesLink>
      ) : (
        <Link href={href ?? "#"}>{children}</Link>
      ),
    strong: ({ children }) => (
      <strong className="font-medium">{children}</strong>
    ),
    callout: ({ children, title, variant }) => {
      return (
        <Callout title={title} variant={variant}>
          {children}
        </Callout>
      );
    },
    ...components,
  };
}
