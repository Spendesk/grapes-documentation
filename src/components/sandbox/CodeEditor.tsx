"use client";

import { useCodeEditor } from "./hooks/useCodeEditor";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function CodeEditor({ value, onChange }: Props) {
  const ref = useCodeEditor({ value, onChange });

  return <div ref={ref} />;
}
