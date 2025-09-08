"use client";

import {
  Avatar,
  Button,
  FormField,
  Panel,
  PanelSection,
  TextInput,
  FileCard,
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
        <div className="flex gap-8 items-center">
          <Avatar
            iconName="building-storefront"
            text="supplier"
            variant="square"
          />
          <div>
            <div className="title-m text-content-primary mb-4">Google</div>
            <div className="body-s">401000</div>
          </div>
        </div>
      }
      footer={
        <Button
          variant="secondaryNeutral"
          fit="parent"
          text="Archive supplier"
        />
      }
      footerSummary={{
        title: "Summary",
        isCollapsible: true,
        content: (
          <div className="mt-16 flex justify-between items-center">
            <div>Total amount</div>
            <div className="title-m text-content-primary">500€</div>
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
          <div className="text-content-primary">{legalName}</div>
        </div>
      </PanelSection>
      <PanelSection title="Bank details" isEditable={false} isCollapsible>
        <div className="grid grid-cols-2 gap-24 mt-24">
          <div>Bank country</div>
          <div className="text-content-primary text-right">France</div>
          <div>IBAN</div>
          <div className="text-content-primary text-right">-</div>
          <div>BIC</div>
          <div className="text-content-primary text-right">-</div>
        </div>
      </PanelSection>
      <PanelSection title="Proof of bank details" isEditable={false}>
        <FileCard
          title="Filename.pdf"
          description="Uploaded on November 4, 2020"
          mimeType="application/pdf"
          onClick={() => {}}
        />
      </PanelSection>
    </Panel>
  );
}
