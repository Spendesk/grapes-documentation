"use client";

import { CheckboxBox } from "@dev-spendesk/grapes";
import { useState } from "react";

export function Demo() {
  const [isAdministrator, setAdministrator] = useState<boolean>(false);

  return (
    <CheckboxBox
      label="Administrator"
      description="An admin can set up the account: invite new members, edit approval policies and team composition"
      isChecked={isAdministrator}
      onChange={(e) => setAdministrator(e.target.checked)}
    />
  );
}

export function DemoWithoutDescription() {
  const [isAdministrator, setAdministrator] = useState<boolean>(false);

  return (
    <CheckboxBox
      label="Administrator"
      isChecked={isAdministrator}
      onChange={(e) => setAdministrator(e.target.checked)}
    />
  );
}

export function DemoIndeterminate() {
  return (
    <CheckboxBox
      label="Administrator"
      isIndeterminate={true}
      isChecked={true}
      onChange={() => void 0}
    />
  );
}
