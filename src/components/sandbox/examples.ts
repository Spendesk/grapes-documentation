export const initialCode = `const Demo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="primary"
        text="Click me!"
        onClick={() => setIsOpen(true)}
      />
      <Modal
        isOpen={isOpen}
        title="It's a modal"
        iconName="sparkles"
        actions={[
          <Button
            key="certified"
            variant="primary"
            text="Thank you :)"
            onClick={() => setIsOpen(false)}
          />,
        ]}
      />
    </>
  );
};

render(<Demo />);
`;

export const examples: { key: string; label: string; code: string }[] = [
  {
    key: "0",
    label: "Panel with form",
    code: `const InformationForm = ({ information, setInformation }) => {
  return (
    <>
      <FormField
        label="Legal name"
        style={{ marginBottom: "var(--spacing-s)" }}
      >
        <TextInput
          value={information.legalName}
          onChange={(event) => {
            setInformation({ ...information, legalName: event.target.value });
          }}
        />
      </FormField>
      <FormField label="VAT number">
        <TextInput
          value={information.vatNumber}
          onChange={(event) => {
            setInformation({ ...information, vatNumber: event.target.value });
          }}
        />
      </FormField>
    </>
  );
};

const BankDetailsForm = ({ bankDetails, setBankDetails }) => {
  return (
    <>
      <FormField label="IBAN" style={{ marginBottom: "var(--spacing-s)" }}>
        <TextInput
          value={bankDetails.iban}
          onChange={(event) => {
            setBankDetails({ ...bankDetails, iban: event.target.value });
          }}
        />
      </FormField>
      <FormField label="BIC/Swift code">
        <TextInput
          value={bankDetails.bic}
          onChange={(event) => {
            setBankDetails({ ...bankDetails, bic: event.target.value });
          }}
        />
      </FormField>
    </>
  );
};

const Demo = () => {
  const [information, setInformation] = useState({
    legalName: undefined,
    vatNumber: undefined,
  });
  const [bankDetails, setBankDetails] = useState({
    iban: undefined,
    bic: undefined,
  });

  return (
    <Panel
      title="Supplier details"
      onClose={() => console.log("Close")}
      header={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacing-xs)",
          }}
        >
          <Avatar src="https://logo.clearbit.com/google.com" text="Google" />
          Google
        </div>
      }
      footer={
        <Button
          fit="parent"
          variant="secondary"
          iconName="archive"
          text="Archive supplier"
          onClick={() => console.log("Archive supplier")}
        />
      }
    >
      <PanelSection
        title="Information"
        isEditable
        saveTranslation="Save"
        cancelTranslation="Cancel"
        onSave={() => console.log("Save")}
        onCancel={() => console.log("Cancel")}
        editSection={
          <InformationForm
            information={information}
            setInformation={setInformation}
          />
        }
      >
        <ul style={{ listStyle: "none" }}>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "var(--spacing-s)",
            }}
          >
            <span style={{ color: "var(--color-neutral-dark)" }}>
              Legal name
            </span>
            <span>{information.legalName ?? "-"}</span>
          </li>
          <li style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "var(--color-neutral-dark)" }}>
              VAT number
            </span>
            <span>{information.vatNumber ?? "-"}</span>
          </li>
        </ul>
      </PanelSection>
      <PanelSection
        title="Bank details"
        isEditable
        saveTranslation="Save"
        cancelTranslation="Cancel"
        onSave={() => console.log("Save")}
        onCancel={() => console.log("Cancel")}
        editSection={
          <BankDetailsForm
            bankDetails={bankDetails}
            setBankDetails={setBankDetails}
          />
        }
      >
        <ul style={{ listStyle: "none" }}>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "var(--spacing-s)",
            }}
          >
            <span style={{ color: "var(--color-neutral-dark)" }}>IBAN</span>
            <span>{bankDetails.iban ?? "-"}</span>
          </li>
          <li style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "var(--color-neutral-dark)" }}>
              BIC/Swift code
            </span>
            <span>{bankDetails.bic ?? "-"}</span>
          </li>
        </ul>
      </PanelSection>
    </Panel>
  );
};

render(<Demo />);
    `,
  },
  {
    key: "1",
    label: "Table",
    code: `type DataRow = {
  id: number;
  accountPayable: string;
  supplierName: string;
  amount: string;
};

const data: DataRow[] = [
  {
    id: 0,
    accountPayable: "401AIRBNB",
    supplierName: "Airbnb",
    amount: "2€",
  },
  {
    id: 1,
    accountPayable: "401DELOITTE",
    supplierName: "Deloitte",
    amount: "324$",
  },
  {
    id: 2,
    accountPayable: "401MAILCHIMP",
    supplierName: "Mailchimp",
    amount: "13.29€",
  },
  {
    id: 3,
    accountPayable: "401APPLE",
    supplierName: "Apple",
    amount: "0€",
  },
];

const columns: TableColumn<DataRow>[] = [
  {
    id: "accountPayable",
    header: "Account payable",
    renderCell: ({ accountPayable }) => accountPayable,
    getSortValue: (item) => item.accountPayable,
  },
  {
    id: "supplierName",
    header: "Supplier name",
    renderCell: ({ supplierName }) => supplierName,
  },
  {
    id: "amount",
    header: "Amount",
    align: "right",
    width: "20%",
    renderCell(row) {
      return <span className="font-medium">{row.amount}</span>;
    },
    getSortValue: (item) => parseInt(item.amount),
  },
];

const Demo = () => {
  const [activeRow, setActiveRow] = useState<number>();
  const [selectedRowIds, setSelectedRowsIds] = useState<string[]>([]);

  return (
    <Table
      data={data}
      columns={columns}
      selectedRowIds={selectedRowIds}
      onRowSelectionChange={(_, id, checked) => {
        setSelectedRowsIds((options) => {
          if (checked) {
            return options.concat(id);
          }
          return options.filter((optionId) => optionId !== id);
        });
      }}
      onAllRowsSelectionChange={(_, ids, checked) => {
        setSelectedRowsIds(checked ? ids : []);
      }}
      getRowId={(row: DataRow) => String(row.id)}
      onRowClick={(row) => setActiveRow(row.id)}
      getIsRowActive={(row) => row.id === activeRow}
    />
  );
};

render(<Demo />);
`,
  },
];
