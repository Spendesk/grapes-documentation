import { EmptyState } from "@dev-spendesk/grapes";
import { Minesweeper } from "@/components/game/minesweeper";

import "./not-found.css";

export const metadata = {
  title: "404 - Page not found",
};

export default function NotFound() {
  return (
    <EmptyState
      illustration={<Minesweeper />}
      className="not-found"
      title="There's no page at this address"
      subtitle="Check the URL and try again, or use the search field to find what you need. You can also stay on this page and enjoy the minesweeper!"
    />
  );
}
