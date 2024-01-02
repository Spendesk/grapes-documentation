"use client";

import { useRouter } from "next/navigation";
import { Icon, IconButton, Tag, TextInput, colors } from "@dev-spendesk/grapes";
import { routes } from "@/config/routes";
import { useEffect, useRef, useState } from "react";
import { Option } from "./option";
import { useHighlight } from "./useHighlight";

import "./search.css";

export function Search() {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listboxRef = useRef<HTMLUListElement | null>(null);
  const [value, setValue] = useState("");
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const highlight = useHighlight(listboxRef);

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

  useEffect(() => {
    highlight(value);
  }, [value]);

  const closeModal = () => {
    modalRef.current?.close();
  };

  const handleClose = () => {
    setSelectedIndex(0);
    setValue("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    switch (event.key) {
      case "ArrowDown":
        return setSelectedIndex((index) =>
          Math.max(Math.min(index + 1, searchResults.length - 1), 0)
        );
      case "ArrowUp":
        return setSelectedIndex((index) => Math.max(index - 1, 0));
    }
  };

  const handleSubmit = () => {
    const url = searchResults.at(selectedIndex)?.url;
    if (url) {
      return router.push(url);
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
        <form
          method="dialog"
          className="search-body"
          onKeyDown={handleKeyDown}
          onSubmit={handleSubmit}
        >
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
            <IconButton
              iconName="cross"
              iconColor={colors.neutralDark}
              aria-label="Close"
              onClick={closeModal}
            />
          </div>

          <ul ref={listboxRef} className="search-list" role="listbox">
            {searchResults.map((option, index) => (
              <Option
                key={option.label}
                option={option}
                isSelected={selectedIndex === index}
                onOptionClick={closeModal}
              />
            ))}
          </ul>
        </form>
      </dialog>
    </>
  );
}
