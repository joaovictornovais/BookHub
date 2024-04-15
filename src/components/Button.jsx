import React from "react";

const Button = ({ children, color }) => {
  return (
    <button
      className={
        color === "secundary"
          ? "p-2 border-2 border-blue-700 bg-zinc-100 text-blue-700 rounded-md hover:bg-blue-800 hover:text-zinc-100 transition-all"
          : "p-2 border-2 border-blue-700 bg-blue-700 text-zinc-100 rounded-md hover:bg-blue-800 transition-all"
      }
    >
      {children}
    </button>
  );
};

export default Button;
