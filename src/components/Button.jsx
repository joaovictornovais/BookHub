import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, color, link }) => {
  return (
    <button
      className={color === "secundary" ? "button-secundary" : "button-primary"}
    >
      <Link to={link} className="p-2 items-center flex justify-center">
        {children}
      </Link>
    </button>
  );
};

export default Button;
