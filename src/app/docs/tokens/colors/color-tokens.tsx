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
    {
      name: "background-primary-default",
      value: colors.backgroundPrimaryDefault,
    },
    { name: "background-primary-hover", value: colors.backgroundPrimaryHover },
    {
      name: "background-primary-pressed",
      value: colors.backgroundPrimaryPressed,
    },
    {
      name: "background-primary-selected",
      value: colors.backgroundPrimarySelected,
    },
    {
      name: "background-primary-disabled",
      value: colors.backgroundPrimaryDisabled,
    },
    {
      name: "background-primary-readonly",
      value: colors.backgroundPrimaryReadonly,
    },
    {
      name: "background-primary-brand-default",
      value: colors.backgroundPrimaryBrandDefault,
    },
    {
      name: "background-primary-brand-hover",
      value: colors.backgroundPrimaryBrandHover,
    },
    {
      name: "background-primary-brand-pressed",
      value: colors.backgroundPrimaryBrandPressed,
    },
    {
      name: "background-primary-info-default",
      value: colors.backgroundPrimaryInfoDefault,
    },
    {
      name: "background-primary-info-hover",
      value: colors.backgroundPrimaryInfoHover,
    },
    {
      name: "background-primary-info-pressed",
      value: colors.backgroundPrimaryInfoPressed,
    },
    {
      name: "background-primary-success-default",
      value: colors.backgroundPrimarySuccessDefault,
    },
    {
      name: "background-primary-success-hover",
      value: colors.backgroundPrimarySuccessHover,
    },
    {
      name: "background-primary-success-pressed",
      value: colors.backgroundPrimarySuccessPressed,
    },
    {
      name: "background-primary-warning-default",
      value: colors.backgroundPrimaryWarningDefault,
    },
    {
      name: "background-primary-warning-hover",
      value: colors.backgroundPrimaryWarningHover,
    },
    {
      name: "background-primary-warning-pressed",
      value: colors.backgroundPrimaryWarningPressed,
    },
    {
      name: "background-primary-alert-default",
      value: colors.backgroundPrimaryAlertDefault,
    },
    {
      name: "background-primary-alert-hover",
      value: colors.backgroundPrimaryAlertHover,
    },
    {
      name: "background-primary-alert-pressed",
      value: colors.backgroundPrimaryAlertPressed,
    },
  ],
  secondary: [
    {
      name: "background-secondary-default",
      value: colors.backgroundSecondaryDefault,
    },
    {
      name: "background-secondary-brand-default",
      value: colors.backgroundSecondaryBrandDefault,
    },
    {
      name: "background-secondary-brand-hover",
      value: colors.backgroundSecondaryBrandHover,
    },
    {
      name: "background-secondary-brand-pressed",
      value: colors.backgroundSecondaryBrandPressed,
    },
    {
      name: "background-secondary-info-default",
      value: colors.backgroundSecondaryInfoDefault,
    },
    {
      name: "background-secondary-info-hover",
      value: colors.backgroundSecondaryInfoHover,
    },
    {
      name: "background-secondary-info-pressed",
      value: colors.backgroundSecondaryInfoPressed,
    },
    {
      name: "background-secondary-success-default",
      value: colors.backgroundSecondarySuccessDefault,
    },
    {
      name: "background-secondary-success-hover",
      value: colors.backgroundSecondarySuccessHover,
    },
    {
      name: "background-secondary-success-pressed",
      value: colors.backgroundSecondarySuccessPressed,
    },
    {
      name: "background-secondary-warning-default",
      value: colors.backgroundSecondaryWarningDefault,
    },
    {
      name: "background-secondary-warning-hover",
      value: colors.backgroundSecondaryWarningHover,
    },
    {
      name: "background-secondary-warning-pressed",
      value: colors.backgroundSecondaryWarningPressed,
    },
    {
      name: "background-secondary-alert-default",
      value: colors.backgroundSecondaryAlertDefault,
    },
    {
      name: "background-secondary-alert-hover",
      value: colors.backgroundSecondaryAlertHover,
    },
    {
      name: "background-secondary-alert-pressed",
      value: colors.backgroundSecondaryAlertPressed,
    },
  ],
  tertiary: [
    {
      name: "background-tertiary-default",
      value: colors.backgroundTertiaryDefault,
    },
  ],
  complementary: [
    {
      name: "background-complementary-default",
      value: colors.backgroundComplementaryDefault,
    },
    {
      name: "background-complementary-hover",
      value: colors.backgroundComplementaryHover,
    },
    {
      name: "background-complementary-pressed",
      value: colors.backgroundComplementaryPressed,
    },
    {
      name: "background-complementary-disabled",
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
    { name: "border-border-default", value: colors.borderDefault },
    { name: "border-border-hover", value: colors.borderHover },
    { name: "border-border-selected", value: colors.borderSelected },
    { name: "border-border-info", value: colors.borderInfo },
    { name: "border-border-success", value: colors.borderSuccess },
    { name: "border-border-warning", value: colors.borderWarning },
    { name: "border-border-alert", value: colors.borderAlert },
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
        <p className="body-m text-content-primary mt-4">{color.name}</p>
        <small className="body-s text-content-primary">{hexa}</small>
      </div>
    </div>
  );
}
