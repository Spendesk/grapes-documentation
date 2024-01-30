/* eslint-disable @next/next/no-img-element */

"use client";

import { IconButton, DeprecatedPreview, Upload } from "@dev-spendesk/grapes";
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
        <div className="flex items-center gap-xxs">
          <DeprecatedPreview
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
        <Upload
          content={
            <span>
              Drag & drop file(s) here <br />
              or{" "}
              <u className="text-complementary font-medium">
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
