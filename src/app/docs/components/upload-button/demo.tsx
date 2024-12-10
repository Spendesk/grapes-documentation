/* eslint-disable @next/next/no-img-element */

"use client";

import { FileCard, UploadButton } from "@dev-spendesk/grapes";
import { useState } from "react";

type Props = {
  withAccept?: boolean;
};

export function DemoUploadButton({ withAccept }: Props) {
  const [selectedFile, setSelectedFile] = useState<File>();

  return (
    <div className="w-[360px]">
      {selectedFile ? (
        <FileCard
          title={selectedFile.name}
          mimeType={selectedFile.type}
          onDelete={() => setSelectedFile(undefined)}
        />
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
          variant="tertiaryNeutral"
        />
      )}
    </div>
  );
}
