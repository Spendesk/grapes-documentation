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

export const examples = [
  {
    key: "0",
    label: "Tooltip",
    code: `const Demo = () => {
  return (
    <Tooltip content="This is a tooltip" triggerAsChild>
      <Button
        variant="primary"
        text="Click me!"
        isDisabled
      />
    </Tooltip>
  );
}

render(<Demo />);`,
  },
  {
    key: "1",
    label: "IconButton",
    code: `const Demo = () => {
  return (
    <IconButton
      variant="border"
      iconName="ellipsis"
    />
  );
}

render(<Demo />);`,
  },
];
