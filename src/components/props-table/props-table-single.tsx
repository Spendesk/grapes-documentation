"use client";

import { PropsTableComponent } from "./props-table-component";
import { sortProps } from "./utils";

import allProps from "../../../json/props.json";

type Props = {
  name: string;
};

export function PropsTableSingle({ name }: Props) {
  const component = allProps.props.find((d) => d.displayName === name);
  if (!component) {
    return null;
  }
  const props = sortProps(Object.values(component.props));

  return <PropsTableComponent props={props} />;
}
