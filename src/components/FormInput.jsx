import React from "react";

const FormInput = ({ children }) => {
  return (
    <div className="flex items-center gap-2 justify-between">
      <label>{children}</label>
      <input
        className="p-2 rounded-md text-sm text-zinc-700 bg-zinc-200"
        required
      />
    </div>
  );
};

export default FormInput;
