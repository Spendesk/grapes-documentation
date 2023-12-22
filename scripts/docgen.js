import fs from "fs";
import { parse } from "react-docgen-typescript";

// TODO: get all components
const documentation = parse([
  "./node_modules/@dev-spendesk/grapes/src/components/Button/Button.tsx",
  "./node_modules/@dev-spendesk/grapes/src/components/CollapsibleList/CollapsibleList.tsx",
  "./node_modules/@dev-spendesk/grapes/src/components/CollapsibleList/CollapsibleListItem/CollapsibleListItem.tsx",
  "./node_modules/@dev-spendesk/grapes/src/components/IconButton/IconButton.tsx",
  "./node_modules/@dev-spendesk/grapes/src/components/Link/Link.tsx",
  "./node_modules/@dev-spendesk/grapes/src/components/Modal/Modal.tsx",
  "./node_modules/@dev-spendesk/grapes/src/components/Modal/ModalOverlay.tsx",
  "./node_modules/@dev-spendesk/grapes/src/components/Modal/ModalContent.tsx",
  "./node_modules/@dev-spendesk/grapes/src/components/Modal/ModalHeaderWithIcon.tsx",
  "./node_modules/@dev-spendesk/grapes/src/components/Modal/ModalHeaderWithIllustration.tsx",
  "./node_modules/@dev-spendesk/grapes/src/components/Modal/ModalBody.tsx",
  "./node_modules/@dev-spendesk/grapes/src/components/Modal/ModalFooter.tsx",
  "./node_modules/@dev-spendesk/grapes/src/components/Tag/Tag.tsx",
  "./node_modules/@dev-spendesk/grapes/src/components/Toast/Toast.tsx",
  "./node_modules/@dev-spendesk/grapes/src/components/Tooltip/Tooltip.tsx",
]);

fs.writeFile(
  "json/props.json",
  `{"props": ${JSON.stringify(documentation)}}`,
  "utf8",
  () => {}
);
