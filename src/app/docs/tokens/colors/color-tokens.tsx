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
    { name: "darker", value: colors.neutralDarker },
    { name: "dark", value: colors.neutralDark },
    { name: "default", value: colors.neutral },
    { name: "light", value: colors.neutralLight },
    { name: "lighter", value: colors.neutralLighter },
    { name: "lightest", value: colors.neutralLightest },
  ],
  primary: [
    { name: "dark", value: colors.primaryDark },
    { name: "default", value: colors.primary },
    { name: "light", value: colors.primaryLight },
    { name: "lighter", value: colors.primaryLighter },
    { name: "lightest", value: colors.primaryLightest },
  ],
  warning: [
    { name: "dark", value: colors.warningDark },
    { name: "default", value: colors.warning },
    { name: "light", value: colors.warningLight },
    { name: "lighter", value: colors.warningLighter },
    { name: "lightest", value: colors.warningLightest },
  ],
  alert: [
    { name: "dark", value: colors.alertDark },
    { name: "default", value: colors.alert },
    { name: "light", value: colors.alertLight },
    { name: "lighter", value: colors.alertLighter },
    { name: "lightest", value: colors.alertLightest },
  ],
  success: [
    { name: "default", value: colors.success },
    { name: "lighter", value: colors.successLighter },
    { name: "lightest", value: colors.successLightest },
  ],
  info: [
    { name: "default", value: colors.info },
    { name: "lighter", value: colors.infoLighter },
    { name: "lightest", value: colors.infoLightest },
  ],
  structure: [
    { name: "complementary", value: colors.complementary },
    { name: "background", value: colors.pageBackground },
    { name: "white", value: colors.white },
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
          <div className="grid grid-cols-6 gap-s">
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
          className="h-3xl rounded-xs w-full border-none transition-all cursor-pointer elevation-20 hover:scale-105"
          onClick={handleClick}
        ></button>
      </Tooltip>
      <div>
        <p className="font-medium text-complementary mt-xxs">{color.name}</p>
        <small className="text-neutral-dark">{hexa}</small>
      </div>
    </div>
  );
}
