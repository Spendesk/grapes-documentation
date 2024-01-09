import allProps from "../../../props.json";

type PropsDoc = {
  name: string;
  description: string;
  required: boolean;
  defaultValue: { value: string | boolean } | null;
  type: { name: string };
};

function sortProps(props: PropsDoc[]) {
  return props.sort((a, b) => {
    if (a.required && !b.required) {
      return -1;
    }
    if (b.required && !a.required) {
      return 1;
    }
    return a.name.localeCompare(b.name);
  });
}

export function getSortedProps(component: string): PropsDoc[] {
  const filteredProps = allProps.props.find((d) => component === d.displayName);
  if (!filteredProps) {
    return [];
  }
  return sortProps(Object.values(filteredProps.props));
}
