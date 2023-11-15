"use client";

import { routes } from "@/config/routes";
import {
  DropdownItem,
  Icon,
  IconButton,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Tag,
  TextInput,
  colors,
} from "@dev-spendesk/grapes";
import { useEffect, useRef, useState } from "react";

export function Search() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const modalInputRef = useRef<HTMLInputElement | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState<
    { label: string; url: string }[]
  >([]);
  const [previousKey, setPreviousKey] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Meta":
          setPreviousKey(previousKey === "Meta" ? null : "Meta");
          break;
        case "k":
        case "K":
          if (previousKey === "Meta") {
            setIsModalOpen(true);
            setPreviousKey(null);
          }
          break;
        case "Escape":
          if (isModalOpen) {
            setIsModalOpen(false);
          }
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, previousKey]);

  useEffect(() => {
    if (value.trim()) {
      setSearchResults(
        routes
          .flatMap((route) => route.routes)
          .filter((route) =>
            route.label
              .toLowerCase()
              .includes(value.toLowerCase().replaceAll(" ", ""))
          )
          .slice(0, 5)
      );
    } else {
      setSearchResults([]);
    }
  }, [value]);

  useEffect(() => {
    if (isModalOpen) {
      modalInputRef.current?.focus();
    }
  }, [isModalOpen]);

  return (
    <>
      <TextInput
        ref={inputRef}
        leftAddon={
          <Icon name="search" color={colors.neutralDark} className="ml-xs" />
        }
        rightAddon={
          <div className="flex gap-xxs mr-xs">
            <Tag variant="neutral">CMD</Tag>
            <Tag variant="neutral">K</Tag>
          </div>
        }
        onFocus={() => {
          setIsModalOpen(true);
          inputRef.current?.blur();
        }}
      />
      <ModalOverlay isOpen={isModalOpen}>
        <ModalContent
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          <ModalBody className="w-[80%] text-left">
            <TextInput
              ref={modalInputRef}
              fit="parent"
              value={value}
              leftAddon={
                <Icon
                  name="search"
                  color={colors.neutralDark}
                  className="ml-xs"
                />
              }
              rightAddon={
                value && (
                  <IconButton
                    iconName="cross"
                    color={colors.neutralDark}
                    onClick={() => {
                      setValue("");
                      modalInputRef.current?.focus();
                    }}
                  />
                )
              }
              onChange={(event) => {
                setValue(event.target.value);
              }}
            />
            {searchResults.length > 0 && (
              <div className="flex flex-col gap-xs mt-s">
                {searchResults.map((searchResult, index) => (
                  <a key={index} href={searchResult.url}>
                    <DropdownItem isHighlighted label={searchResult.label} />
                  </a>
                ))}
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </>
  );
}
