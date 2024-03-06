"use client";

import { useSearchParams } from "next/navigation";
import lzString from "lz-string";

import { CodeLive } from "../../components/sandbox/CodeLive";
import { Suspense } from "react";

function Container() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const decompressedCode = code
    ? lzString.decompressFromEncodedURIComponent(code)
    : undefined;

  return <CodeLive decompressedCode={decompressedCode} />;
}

export default function Sandbox() {
  return (
    <Suspense>
      <Container />
    </Suspense>
  );
}
