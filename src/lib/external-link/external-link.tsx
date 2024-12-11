import { Icon, Link } from "@dev-spendesk/grapes";

type Props = {
  children: React.ReactNode;
  href: string;
};

export function ExternalLink({ children, href }: Props) {
  return (
    <Link href={href} isExternal className="inline-flex gap-4 items-center">
      {children}
      <Icon name="external" size="s" aria-hidden="true" />
    </Link>
  );
}
