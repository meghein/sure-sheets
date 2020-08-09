import React from "react";

import "./NavOptions.scss";

const HowList = (props) => {
  const options = [
    {
      text: "How do I import my screenshots?",
      handler: props.actionProvider.screenshots,
      id: 1
    },
    {
      text: "How do I edit my sheet?",
      handler: props.actionProvider.edits,
      id: 2
    },
    {
      text: "How do I export my cheatsheet?",
      handler: props.actionProvider.exports,
      id: 3
    },
    {
      text: "Can you teach me how to love?",
      handler: props.actionProvider.loves,
      id: 4
    },
    {
      text: "Why should I make a cheatsheet?",
      handler: props.actionProvider.handleWhyLinkList,
      id: 5,
    },
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

export default HowList;