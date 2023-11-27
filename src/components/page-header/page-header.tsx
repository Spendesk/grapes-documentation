type Props = {
  title: string;
};

export function PageHeader({ title }: Props) {
  return (
    <div className="mb-s">
      <h1 className="title-xl leading-10 my-xs">{title}</h1>
    </div>
  );
}
