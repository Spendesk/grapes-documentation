"use client";

type Props = {
  tokens: string[];
};

export function TypographyTokens({ tokens }: Props) {
  return (
    <div className="box flex flex-col gap-24 body-m">
      {tokens.map((token) => (
        <TypographyBox key={token} token={token} />
      ))}
    </div>
  );
}

function TypographyBox({ token }: { token: string }) {
  return (
    <div>
      <div className="text-content-primary">--grapes-{token}</div>
      <span className={token}>The quick brown fox jumps over the lazy dog</span>
    </div>
  );
}
