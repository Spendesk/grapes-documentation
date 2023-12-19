"use client";

const animationTokens = [
  "--transition-duration",
  "--transition-duration-long",
  "--transition-timing-function",
];

export function AnimationTokens() {
  if (typeof window === "undefined") {
    return null;
  }

  const style = window.getComputedStyle(document.documentElement);

  return (
    <div className="flex gap-l box text-center">
      {animationTokens.map((token) => {
        const value = style.getPropertyValue(token);
        return (
          <div key={token}>
            <div className="title-m mt-xs">{token}</div>
            <div className="text-neutral">{value}</div>
          </div>
        );
      })}
    </div>
  );
}
