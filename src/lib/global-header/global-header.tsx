import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { Tag } from "@dev-spendesk/grapes";
import { headerRoutes } from "@/app/routes";

import { Search } from "../search/search";
import { LogoGithub } from "../logo/logo-github";
import { LogoFigma } from "../logo/logo-figma";

import grapesPackage from "../../../node_modules/@dev-spendesk/grapes/package.json";

import "./global-header.css";

export function GlobalHeader() {
  return (
    <header className="global-header">
      <div className="global-header-wrapper">
        <Link href="/" key="grapes" className="logo-grapes">
          <Image
            height={32}
            width={128}
            src="/logo.svg"
            alt="Grapes homepage"
            className="img-grapes"
          />
        </Link>
        <Link
          className="grapes-version"
          target="_blank"
          href={`https://github.com/Spendesk/grapes/releases/tag/v${grapesPackage.version}`}
        >
          <Tag variant="ocean">{grapesPackage.version}</Tag>
        </Link>
        <ul className="global-header-links">
          {headerRoutes.map((headerRoute) => (
            <li key={headerRoute.category}>
              <Link href={headerRoute.url}>{headerRoute.category}</Link>
            </li>
          ))}
        </ul>
        <Suspense>
          <Search />
        </Suspense>
        <div className="global-header-logos">
          <LogoGithub />
          <LogoFigma />
        </div>
      </div>
    </header>
  );
}
