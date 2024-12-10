"use client";

import { FileCard } from "@dev-spendesk/grapes";

type Props = {
  withDelete: boolean;
};

export function DemoFileCard({ withDelete }: Props) {
  return (
    <FileCard
      title="Filename.pdf"
      description="Uploaded on November 4, 2020"
      mimeType="application/pdf"
      onClick={() => {}}
      onDelete={withDelete ? () => {} : undefined}
    />
  );
}
