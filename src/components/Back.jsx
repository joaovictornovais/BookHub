import React from "react";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

const Back = ({ to }) => {
  return (
    <Link to={to}>
      <MdArrowBack className="text-blue-700 text-xl" />
    </Link>
  );
};

export default Back;
