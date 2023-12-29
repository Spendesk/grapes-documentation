"use client";

import { routes } from "@/config/routes";
import {
  Icon,
  IconButton,
  ModalBody,
  Tag,
  TextInput,
  colors,
} from "@dev-spendesk/grapes";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import "./search.css";

export function Search() {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const modalInputRef = useRef<HTMLInputElement | null>(null);

  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState<
    { label: string; url: string }[]
  >([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "k":
        case "K":
          if (event.metaKey) {
            modalRef.current?.showModal();
          }
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
          inputRef.current?.blur();
          modalRef.current?.showModal();
        }}
      />
      <dialog ref={modalRef} className="search">
        <form>
          <ModalBody>
            <button value="cancel" formMethod="dialog">
              Cancel
            </button>
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
              <ul className="search-list">
                {searchResults.map((searchResult, index) => (
                  <li>
                    <Link
                      key={index}
                      href={searchResult.url}
                      className="search-result"
                    >
                      {searchResult.label}
                      <Icon name="caret-right" size="m" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </ModalBody>
        </form>
      </dialog>
    </>
  );
}
