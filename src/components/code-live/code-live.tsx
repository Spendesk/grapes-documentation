"use client";

import * as GrapesImports from "@dev-spendesk/grapes";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

export function CodeLive() {
  return (
    <LiveProvider code={`<Button text="Coucou" />`} scope={GrapesImports}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
}
