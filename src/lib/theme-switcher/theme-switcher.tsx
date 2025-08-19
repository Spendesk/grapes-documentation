"use client";

import { useEffect, useState } from "react";

import { SunIcon } from "./sun-icon";
import { MoonIcon } from "./moon-icon";

import "./theme-switcher.css";

type Theme = "light" | "dark";
function getUserTheme(): Theme {
  if (
    typeof document !== "undefined" &&
    ["light", "dark"].includes(document.documentElement.dataset.theme ?? "")
  ) {
    return document.documentElement.dataset.theme as Theme;
  }
  if (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}

function useTheme(): [Theme | null, (theme: Theme) => void] {
  const [theme, setTheme] = useState<Theme | null>(null);

  // Use useEffect to avoid hydratation mismatch
  // @see https://nextjs.org/docs/messages/react-hydration-error#solution-1-using-useeffect-to-run-on-the-client-only
  useEffect(() => {
    setTheme(getUserTheme());
  }, []);

  return [theme, setTheme];
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useTheme();

  const handleClick = (theme: Theme) => {
    document.documentElement.dataset.theme = theme;
    setTheme(theme);
  };

  if (theme === null) {
    return <div className="toggle-theme" />;
  }

  return theme === "light" ? (
    <button
      type="button"
      className="toggle-theme"
      onClick={() => handleClick("dark")}
    >
      <SunIcon />
    </button>
  ) : (
    <button
      className="toggle-theme"
      type="button"
      onClick={() => handleClick("light")}
    >
      <MoonIcon />
    </button>
  );
}
