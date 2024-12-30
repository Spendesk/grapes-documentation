import { Icon, type IconName } from "@dev-spendesk/grapes";
import Link from "next/link";
import React from "react";

type CardProps = {
  icon: IconName;
  href: string;
  children: React.ReactNode;
};
function Card({ icon, href, children }: CardProps) {
  return (
    <Link href={href}>
      <div className="grid place-content-center p-48 text-brand-default">
        <Icon name={icon} size="l" />
      </div>
      <p className="p-16 shrink-0 bg-primary-default">{children}</p>
    </Link>
  );
}

export default function Components() {
  return (
    <>
      <h1>Tokens</h1>
      <h2>Design tokens</h2>
      <div className="docs-card-grid">
        <Card icon="sparkle" href="/docs/tokens/animations">
          Animations
        </Card>
        <Card icon="cube" href="/docs/tokens/border-radius">
          Border Radius
        </Card>
        <Card icon="magic-wand" href="/docs/tokens/colors">
          Colors
        </Card>
        <Card icon="square-stack" href="/docs/tokens/elevation">
          Elevation
        </Card>
        <Card icon="adjustments-horizontal" href="/docs/tokens/units">
          Units
        </Card>
        <Card icon="pen" href="/docs/tokens/typography">
          Typography
        </Card>
      </div>
      <h2>TailwindCSS utils</h2>
      <div className="docs-card-grid">
        <Card icon="square-4" href="/docs/tokens/box">
          Box
        </Card>
        <Card icon="minus" href="/docs/tokens/separator">
          Separator
        </Card>
      </div>
    </>
  );
}
