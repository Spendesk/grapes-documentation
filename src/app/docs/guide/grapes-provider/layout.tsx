import type { Metadata } from "next";
import { ComponentNavigation } from "@/lib/component-navigation/component-navigation";
import { ExternalLink } from "@/lib/external-link/external-link";

export const metadata: Metadata = {
  title: "GrapesProvider",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h1>GrapesProvider</h1>
      <p>
        GrapesProvider is the container for all Grapes applications. It defines
        the locale, and other application level settings such as the Mapbox
        access token for the AutocompletePlace.
      </p>
      <p>
        A GrapesProvider must be the root component of your application. Many
        Grapes components rely on the GrapesProvider to define the locale, and
        other settings that they need in order to render.
      </p>
      <ExternalLink href="https://github.com/Spendesk/grapes/tree/master/src/components/GrapesProvider">
        View source code
      </ExternalLink>
      <ComponentNavigation
        links={[
          { text: "Usage", href: "/docs/guide/grapes-provider" },
          { text: "Props", href: "/docs/guide/grapes-provider/props" },
        ]}
      />
      {props.children}
    </>
  );
}
