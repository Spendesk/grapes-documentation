"use client";

import { useRouter } from "next/navigation";
import { Icon, Tag, TextInput, colors } from "@dev-spendesk/grapes";
import { routes } from "@/config/routes";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ListBox } from "./listbox/listbox";

import "./search.css";

export function Search() {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState("");
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "k":
        case "K":
          if (event.metaKey) {
            event.preventDefault(); // Prevent Firefox default behavior
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

  const handleResultClick = () => {
    setSelectedIndex(0);
    modalRef.current?.close();
  };
  const handleClose = () => {
    setValue("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "Enter": {
        handleResultClick();
        return router.push(searchResults.at(selectedIndex)?.url);
      }
      case "ArrowDown":
        return setSelectedIndex((index) =>
          Math.min(index + 1, searchResults.length - 1)
        );
      case "ArrowUp":
        return setSelectedIndex((index) => Math.max(index - 1, 0));
    }
  };

  const searchResults = routes
    .flatMap((route) => route.routes)
    .filter((route) => {
      if (value.trim().length < 1) {
        return false;
      }
      return route.label
        .toLowerCase()
        .includes(value.toLowerCase().replaceAll(" ", ""));
    })
    .slice(0, 5);

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
      <dialog ref={modalRef} className="search" onClose={handleClose}>
        <div className="search-body" onKeyDown={handleKeyDown}>
          <div className="seach-input-wrapper">
            <Icon name="search" color={colors.neutralDark} size="m" />
            <input
              placeholder="Search documentation"
              type="text"
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
              }}
            />
          </div>

          {searchResults.length > 0 ? (
            <ListBox
              selectedIndex={selectedIndex}
              options={searchResults}
              onOptionSelected={handleResultClick}
            />
          ) : null}
        </div>
      </dialog>
    </>
  );
}
