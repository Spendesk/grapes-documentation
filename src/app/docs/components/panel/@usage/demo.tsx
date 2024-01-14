"use client";

import {
  Avatar,
  Button,
  FormField,
  Icon,
  Panel,
  PanelSection,
  Preview,
  TextInput,
} from "@dev-spendesk/grapes";
import { useState } from "react";

export function DemoPanel() {
  const [legalName, setLegalName] = useState("google");
  const [tmpLegalName, setTmpLegalName] = useState("");

  return (
    <Panel
      title="Supplier details"
      onClose={() => {}}
      className="body-m"
      header={
        <div className="flex gap-xs items-center">
          <Avatar src="/supplier.svg" text="supplier" variant="square" />
          <div>
            <div className="title-m text-complementary mb-xxs">Google</div>
            <div className="body-s">401000</div>
          </div>
        </div>
      }
      footer={
        <Button variant="secondary" fit="parent" text="Archive supplier" />
      }
      footerSummary={{
        title: "Summary",
        isCollapsible: true,
        content: (
          <div className="mt-s flex justify-between items-center">
            <div>Total amount</div>
            <div className="title-m text-complementary">500€</div>
          </div>
        ),
      }}
    >
      <PanelSection
        title="Information"
        isEditable
        editSection={
          <FormField label="Legal name">
            <TextInput
              onChange={(event) => setTmpLegalName(event.target.value)}
              value={tmpLegalName}
            />
          </FormField>
        }
        cancelTranslation="Cancel"
        saveTranslation="Save changes"
        onSave={() => {
          setLegalName(tmpLegalName);
        }}
        onCancel={() => {
          console.log("onCancel");
        }}
      >
        <div className="flex items-center justify-between">
          <div>Legal name</div>
          <div className="text-complementary">{legalName}</div>
        </div>
      </PanelSection>
      <PanelSection title="Bank details" isEditable={false} isCollapsible>
        <div className="grid grid-cols-2 gap-m mt-m">
          <div>Bank country</div>
          <div className="text-complementary text-right">France</div>
          <div>IBAN</div>
          <div className="text-complementary text-right">-</div>
          <div>BIC</div>
          <div className="text-complementary text-right">-</div>
        </div>
      </PanelSection>
      <PanelSection title="Proof of bank details" isEditable={false}>
        <Preview
          fit="parent"
          iconName="receipt-checked"
          primaryText="Uploaded on November 4, 2020"
          rightAddon={
            <Icon
              aria-hidden="true"
              color="var(--color-neutral)"
              name="search"
            />
          }
        />
      </PanelSection>
    </Panel>
  );
}
