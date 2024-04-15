import React from "react";

const MinBook = ({ cover, title, author, borrow }) => {
  return (
    <div className="w-[200px] border-2 border-zinc-200 rounded-sm mx-auto">
      <div className="bg-zinc-200">
        <img
          src={cover}
          alt={title}
          className={
            borrow === null
              ? "w-36 mx-auto cursor-pointer"
              : "w-36 mx-auto cursor-pointer saturate-0"
          }
        />
      </div>
      <div className="p-2">
        <p className="text-zinc-900 text-sm font-medium hover:text-blue-700 transition-all cursor-pointer">
          {title}
        </p>
        <span className="text-xs text-zinc-800">por {author}</span>
        <p
          className={
            borrow === null ? "text-green-700 text-xs" : "text-red-700 text-xs"
          }
        >
          {borrow === null ? "Disponível" : "Indisponível"}
        </p>
      </div>
    </div>
  );
};

export default MinBook;
