import React, { ReactNode, Suspense } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return <Suspense>{children}</Suspense>;
}
