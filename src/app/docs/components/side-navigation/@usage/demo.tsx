"use client";

import { NavigationItem, SideNavigation } from "@dev-spendesk/grapes";
import { useState } from "react";

const accountingNavigation = [
  {
    label: "Accounting integration",
    key: "accounting-integration",
  },
  {
    label: "Bank accounts",
    key: "bank-accounts",
  },
  {
    label: "Expense accounts",
    key: "expense-accounts",
  },
  {
    label: "VAT Accounts",
    key: "vat-accounts",
  },
  {
    label: "Supplier accounts",
    key: "supplier-accounts",
  },
  {
    label: "Employee accounts",
    key: "employee-accounts",
  },
  {
    label: "Bookkeeping date",
    key: "bookkeeping-date",
  },
];

export function DemoSideNavigation() {
  const [activeKey, setActiveKey] = useState("accounting-integration");
  return (
    <SideNavigation>
      {accountingNavigation.map((book) => (
        <NavigationItem
          key={book.key}
          text={book.label}
          isActive={book.key === activeKey}
          isEmphasized={[
            "accounting-integration",
            "bank-accounts",
            "expense-accounts",
          ].includes(book.key)}
          onClick={() => setActiveKey(book.key)}
        />
      ))}
    </SideNavigation>
  );
}
