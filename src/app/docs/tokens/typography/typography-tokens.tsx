"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  tokens: string[];
};

export function TypographyTokens({ tokens }: Props) {
  return (
    <div className="box flex flex-col gap-m body-m">
      {tokens.map((token) => (
        <TypographyBox key={token} token={token} />
      ))}
    </div>
  );
}

function TypographyBox({ token }: { token: string }) {
  const ref = useRef(null);
  const [fontSize, setFontSize] = useState("");

  useEffect(() => {
    if (ref.current) {
      setFontSize(
        window.getComputedStyle(ref.current).getPropertyValue("font-size"),
      );
    }
  }, []);

  return (
    <div className="flex items-center">
      <div className="w-[80px] shrink-0">
        <div className="font-medium">{token}</div>
        <div className="text-neutral">{fontSize}</div>
      </div>
      <span className={token} ref={ref}>
        The quick brown fox jumps over the lazy dog
      </span>
    </div>
  );
}
