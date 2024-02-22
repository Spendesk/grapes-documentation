import { MutableRefObject } from "react";

const colorHighlight =
  typeof window !== "undefined" && "Highlight" in window
    ? // @ts-ignore
      new Highlight()
    : null;

export function useHighlight(root: MutableRefObject<HTMLUListElement | null>) {
  if (colorHighlight) {
    // @ts-ignore
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

      textNodes
        .map((node) => {
          const text = node.textContent;

          if (text === null) {
            return [];
          }

          return tokens.map((token) => {
            const lowerCaseSearchPattern = token.toLowerCase();
            const startIndex = text
              .toLowerCase()
              .indexOf(lowerCaseSearchPattern);
            const endIndex = startIndex + lowerCaseSearchPattern.length;

            if (startIndex === -1) {
              return;
            }

            const range = new Range();
            range.setStart(node, startIndex);
            range.setEnd(node, endIndex);

            return range;
          });
        })
        .forEach((ranges) => {
          ranges?.forEach((range) => {
            if (range) {
              colorHighlight.add(range);
            }
          });
        });
    };
  }

  return () => void 0;
}
