"use client";

import { Toast } from "@dev-spendesk/grapes";

export function DemoToast() {
  return (
    <div className="box">
      <Toast
        title="Your receipt has been uploaded"
        canExpire
        variant="success"
        onClose={() => console.log("onClose")}
      />
    </div>
  );
}
