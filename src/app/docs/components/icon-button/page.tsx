import { DocsHero } from "@/lib/docs-hero/docs-hero";
import data from "./data.json";

export default function Page() {
  return <DocsHero {...data} />;
}
