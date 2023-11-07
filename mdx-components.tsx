import { CodeBlock } from "@/components/code-block/code-block";
import { slug } from "github-slugger";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // @ts-ignore
    pre: ({ children }) => <CodeBlock>{children.props.children}</CodeBlock>,
    h1: ({ children }) => (
      <h1
        className="title-xl leading-10"
        data-heading={slug(children as string)}
        id={slug(children as string)}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className="title-l leading-8"
        data-heading={slug(children as string)}
        id={slug(children as string)}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="title-m leading-8"
        data-heading={slug(children as string)}
        id={slug(children as string)}
      >
        {children}
      </h3>
    ),
    ...components,
  };
}
