"use client";

import { useCodeEditor } from "./hooks/useCodeEditor";

import "./CodeEditor.css";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function CodeEditor({ value, onChange }: Props) {
  const ref = useCodeEditor({ value, onChange });

  return <div className="h-full" ref={ref} />;
}
