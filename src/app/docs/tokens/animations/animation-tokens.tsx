"use client";

import { useEffect, useRef, useState } from "react";

const animationDurations = [
  "--transition-duration",
  "--transition-duration-long",
];

const animationTimingFunction = "--transition-timing-function";

export function AnimationTokens() {
  return (
    <div className="flex gap-l box text-center">
      {animationDurations.map((token) => (
        <AnimationBox key={token} token={token} property="animation-duration" />
      ))}
      <AnimationBox
        token={animationTimingFunction}
        property="animation-timing-function"
      />
    </div>
  );
}

function AnimationBox({
  token,
  property,
}: {
  token: string;
  property: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [animationToken, setAnimationToken] = useState("");

  useEffect(() => {
    if (ref.current) {
      setAnimationToken(
        window.getComputedStyle(ref.current).getPropertyValue(property),
      );
    }
  }, [property]);

  return (
    <div
      ref={ref}
      style={{
        animationDuration: `var(${token})`,
        animationTimingFunction: `var(${token})`,
      }}
    >
      <div className="title-m mt-xs">{token}</div>
      <div className="text-neutral">{animationToken}</div>
    </div>
  );
}
