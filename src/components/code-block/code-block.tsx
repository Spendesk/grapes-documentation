type Props = {
  children: React.ReactNode;
};

export function CodeBlock({ children }: Props) {
  return (
    <pre className="bg-complementary text-white p-m rounded-xs">{children}</pre>
  );
}
