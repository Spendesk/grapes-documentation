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

  const handleThemeChange = (theme: Theme) => {
    document.documentElement.dataset.theme = theme;
    setTheme(theme);
  };

  // Use useEffect to avoid hydratation mismatch
  // @see https://nextjs.org/docs/messages/react-hydration-error#solution-1-using-useeffect-to-run-on-the-client-only
  useEffect(() => {
    handleThemeChange(getUserTheme());
  }, []);

  return [theme, handleThemeChange];
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useTheme();

  if (theme === null) {
    return <div className="toggle-theme" />;
  }

  return theme === "light" ? (
    <button
      type="button"
      className="toggle-theme"
      onClick={() => setTheme("dark")}
    >
      <SunIcon />
    </button>
  ) : (
    <button
      className="toggle-theme"
      type="button"
      onClick={() => setTheme("light")}
    >
      <MoonIcon />
    </button>
  );
}
