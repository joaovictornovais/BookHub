import React from "react";

const FormSection = ({ children }) => {
  return (
    <section className="p-3 h-screen">
      <div className="flex flex-col items-center p-4 gap-4">{children}</div>
    </section>
  );
};

export default FormSection;
