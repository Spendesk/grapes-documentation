"use client";

import { Tooltip, colors } from "@dev-spendesk/grapes";
import { Fragment, useEffect, useState } from "react";

type ColorSection = "content" | "border";
type BackgroundColorSection =
  | "primary"
  | "secondary"
  | "tertiary"
  | "complementary";

type Color = {
  name: string;
  value: string;
};

const backgroundTokens: { [key in BackgroundColorSection]: Color[] } = {
  primary: [
    { name: "primary-default", value: colors.backgroundPrimaryDefault },
    { name: "primary-hover", value: colors.backgroundPrimaryHover },
    { name: "primary-pressed", value: colors.backgroundPrimaryPressed },
    { name: "primary-selected", value: colors.backgroundPrimarySelected },
    { name: "primary-disabled", value: colors.backgroundPrimaryDisabled },
    { name: "primary-readonly", value: colors.backgroundPrimaryReadonly },
    {
      name: "primary-brand-default",
      value: colors.backgroundPrimaryBrandDefault,
    },
    {
      name: "primary-brand-hover",
      value: colors.backgroundPrimaryBrandHover,
    },
    {
      name: "primary-brand-pressed",
      value: colors.backgroundPrimaryBrandPressed,
    },
    {
      name: "primary-info-default",
      value: colors.backgroundPrimaryInfoDefault,
    },
    {
      name: "primary-info-hover",
      value: colors.backgroundPrimaryInfoHover,
    },
    {
      name: "primary-info-pressed",
      value: colors.backgroundPrimaryInfoPressed,
    },
    {
      name: "primary-success-default",
      value: colors.backgroundPrimarySuccessDefault,
    },
    {
      name: "primary-success-hover",
      value: colors.backgroundPrimarySuccessHover,
    },
    {
      name: "primary-success-pressed",
      value: colors.backgroundPrimarySuccessPressed,
    },
    {
      name: "primary-warning-default",
      value: colors.backgroundPrimaryWarningDefault,
    },
    {
      name: "primary-warning-hover",
      value: colors.backgroundPrimaryWarningHover,
    },
    {
      name: "primary-warning-pressed",
      value: colors.backgroundPrimaryWarningPressed,
    },
    {
      name: "primary-alert-default",
      value: colors.backgroundPrimaryAlertDefault,
    },
    {
      name: "primary-alert-hover",
      value: colors.backgroundPrimaryAlertHover,
    },
    {
      name: "primary-alert-pressed",
      value: colors.backgroundPrimaryAlertPressed,
    },
  ],
  secondary: [
    { name: "secondary-default", value: colors.backgroundSecondaryDefault },
    {
      name: "secondary-brand-default",
      value: colors.backgroundSecondaryBrandDefault,
    },
    {
      name: "secondary-brand-hover",
      value: colors.backgroundSecondaryBrandHover,
    },
    {
      name: "secondary-brand-pressed",
      value: colors.backgroundSecondaryBrandPressed,
    },
    {
      name: "secondary-info-default",
      value: colors.backgroundSecondaryInfoDefault,
    },
    {
      name: "secondary-info-hover",
      value: colors.backgroundSecondaryInfoHover,
    },
    {
      name: "secondary-info-pressed",
      value: colors.backgroundSecondaryInfoPressed,
    },
    {
      name: "secondary-success-default",
      value: colors.backgroundSecondarySuccessDefault,
    },
    {
      name: "secondary-success-hover",
      value: colors.backgroundSecondarySuccessHover,
    },
    {
      name: "secondary-success-pressed",
      value: colors.backgroundSecondarySuccessPressed,
    },
    {
      name: "secondary-warning-default",
      value: colors.backgroundSecondaryWarningDefault,
    },
    {
      name: "secondary-warning-hover",
      value: colors.backgroundSecondaryWarningHover,
    },
    {
      name: "secondary-warning-pressed",
      value: colors.backgroundSecondaryWarningPressed,
    },
    {
      name: "secondary-alert-default",
      value: colors.backgroundSecondaryAlertDefault,
    },
    {
      name: "secondary-alert-hover",
      value: colors.backgroundSecondaryAlertHover,
    },
    {
      name: "secondary-alert-pressed",
      value: colors.backgroundSecondaryAlertPressed,
    },
  ],
  tertiary: [
    { name: "tertiary-default", value: colors.backgroundTertiaryDefault },
  ],
  complementary: [
    {
      name: "complementary-default",
      value: colors.backgroundComplementaryDefault,
    },
    { name: "complementary-hover", value: colors.backgroundComplementaryHover },
    {
      name: "complementary-pressed",
      value: colors.backgroundComplementaryPressed,
    },
    {
      name: "complementary-disabled",
      value: colors.backgroundComplementaryDisabled,
    },
  ],
};

const tokens: { [key in ColorSection]: Color[] } = {
  content: [
    { name: "content-primary", value: colors.contentPrimary },
    {
      name: "content-secondary-bg-primary",
      value: colors.contentSecondaryBgPrimary,
    },
    {
      name: "content-secondary-bg-secondary",
      value: colors.contentSecondaryBgSecondary,
    },
    { name: "content-brand-default", value: colors.contentBrandDefault },
    { name: "content-info-default", value: colors.contentInfoDefault },
    { name: "content-success-default", value: colors.contentSuccessDefault },
    { name: "content-warning-default", value: colors.contentWarningDefault },
    { name: "content-alert-default", value: colors.contentAlertDefault },
    { name: "content-selected", value: colors.contentSelected },
    { name: "content-brand-hover", value: colors.contentBrandHover },
    { name: "content-brand-pressed", value: colors.contentBrandPressed },
    { name: "content-disabled", value: colors.contentDisabled },
    { name: "content-complementary", value: colors.contentComplementary },
    { name: "content-decorative-icon", value: colors.contentDecorativeIcon },
  ],
  border: [
    { name: "border-default", value: colors.borderDefault },
    { name: "border-hover", value: colors.borderHover },
    { name: "border-selected", value: colors.borderSelected },
    { name: "border-info", value: colors.borderInfo },
    { name: "border-success", value: colors.borderSuccess },
    { name: "border-warning", value: colors.borderWarning },
    { name: "border-alert", value: colors.borderAlert },
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
    case "primary":
      return "Primary";
    case "secondary":
      return "Secondary";
    case "tertiary":
      return "Tertiary";
    case "complementary":
      return "Complementary";
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
          <div className="grid grid-cols-3 gap-16">
            {values.map((color) => (
              <ColorBox color={color} key={color.name} />
            ))}
          </div>
        </Fragment>
      ))}
      {Object.entries(tokens).map(([key, values]) => (
        <Fragment key={key}>
          <h2 id={key}>{getSectionName(key as ColorSection)}</h2>
          <div className="grid grid-cols-3 gap-16">
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
        <p className="font-medium text-primary mt-4">{color.name}</p>
        <small className="text-primary">{hexa}</small>
      </div>
    </div>
  );
}
