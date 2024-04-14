import React from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import SearchResult from "./SearchResult";

const Hero = ({ setSearch, books, search }) => {
  return (
    <main className="p-3 h-screen flex flex-col">
      <div className="flex flex-col items-center gap-2 p-4">
        <h1 className="text-4xl font-bold text-zinc-900">
          <span className="text-blue-700">Book</span>Hub
        </h1>
        <div className="flex items-center gap-1">
          <input
            className="bg-gray-200 p-2 w-[300px] text-sm rounded-md text-zinc-800"
            placeholder="Digite o nome do livro"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-blue-700 p-2 rounded-md border-2 border-blue-700">
            <FaSearch className="text-zinc-100" />
          </button>
          <button className="bg-zinc-100 p-2 rounded-md border-2 border-blue-700">
            <FaPlus className="text-blue-700" />
          </button>
        </div>
      </div>
      <SearchResult books={books} />
      <div
        className={
          search !== "" && books.length > 0
            ? "hidden"
            : "inline text-center text-2xl text-zinc-400 max-w-[400px] mx-auto p-6"
        }
      >
        <p className={search === "" ? "inline" : "hidden"}>
          Digite o nome do livro para verificar disponibilidade
        </p>
        <p
          className={search !== "" && books.length === 0 ? "inline" : "hidden"}
        >
          Livro não encontrado!
        </p>
      </div>
    </main>
  );
};

export default Hero;
