import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { NavigationItem, Tag } from "@dev-spendesk/grapes";
import { headerRoutes } from "@/config/routes";

import { Search } from "../search/search";
import { LogoGithub } from "../logo-github/logo-github";

import { version as grapesVersion } from "../../../node_modules/@dev-spendesk/grapes/package.json";

import "./docs-header.css";

export function DocsHeader() {
  return (
    <header className="docs-header">
      <div className="docs-header-wrapper">
        <Link href="/" key="grapes" className="logo-grapes">
          <Image
            height={32}
            width={128}
            src="/logo.svg"
            alt="Grapes homepage"
            className="img-grapes"
          />
        </Link>
        <Tag className="grapes-version" variant="neutral">
          {grapesVersion}
        </Tag>
        <ul className="docs-header-links">
          {headerRoutes.map((headerRoute) => (
            <li key={headerRoute.category}>
              <NavigationItem
                variant="subNavigation"
                component={Link}
                href={headerRoute.url}
                text={headerRoute.category}
                iconName={headerRoute.iconName}
              />
            </li>
          ))}
        </ul>
        <Suspense>
          <Search />
        </Suspense>
        <LogoGithub />
      </div>
    </header>
  );
}
