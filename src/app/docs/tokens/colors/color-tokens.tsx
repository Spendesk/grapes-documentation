"use client";

import { colors } from "@dev-spendesk/grapes";
import { Fragment } from "react";

type ColorSection =
  | "primary"
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "alert"
  | "structure";

const tokens: { [key in ColorSection]: string[] } = {
  primary: [
    colors.primaryDark,
    colors.primary,
    colors.primaryLight,
    colors.primaryLighter,
    colors.primaryLightest,
  ],
  neutral: [
    colors.neutralDarker,
    colors.neutralDark,
    colors.neutral,
    colors.neutralLight,
    colors.neutralLighter,
    colors.neutralLightest,
  ],
  info: [colors.info, colors.infoLighter, colors.infoLightest],
  success: [colors.success, colors.successLighter, colors.successLightest],
  warning: [
    colors.warningDark,
    colors.warning,
    colors.warningLight,
    colors.warningLighter,
    colors.warningLightest,
  ],
  alert: [
    colors.alertDark,
    colors.alert,
    colors.alertLight,
    colors.alertLighter,
    colors.alertLightest,
  ],
  structure: [colors.complementary, colors.pageBackground, colors.white],
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
  const regExp = /\(([^]+)\)/;
  if (typeof window === "undefined") {
    return null;
  }

  const style = window.getComputedStyle(document.body);

  return (
    <div className="box">
      {Object.entries(tokens).map(([key, values], index) => (
        <Fragment key={key}>
          <div className={`w-[150px] my-s title-m ${index === 0 && "mt-0"}`}>
            {getSectionName(key as ColorSection)}
          </div>
          <div className="grid grid-cols-3 gap-s">
            {values.map((color, index) => {
              const colorVariable = regExp.exec(color)?.[1];
              return (
                <div key={index} className="flex gap-xs items-center">
                  <div
                    style={{ backgroundColor: color }}
                    className="h-xxl w-xxl rounded-xs border border-solid border-neutral-lighter elevation-10"
                  ></div>
                  <div>
                    <div className="font-medium">{color}</div>
                    {colorVariable && (
                      <div>{style.getPropertyValue(colorVariable)}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
