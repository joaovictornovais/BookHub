import React from "react";
import { FaSearch } from "react-icons/fa";
import SearchResult from "./SearchResult";

const Hero = ({ setSearch, books }) => {
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
          <button className="bg-blue-700 p-2 rounded-md">
            <FaSearch className="text-zinc-100" />
          </button>
        </div>
      </div>
      <SearchResult books={books} />
    </main>
  );
};

export default Hero;
