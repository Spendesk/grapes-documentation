import fs from "fs";
import { parse } from "react-docgen-typescript";

// TODO: get all components
const documentation = parse([
  "./node_modules/@dev-spendesk/grapes/src/components/Button/Button.tsx",
  "./node_modules/@dev-spendesk/grapes/src/components/IconButton/IconButton.tsx",
  "./node_modules/@dev-spendesk/grapes/src/components/Link/Link.tsx",
  "./node_modules/@dev-spendesk/grapes/src/components/CollapsibleList/CollapsibleList.tsx",
  "./node_modules/@dev-spendesk/grapes/src/components/CollapsibleList/CollapsibleListItem/CollapsibleListItem.tsx",
]);

fs.writeFile(
  "json/props.json",
  `{"props": ${JSON.stringify(documentation)}}`,
  "utf8",
  () => {}
);
