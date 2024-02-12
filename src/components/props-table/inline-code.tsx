import { codeToHtml, addClassToHast } from "shiki";

type Props = {
  code: string;
};

export async function InlineBlock({ code }: Props) {
  const html = await codeToHtml(code, {
    lang: "ts",
    theme: "slack-ochin",
    transformers: [
      {
        pre(node) {
          addClassToHast(node, "whitespace-pre-line");
        },
      },
    ],
  });

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
