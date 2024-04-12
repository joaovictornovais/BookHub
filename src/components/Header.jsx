import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = ({ setSearch }) => {
  return (
    <header className="bg-gray-50 p-4 fixed w-full">
      <nav className="flex justify-between max-w-6xl mx-auto items-center gap-4">
        <h2 className="font-[Roboto] font-medium text-2xl">
          <span className="text-blue-600">Book</span>
          <span className="text-zinc-900">Hub</span>
        </h2>
        <div className="flex gap-4 items-center">
          <input
            className="bg-gray-200 p-2 rounded-md text-sm text-gray-700 sm:w-[300px]"
            placeholder="Digite o nome do livro"
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="text-blue-600 cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
