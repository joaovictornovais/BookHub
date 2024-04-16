import React from "react";

const FormButton = ({ color, children, btnFn }) => {
  return (
    <button
      type="submit"
      onClick={btnFn}
      className={
        color === "secundary" ? "button-secundary p-2" : "button-primary p-2"
      }
    >
      {children}
    </button>
  );
};

export default FormButton;
