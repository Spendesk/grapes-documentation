"use client";

import { Tooltip, colors } from "@dev-spendesk/grapes";
import { Fragment, useEffect, useState } from "react";

type ColorSection =
  | "primary"
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "alert"
  | "structure";

type Color = {
  name: string;
  value: string;
};
const tokens: { [key in ColorSection]: Color[] } = {
  neutral: [
    { name: "darker", value: colors.contentSecondaryBgPrimary },
    { name: "dark", value: colors.contentSecondaryBgPrimary },
    { name: "default", value: colors.backgroundSecondary },
    { name: "light", value: colors.backgroundSecondary },
    { name: "lighter", value: colors.backgroundSecondary },
    { name: "lightest", value: colors.backgroundSecondary },
  ],
  primary: [
    { name: "dark", value: colors.contentPrimary },
    { name: "default", value: colors.contentPrimary },
    { name: "light", value: colors.backgroundSecondaryBrandDefault },
    { name: "lighter", value: colors.backgroundSecondaryBrandDefault },
    { name: "lightest", value: colors.backgroundSecondaryBrandDefault },
  ],
  warning: [
    { name: "dark", value: colors.contentWarningDefault },
    { name: "default", value: colors.contentWarningDefault },
    { name: "light", value: colors.backgroundSecondaryWarningDefault },
    { name: "lighter", value: colors.backgroundSecondaryWarningDefault },
    { name: "lightest", value: colors.backgroundSecondaryWarningDefault },
  ],
  alert: [
    { name: "dark", value: colors.contentAlertDefault },
    { name: "default", value: colors.contentAlertDefault },
    { name: "light", value: colors.backgroundSecondaryAlertDefault },
    { name: "lighter", value: colors.backgroundSecondaryAlertDefault },
    { name: "lightest", value: colors.backgroundSecondaryAlertDefault },
  ],
  success: [
    { name: "default", value: colors.contentSuccessDefault },
    { name: "lighter", value: colors.backgroundSecondarySuccessDefault },
    { name: "lightest", value: colors.backgroundSecondarySuccessDefault },
  ],
  info: [
    { name: "default", value: colors.contentInfoDefault },
    { name: "lighter", value: colors.backgroundSecondaryInfoDefault },
    { name: "lightest", value: colors.backgroundSecondaryInfoDefault },
  ],
  structure: [
    { name: "complementary", value: colors.contentPrimary },
    { name: "background", value: colors.backgroundPrimary },
    { name: "white", value: colors.backgroundPrimary },
  ],
};

function getSectionName(section: ColorSection): string {
  switch (section) {
    case "primary":
      return "Primary";
    case "neutral":
      return "Neutral";
    case "info":
      return "Info";
    case "success":
      return "Success";
    case "warning":
      return "Warning";
    case "alert":
      return "Alert";
    case "structure":
      return "Structure";
  }
}

export function ColorTokens() {
  return (
    <div>
      {Object.entries(tokens).map(([key, values]) => (
        <Fragment key={key}>
          <h2 id={key}>{getSectionName(key as ColorSection)}</h2>
          <div className="grid grid-cols-6 gap-16">
            {values.map((color) => (
              <ColorBox color={color} key={color.name} />
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
}

function ColorBox({ color }: { color: Color }) {
  const [hasBeenCopied, setHasBeenCopied] = useState(false);
  const [hexa, setHexa] = useState("");

  // Use Effect to avoid hydration errors
  // @see https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    const regExp = /\(([^]+)\)/;
    const colorVariable = regExp.exec(color.value)?.[1];
    if (typeof window === "undefined" || !colorVariable) {
      return;
    }
    const style = window.getComputedStyle(document.body);
    setHexa(style.getPropertyValue(colorVariable));
  }, [color.value]);

  function handleClick() {
    setHasBeenCopied(true);
    navigator.clipboard.writeText(`${color.value}`);
    setTimeout(() => {
      setHasBeenCopied(false);
    }, 1_500);
  }

  return (
    <div>
      <Tooltip content="Copied" triggerAsChild isOpen={hasBeenCopied}>
        <button
          style={{ backgroundColor: color.value }}
          aria-label={`Copy ${color.value}`}
          className="h-64 rounded-8 w-full border-none transition-all cursor-pointer elevation-s hover:scale-105"
          onClick={handleClick}
        ></button>
      </Tooltip>
      <div>
        <p className="font-medium text-content-primary mt-4">{color.name}</p>
        <small className="text-content-primary">{hexa}</small>
      </div>
    </div>
  );
}
