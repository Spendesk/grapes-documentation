import { DocsHero } from "@/components/docs-hero/docs-hero";
import data from "./data.json";

export default function Page() {
  return <DocsHero {...data} />;
}
