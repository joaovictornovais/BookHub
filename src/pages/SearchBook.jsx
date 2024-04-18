import React from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import SearchResult from "../components/SearchResult";
import Button from "../components/Button";

const SearchBook = ({ setSearch, books, search }) => {
  return (
    <main className="p-3 h-screen flex flex-col">
      <div className="flex flex-col items-center gap-2 p-4">
        <h1 className="text-4xl font-bold text-zinc-900">
          <span className="text-blue-700">Book</span>Hub
        </h1>
        <div className="flex items-center gap-1">
          <div className="flex items-center bg-gray-200 rounded-md text-zinc-800">
            <input
              className="p-2 w-[300px] text-sm rounded-md bg-gray-200"
              placeholder="Digite o nome do livro"
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="bg-gray-200 px-2 cursor-pointer">
              <FaSearch />
            </div>
          </div>
          <Button color="blue" link="/adicionar-livro">
            <FaPlus />
          </Button>
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

export default SearchBook;
