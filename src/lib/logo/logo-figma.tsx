import React from "react";

import "./logo.css";

export function LogoFigma() {
  return (
    <a
      href="https://www.figma.com/files/910916912733890296/team/930856372776001193/Grapes"
      className="logo"
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="sr-only">Grapes on Figma</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3ZM12 3h3a3 3 0 0 1 0 6h-3V3Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0v0ZM6 18a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0ZM6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3Z"
        />
      </svg>
    </a>
  );
}
