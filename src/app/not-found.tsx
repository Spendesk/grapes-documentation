import { EmptyState } from "@dev-spendesk/grapes";
import "./not-found.css";

export const metadata = {
  title: "404 - Page not found",
};

export default function NotFound() {
  return (
    <EmptyState
      className="not-found"
      iconName="info"
      iconVariant="info"
      title="There's no page at this address"
      subtitle="Check the URL and try again, or use the search field to find what you need."
    />
  );
}
