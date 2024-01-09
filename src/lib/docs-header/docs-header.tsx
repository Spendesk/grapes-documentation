import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Search } from "../search/search";
import { LogoGithub } from "../logo-github/logo-github";

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
        <Search />
        <LogoGithub />
      </div>
    </header>
  );
}
