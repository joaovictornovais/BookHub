import React from "react";
import Button from "./Button";

const Form = ({ children, button }) => {
  return (
    <form className="flex flex-col gap-6 w-[400px]">
      <div className="flex flex-col gap-2">{children}</div>
      <Button>Adicionar</Button>
    </form>
  );
};

export default Form;
