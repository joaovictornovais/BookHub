import React from "react";
import FormButton from "./FormButton";

const Form = ({ children, btnFn, btnText, color }) => {
  return (
    <form className="flex flex-col gap-6 max-w-[400px]">
      <div className="flex flex-col gap-2">{children}</div>
      <FormButton btnFn={btnFn} color={color}>
        {btnText ? btnText : "Adicionar"}
      </FormButton>
    </form>
  );
};

export default Form;
