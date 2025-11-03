"use client";

import "./dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type DropdownProps = {
  title: string;
  text: string | string[];
};

export default function Dropdown({ title, text }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(true);

  function changeOpen() {
    setIsOpen(!isOpen);
  }

  const contentArray = [];
  if (!Array.isArray(text)) {
    contentArray.push(text);
  } else {
    contentArray.push(...text);
  }

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={changeOpen}>
        <div>{title}</div>
        {isOpen ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </div>
      <div
        className={`dropdown-text ${
          isOpen ? "dropdown-open" : "dropdown-closed"
        }`}
      >
        {contentArray.map((content, idx) => (
          <div key={idx}>{content}</div>
        ))}
      </div>
    </div>
  );
}
