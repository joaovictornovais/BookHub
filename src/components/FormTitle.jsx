import React from "react";

const FormTitle = ({ children, subtitle }) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <h1 className="text-4xl font-semibold text-blue-600">{children}</h1>
      <p className="text-zinc-500">{subtitle}</p>
    </div>
  );
};

export default FormTitle;
