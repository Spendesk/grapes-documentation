import { componentRoutes } from "@/app/routes";
import Link from "next/link";
import React from "react";
import { slug } from "github-slugger";

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
              <div className="docs-card-grid">
                {route.routes
                  .filter(
                    (r) =>
                      ![
                        "DeprecatedModalSlideshow",
                        "DeprecatedPreview",
                        "useDateFormatter",
                      ].includes(r.label),
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
                        <p className="p-16 shrink-0 bg-primary-default">
                          {item.label}
                        </p>
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
