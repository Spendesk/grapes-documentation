import { useEffect } from "react";
import { useCodeMirror } from "./useCodeMirror";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function useCodeEditor({ value, onChange }: Props) {
  const { ref, view } = useCodeMirror(onChange);

  useEffect(() => {
    if (view) {
      const editorValue = view.state.doc.toString();

      if (value !== editorValue) {
        view.dispatch({
          changes: {
            from: 0,
            to: editorValue.length,
            insert: value || "",
          },
        });
      }
    }
  }, [value, view]);

  return ref;
}
