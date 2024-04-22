import React from "react";

const FormButton = ({ color, children, btnFn, type }) => {
  return (
    <button
      type={type}
      onClick={btnFn}
      className={
        color === "blue"
          ? "button-blue p-2"
          : color === "red"
          ? "button-red p-2"
          : "button-white-blue p-2"
      }
    >
      {children}
    </button>
  );
};

export default FormButton;
