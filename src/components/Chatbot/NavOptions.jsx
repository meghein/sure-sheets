import React from "react";

import "./NavOptions.css";

const NavOptions = (props) => {
  const options = [
    { text: "How do I import my screenshots?", handler: () => { }, id: 1 },
    { text: "How do I edit my sheet?", handler: () => { }, id: 2 },
    { text: "How do I export my cheatsheet?", handler: () => { }, id: 3 },
    { text: "Can you teach me how to love?", handler: () => { }, id: 4 },
    { text: "Why should I make a cheatsheet?", handler: () => { }, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="nav-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="nav-options-container">{optionsMarkup}</div>;
};

export default NavOptions;