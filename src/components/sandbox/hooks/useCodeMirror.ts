import { useEffect, useRef, useState } from "react";
import { EditorView, basicSetup } from "codemirror";
import { ViewUpdate, keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { javascript } from "@codemirror/lang-javascript";
import { cobalt } from "thememirror";

type OnChange = (value: string, viewUpdate: ViewUpdate) => void;

function onUpdate(onChange: OnChange) {
  return EditorView.updateListener.of((viewUpdate: ViewUpdate) => {
    if (viewUpdate.docChanged) {
      const doc = viewUpdate.state.doc;
      const value = doc.toString();
      onChange(value, viewUpdate);
    }
  });
}

export function useCodeMirror(onChange: (value: string) => void) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [view, setView] = useState<EditorView | undefined>();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const view = new EditorView({
      extensions: [
        basicSetup,
        cobalt,
        keymap.of([indentWithTab]),
        javascript({
          jsx: true,
          typescript: true,
        }),
        onUpdate(onChange),
      ],
      parent: ref.current,
    });

    setView(view);

    return () => {
      view.destroy();
      setView(undefined);
    };
    // FIXME: Adding onChange here causes a bug in the editor, onChange removes the focus
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, view };
}
