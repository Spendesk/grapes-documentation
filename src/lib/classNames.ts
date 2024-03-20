type Names = string | undefined | null | boolean;
/**
 * Utility for conditionally merging classNames together.
 * @example
 * classNames('foo', 'bar'); => 'foo bar'
 * @example
 * classnames(false && 'foo', 'bar'); => 'bar'
 */
export function classNames(...names: Names[]) {
  let out = "";
  for (let i = 0; i < names.length; i++) {
    if (names[i]) out += (out && " ") + names[i];
  }
  return out;
}
