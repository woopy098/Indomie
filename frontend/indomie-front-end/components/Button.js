import React from "react";

const buttonConfig = {
  primary: {
    bgColor: "bg-blue",
    color: "text-white",
  },
  secondary: {
    bgColor: "bg-white",
    color: "text-blue",
  },
};

const Button = ({ text, type = "primary", link = false, href }) => {
  let button = link ? (
    <a href={href}>{text}</a>
  ) : (
    <button
      className={`max-w-max text-base ${buttonConfig[type].bgColor} ${buttonConfig[type].color} border-blue border-2  rounded-large px-3 py-0.25 `}
    >
      {text}
    </button>
  );
  return button;
};

export default Button;
