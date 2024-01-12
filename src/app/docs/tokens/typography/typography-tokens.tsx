"use client";

import { Fragment, useEffect, useRef, useState } from "react";

type Props = {
  tokens: string[];
};

export function TypographyTokens({ tokens }: Props) {
  const ref = useRef(null);
  const [fontSize, setFontSize] = useState("");

  useEffect(() => {
    if (ref.current) {
      setFontSize(
        window.getComputedStyle(ref.current).getPropertyValue("font-size"),
      );
    }
  }, []);

  if (typeof window === "undefined") {
    return null;
  }

  const style = window.getComputedStyle(document.documentElement);
  return (
    <div className="box flex flex-col gap-m">
      {tokens.map((token) => (
        <div className="flex items-center" key={token}>
          <div className="w-[80px] shrink-0">
            <div className="font-medium">{token}</div>
            <div className="text-neutral">{fontSize}</div>
          </div>
          <span className={token} ref={ref}>
            The quick brown fox jumps over the lazy dog
          </span>
        </div>
      ))}
    </div>
  );
}
