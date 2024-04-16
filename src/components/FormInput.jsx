import React from "react";

const FormInput = ({ children, setValue }) => {
  return (
    <div className="flex items-center gap-2 justify-between px-2">
      <label>{children}</label>
      <input
        className="p-2 rounded-md text-sm text-zinc-700 bg-zinc-200"
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </div>
  );
};

export default FormInput;
