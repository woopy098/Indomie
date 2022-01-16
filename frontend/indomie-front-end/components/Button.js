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

const Button = ({ text, type = "primary", func = {} }) => {
  return (
    <button
      className={`w-24 text-base ${buttonConfig[type].bgColor} ${buttonConfig[type].color} border-blue border-2  rounded-large px-3 py-0.25 `}
      onClick={() => func}
    >
      {text}
    </button>
  );
};

export default Button;
