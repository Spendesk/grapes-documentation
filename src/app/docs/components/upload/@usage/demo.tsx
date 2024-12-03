/* eslint-disable @next/next/no-img-element */

"use client";

import { FileCard, Upload } from "@dev-spendesk/grapes";
import { useState } from "react";

type Props = {
  withIllustration?: boolean;
  withAccept?: boolean;
};

export function DemoUpload({ withIllustration, withAccept }: Props) {
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
        <Upload
          content={
            <span>
              Drag & drop file(s) here <br />
              or{" "}
              <u className="text-content-primary font-medium">
                import them from your computer
              </u>
            </span>
          }
          activeDragContent="Upload file(s)"
          illustration={
            withIllustration ? (
              <img src="/illustration.webp" alt="" />
            ) : undefined
          }
          accept={withAccept ? "image/*" : undefined}
          onUpload={(filesToUpload) => {
            setSelectedFile(filesToUpload?.[0]);
          }}
        />
      )}
    </div>
  );
}
