"use client";

import { useSearchParams } from "next/navigation";
import lzString from "lz-string";

import { CodeLive } from "@/lib/sandbox/CodeLive";

export function Container() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const decompressedCode = code
    ? lzString.decompressFromEncodedURIComponent(code)
    : undefined;

  return <CodeLive decompressedCode={decompressedCode} />;
}
