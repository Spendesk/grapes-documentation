import type { RefObject } from "react";

const colorHighlight =
  typeof window !== "undefined" && "Highlight" in window
    ? new Highlight()
    : null;

export function useHighlight(root: RefObject<HTMLUListElement | null>) {
  if (colorHighlight) {
    CSS.highlights.set("primary", colorHighlight);

    return (tokens: string[]) => {
      if (root.current === null) {
        return;
      }
      colorHighlight.clear();

      const textNodes = [];
      const treeWalker = document.createTreeWalker(
        root.current,
        NodeFilter.SHOW_TEXT,
      );
      while (treeWalker.nextNode()) {
        textNodes.push(treeWalker.currentNode);
      }

      textNodes.forEach((node) => {
        const text = node.textContent;

        if (text === null) {
          return;
        }

        return tokens.forEach((token) => {
          const lowerCaseSearchPattern = token.toLowerCase();
          const startIndex = text.toLowerCase().indexOf(lowerCaseSearchPattern);
          const endIndex = startIndex + lowerCaseSearchPattern.length;

          if (startIndex === -1) {
            return;
          }

          const range = new Range();
          range.setStart(node, startIndex);
          range.setEnd(node, endIndex);
          colorHighlight.add(range);
        });
      });
    };
  }

  return () => void 0;
}
