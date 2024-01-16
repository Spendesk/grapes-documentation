/* eslint-disable @next/next/no-img-element */

"use client";

import { IconButton, Preview, UploadButton } from "@dev-spendesk/grapes";
import { useState } from "react";

type Props = {
  withAccept?: boolean;
};

export function DemoUploadButton({ withAccept }: Props) {
  const [selectedFile, setSelectedFile] = useState<File>();

  return (
    <div className="w-[360px]">
      {selectedFile ? (
        <div className="flex items-center gap-xxs">
          <Preview
            fit="parent"
            iconName="receipt-checked"
            variant="success"
            primaryText={selectedFile.name}
          />
          <IconButton
            variant="border"
            iconName="trash"
            color="var(--color-neutral-dark)"
            onClick={() => setSelectedFile(undefined)}
          />
        </div>
      ) : (
        <UploadButton
          accept={withAccept ? "image/*" : undefined}
          onUpload={async (filesToUpload) => {
            await new Promise((resolve) => {
              setTimeout(() => {
                resolve({});
              }, 3000);
            });
            setSelectedFile(filesToUpload?.[0]);
          }}
          text="Add a document"
          variant="ghost"
        />
      )}
    </div>
  );
}
