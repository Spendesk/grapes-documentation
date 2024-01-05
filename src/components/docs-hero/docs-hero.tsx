import { Link, Icon } from "@dev-spendesk/grapes";
import "./docs-hero.css";

type Link = {
  name: string;
  link: string;
};
type DocsHero = {
  name: string;
  description: string;
  links: Link[];
};

const nameToLabel = {
  github: "View source code",
  figma: "View on Figma",
};

export function DocsHero({ name, description, links }: DocsHero) {
  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
      <div className="docs-hero-links">
        {links.map((link) => (
          <Link key={link.name} isExternal href={link.link}>
            {nameToLabel[link.name as "github" | "figma"]}
            <Icon name="external" size="s" />
          </Link>
        ))}
      </div>
    </>
  );
}
