"use client";

import { PhoneInput } from "@dev-spendesk/grapes";
import {
  type CountryCode,
  getCountryCallingCode,
  formatIncompletePhoneNumber,
} from "libphonenumber-js";
import { useState } from "react";

import { COUNTRIES } from "@/utils/country";

const formatPhoneNumber = (value: string | null, country: string) => {
  if (!value) {
    return "";
  }
  const formattedPhoneNumber = formatIncompletePhoneNumber(
    value.replace(/\s/g, ""),
    country as CountryCode,
  );
  const callingCode = getCountryCallingCode(country as CountryCode);
  if (formattedPhoneNumber === `+${callingCode}`) {
    return "";
  }
  return formattedPhoneNumber.replace(`+${callingCode} `, "");
};

export function DemoPhoneInput() {
  const [value, setValue] = useState<string | null>(null);
  const [country, setCountry] = useState<CountryCode>("FR");
  return (
    <div className="w-[360px]">
      <PhoneInput
        formatPhoneNumber={formatPhoneNumber}
        value={value}
        callingCode={getCountryCallingCode(country)}
        country={country}
        countries={Object.entries(COUNTRIES).map(
          ([countryCode, countryName]) => ({
            key: countryCode,
            label: countryName,
          }),
        )}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        onSelectCountry={(selectedCountry) => {
          setCountry(selectedCountry.key as CountryCode);
          setValue("");
        }}
      />
    </div>
  );
}
