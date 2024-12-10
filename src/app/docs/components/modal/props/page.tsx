import { PropsTable } from "@/lib/props-table/props-table";

export default function Props() {
  return (
    <PropsTable
      components={[
        "Modal",
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
