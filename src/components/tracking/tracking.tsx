"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import { useEffect } from "react";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqZGhqZHpqamp5cW50cnFjYm9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4NTk2NTcsImV4cCI6MjAxNzQzNTY1N30.wy7PHnNqDpodvfGVqWOlmXDUZaGDZeapZBFIl6-Quss";
const BASE_URL = "https://bjdhjdzjjjyqntrqcbop.supabase.co";

function insertEvent(page: string): void {
  fetch(`${BASE_URL}/rest/v1/event`, {
    method: "POST",
    headers: {
      apiKey: API_KEY,
      authorization: `Bearer ${API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      page: page,
      source: "grapes-documentation",
    }),
  });
}

export function Tracking() {
  const segments = useSelectedLayoutSegments();
  const page = segments.join("/");

  useEffect(() => {
    insertEvent(page);
  }, [page]);

  return null;
}
