"use client";

import { useCodeEditor } from "./hooks/useCodeEditor";

import "./CodeEditor.css";

type Props = {
  className: string;
  value: string;
  onChange: (value: string) => void;
};

export function CodeEditor({ className, value, onChange }: Props) {
  const ref = useCodeEditor({ value, onChange });

  return <div className={className} ref={ref} />;
}
