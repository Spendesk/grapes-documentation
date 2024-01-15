import { componentRoutes } from "@/config/routes";
import Link from "next/link";
import React from "react";
import { slug } from "github-slugger";

import "./page.css";

export default function Components() {
  return (
    <>
      <h1>Components</h1>
      {componentRoutes
        .filter((route) => route.category !== "Getting Started")
        .map((route) => {
          return (
            <React.Fragment key={route.category}>
              <h2 id={slug(route.category)}>{route.category}</h2>
              <div className="docs-component-grid">
                {route.routes.map((item) => {
                  return (
                    <Link href={item.url} key={item.label}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="w-full h-full object-cover"
                        src="/bg.avif"
                        alt="grapes"
                      />
                      <p className="m-s">{item.label}</p>
                    </Link>
                  );
                })}
              </div>
            </React.Fragment>
          );
        })}
    </>
  );
}
