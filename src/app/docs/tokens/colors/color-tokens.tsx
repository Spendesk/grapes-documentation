"use client";

import { Tooltip, colors } from "@dev-spendesk/grapes";
import { Fragment, useEffect, useState } from "react";

type ColorSection = "content" | "border";
type BackgroundColorSection = "default" | "primary" | "secondary";

type Color = {
  name: string;
  value: string;
};

const backgroundTokens: { [key in BackgroundColorSection]: Color[] } = {
  default: [
    { name: "primary", value: colors.backgroundPrimary },
    { name: "secondary", value: colors.backgroundSecondary },
    { name: "tertiary", value: colors.backgroundTertiary },
    { name: "hover", value: colors.backgroundHover },
    { name: "pressed", value: colors.backgroundPressed },
    { name: "selected", value: colors.backgroundSelected },
    { name: "disabled", value: colors.backgroundDisabled },
    { name: "readonly", value: colors.backgroundReadonly },
    { name: "complementary", value: colors.backgroundComplementary },
  ],
  primary: [
    {
      name: "brand-default",
      value: colors.backgroundPrimaryBrandDefault,
    },
    {
      name: "brand-hover",
      value: colors.backgroundPrimaryBrandHover,
    },
    {
      name: "brand-pressed",
      value: colors.backgroundPrimaryBrandPressed,
    },
    {
      name: "info-default",
      value: colors.backgroundPrimaryInfoDefault,
    },
    {
      name: "info-hover",
      value: colors.backgroundPrimaryInfoHover,
    },
    {
      name: "info-pressed",
      value: colors.backgroundPrimaryInfoPressed,
    },
    {
      name: "success-default",
      value: colors.backgroundPrimarySuccessDefault,
    },
    {
      name: "success-hover",
      value: colors.backgroundPrimarySuccessHover,
    },
    {
      name: "success-pressed",
      value: colors.backgroundPrimarySuccessPressed,
    },
    {
      name: "warning-default",
      value: colors.backgroundPrimaryWarningDefault,
    },
    {
      name: "warning-hover",
      value: colors.backgroundPrimaryWarningHover,
    },
    {
      name: "warning-pressed",
      value: colors.backgroundPrimaryWarningPressed,
    },
    {
      name: "alert-default",
      value: colors.backgroundPrimaryAlertDefault,
    },
    {
      name: "alert-hover",
      value: colors.backgroundPrimaryAlertHover,
    },
    {
      name: "alert-pressed",
      value: colors.backgroundPrimaryAlertPressed,
    },
  ],
  secondary: [
    {
      name: "brand-default",
      value: colors.backgroundSecondaryBrandDefault,
    },
    {
      name: "brand-hover",
      value: colors.backgroundSecondaryBrandHover,
    },
    {
      name: "brand-pressed",
      value: colors.backgroundSecondaryBrandPressed,
    },
    {
      name: "info-default",
      value: colors.backgroundSecondaryInfoDefault,
    },
    {
      name: "info-hover",
      value: colors.backgroundSecondaryInfoHover,
    },
    {
      name: "info-pressed",
      value: colors.backgroundSecondaryInfoPressed,
    },
    {
      name: "success-default",
      value: colors.backgroundSecondarySuccessDefault,
    },
    {
      name: "success-hover",
      value: colors.backgroundSecondarySuccessHover,
    },
    {
      name: "success-pressed",
      value: colors.backgroundSecondarySuccessPressed,
    },
    {
      name: "warning-default",
      value: colors.backgroundSecondaryWarningDefault,
    },
    {
      name: "warning-hover",
      value: colors.backgroundSecondaryWarningHover,
    },
    {
      name: "warning-pressed",
      value: colors.backgroundSecondaryWarningPressed,
    },
    {
      name: "alert-default",
      value: colors.backgroundSecondaryAlertDefault,
    },
    {
      name: "alert-hover",
      value: colors.backgroundSecondaryAlertHover,
    },
    {
      name: "alert-pressed",
      value: colors.backgroundSecondaryAlertPressed,
    },
  ],
};

const tokens: { [key in ColorSection]: Color[] } = {
  content: [
    { name: "primary", value: colors.contentPrimary },
    { name: "secondary-bg-primary", value: colors.contentSecondaryBgPrimary },
    {
      name: "secondary-bg-secondary",
      value: colors.contentSecondaryBgSecondary,
    },
    { name: "decorative-icon", value: colors.contentDecorativeIcon },
    { name: "complementary", value: colors.contentComplementary },
    { name: "selected", value: colors.contentSelected },
    { name: "disabled", value: colors.contentDisabled },
    { name: "brand-default", value: colors.contentBrandDefault },
    { name: "brand-hover", value: colors.contentBrandHover },
    { name: "brand-pressed", value: colors.contentBrandPressed },
    { name: "info-default", value: colors.contentInfoDefault },
    { name: "success-default", value: colors.contentSuccessDefault },
    { name: "warning-default", value: colors.contentWarningDefault },
    { name: "alert-default", value: colors.contentAlertDefault },
  ],
  border: [
    { name: "default", value: colors.borderDefault },
    { name: "hover", value: colors.borderHover },
    { name: "selected", value: colors.borderSelected },
    { name: "info", value: colors.borderInfo },
    { name: "success", value: colors.borderSuccess },
    { name: "warning", value: colors.borderWarning },
    { name: "alert", value: colors.borderAlert },
  ],
};

function getSectionName(section: ColorSection): string {
  switch (section) {
    case "content":
      return "Content";
    case "border":
      return "Border";
  }
}

function getBackgroundSectionName(section: BackgroundColorSection): string {
  switch (section) {
    case "default":
      return "Default";
    case "primary":
      return "Primary";
    case "secondary":
      return "Secondary";
  }
}

export function ColorTokens() {
  return (
    <div>
      <h2>Background</h2>
      {Object.entries(backgroundTokens).map(([key, values]) => (
        <Fragment key={key}>
          <h3 id={key}>
            {getBackgroundSectionName(key as BackgroundColorSection)}
          </h3>
          <div className="grid grid-cols-6 gap-16">
            {values.map((color) => (
              <ColorBox color={color} key={color.name} />
            ))}
          </div>
        </Fragment>
      ))}
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
