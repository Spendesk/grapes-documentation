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
                {route.routes
                  .filter(
                    (r) =>
                      !["DeprecatedPreview", "useDateFormatter"].includes(
                        r.label,
                      ),
                  )
                  .map((item) => {
                    return (
                      <Link href={item.url} key={item.label}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          className="w-full object-cover"
                          src={`/static/images/components/${item.label}.svg`}
                          alt="grapes"
                        />
                        <p className="p-s shrink-0 bg-white">{item.label}</p>
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
