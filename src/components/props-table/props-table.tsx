import { PropsTableMultiple } from "./props-table-multiple";
import { PropsTableSingle } from "./props-table-single";

type Props = {
  props: string | string[];
};

export function PropsTable({ props }: Props) {
  return (
    <div className="mt-s">
      {typeof props === "string" ? (
        <PropsTableSingle name={props} />
      ) : (
        <PropsTableMultiple names={props} />
      )}
    </div>
  );
}
