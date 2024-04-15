import React from "react";
import FormButton from "./FormButton";

const Form = ({ children }) => {
  return (
    <form className="flex flex-col gap-6 max-w-[400px]">
      <div className="flex flex-col gap-2">{children}</div>
      <FormButton type="submit">Adicionar</FormButton>
    </form>
  );
};

export default Form;
