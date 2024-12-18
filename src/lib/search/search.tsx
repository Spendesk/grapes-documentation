"use client";

import { useRouter } from "next/navigation";
import { Icon, IconButton, Tag, TextInput, colors } from "@dev-spendesk/grapes";
import { type Route, routes } from "@/app/routes";
import { useEffect, useRef, useState } from "react";
import { Option } from "./option";
import { useHighlight } from "./useHighlight";

import "./search.css";

function extractToken(pattern: string): string[] {
  return pattern.split(" ").filter((token) => token.length > 0);
}

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
    highlight(extractToken(value));
  }, [value, highlight]);

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
          Math.max(Math.min(index + 1, searchResults.length - 1), 0),
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

  const searchResults = Object.values(routes)
    .flatMap((route) =>
      route.reduce((acc, item) => acc.concat(item.routes), [] as Route[]),
    )
    .flatMap((route) => {
      if (route.url.includes("components")) {
        return [
          route,
          { label: `${route.label} - Props`, url: `${route.url}?tab=props` },
        ];
      }
      return route;
    })
    .filter((route) => {
      if (value.trim().length < 1) {
        return false;
      }
      const tokens = extractToken(value);

      return tokens.every((token) => {
        const reg = new RegExp(token, "i");
        return reg.test(route.label);
      });
    })
    .slice(0, 8);

  return (
    <>
      <TextInput
        ref={inputRef}
        placeholder="Search the docs"
        leftAddon={
          <Icon
            name="magnifying-glass"
            color={colors.contentSecondaryBgPrimary}
            className="ml-8"
            aria-hidden="true"
          />
        }
        rightAddon={
          <Tag className="mx-8" variant="neutral">
            ⌘K
          </Tag>
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
            <Icon
              name="magnifying-glass"
              color={colors.contentSecondaryBgPrimary}
              size="m"
            />
            <input
              placeholder="Search the docs"
              type="text"
              pattern="[\w\s]+"
              value={value}
              onChange={(event) => {
                if (event.target.checkValidity()) {
                  setValue(event.target.value);
                  setSelectedIndex(0);
                }
              }}
            />
            <IconButton
              iconName="cross"
              iconColor={colors.contentSecondaryBgPrimary}
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
