import React from "react";

const Button = ({ text, func = {} }) => {
  return (
    <button
      className="w-24 text-base bg-blue rounded-large px-3 py-0.25 text-white"
      onClick={() => func}
    >
      {text}
    </button>
  );
};

export default Button;
