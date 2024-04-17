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
              ? "w-36 h-56 object-contain mx-auto cursor-pointer"
              : "w-36 h-56 mx-auto cursor-pointer saturate-0"
          }
        />
      </div>
      <div className="flex flex-col h-[120px] m-2 gap-2">
        <p className="text-zinc-900 font-medium hover:text-blue-700 transition-all cursor-pointer">
          {title}
        </p>
        <div>
          <span className="text-sm text-zinc-800">por {author}</span>
          <p
            className={
              borrow === null
                ? "text-green-700 text-sm"
                : "text-red-700 text-sm"
            }
          >
            {borrow === null ? "Disponível" : "Indisponível"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MinBook;
