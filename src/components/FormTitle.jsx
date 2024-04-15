import React from "react";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

const FormTitle = ({ children, subtitle }) => {
  return (
    <div className="flex flex-col gap-3 max-w-[400px] items-start">
      <div className="p-1 bg-zinc-200 rounded-full cursor-pointer hover:bg-zinc-300">
        <Link to="/">
          <MdArrowBack className="text-blue-700 text-xl" />
        </Link>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-blue-600">{children}</h1>
        <p className="text-zinc-500 col-span-2">{subtitle}</p>
      </div>
    </div>
  );
};

export default FormTitle;
