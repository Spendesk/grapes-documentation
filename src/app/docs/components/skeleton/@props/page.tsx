import { PropsTable } from "@/components/props-table/props-table";

export default function Props() {
  return (
    <PropsTable
      components={[
        "Skeleton",
        "SkeletonAvatar",
        "SkeletonButton",
        "SkeletonCheckbox",
        "SkeletonTable",
        "SkeletonTag",
        "SkeletonText",
      ]}
    />
  );
}
