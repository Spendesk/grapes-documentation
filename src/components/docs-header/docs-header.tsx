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
          <img src="/logo.svg" alt="Grapes homepage" className="img-grapes" />
        </Link>
        <Search key="search" />
        <LogoGithub />
      </div>
    </header>
  );
}
