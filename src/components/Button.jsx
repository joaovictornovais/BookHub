import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, color, link, btnFn }) => {
  return (
    <button
      onClick={btnFn}
      className={
        color === "blue"
          ? "button-blue"
          : color === "red"
          ? "button-red"
          : "button-white-blue"
      }
    >
      <Link to={link} className="p-2 items-center flex justify-center">
        {children}
      </Link>
    </button>
  );
};

export default Button;
