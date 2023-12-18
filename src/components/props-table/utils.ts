export type PropsDoc = {
  name: string;
  description: string;
  required: boolean;
  defaultValue: { value: string | boolean } | null;
  type: { name: string };
};

export function sortProps(props: PropsDoc[]) {
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
