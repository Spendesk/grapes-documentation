import type { Metadata } from "next";

import { Suspense } from "react";
import { Container } from "./container";

export const metadata: Metadata = {
  title: "Sandbox",
};

export default function Sandbox() {
  return (
    <Suspense>
      <Container />
    </Suspense>
  );
}
