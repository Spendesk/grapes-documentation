import { DocsHero } from "@/components/docs-hero/docs-hero";
import data from "./data.json";

export const metadata = {
  title: "Button",
};

export default function Page() {
  return <DocsHero {...data} />;
}
