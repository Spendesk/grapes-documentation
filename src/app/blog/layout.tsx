import React, { ReactNode } from "react";

import "./layout.css";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return <main className="blog-content">{children}</main>;
}
