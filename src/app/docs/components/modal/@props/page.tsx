import { PropsTable } from "@/components/props-table/props-table";

export default function Props() {
  return (
    <PropsTable
      components={[
        "ModalOverlay",
        "ModalContent",
        "ModalHeaderWithIcon",
        "ModalHeaderWithIllustration",
        "ModalBody",
        "ModalFooter",
      ]}
    />
  );
}
