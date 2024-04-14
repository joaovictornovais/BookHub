import React from "react";
import { FaPlus } from "react-icons/fa";

const AddBook = () => {
  return (
    <section className="p-3 h-screen">
      <div className="flex flex-col items-center p-4 gap-4">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-4xl font-semibold text-blue-600">
            Adicionar Livro
          </h1>
          <p className="text-zinc-500">
            Preencha as informações para adicionar um novo livro ao nosso banco
            de dados.
          </p>
        </div>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 justify-between">
              <label>Título</label>
              <input
                className="p-2 rounded-md text-sm text-zinc-700 bg-zinc-200"
                required
              />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <label>Autor</label>
              <input
                className="p-2 rounded-md text-sm text-zinc-700 bg-zinc-200"
                required
              />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <label>Editora</label>
              <input
                className="p-2 rounded-md text-sm text-zinc-700 bg-zinc-200"
                required
              />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <label>Qtd. de Páginas</label>
              <input
                className="p-2 rounded-md text-sm text-zinc-700 bg-zinc-200"
                required
              />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <label>URL da imagem de capa</label>
              <input
                className="p-2 rounded-md text-sm text-zinc-700 bg-zinc-200"
                required
              />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <label>Categoria</label>
              <div className="flex gap-2 items-center">
                <select
                  className="p-2 rounded-md text-sm text-zinc-700 bg-zinc-200"
                  required
                >
                  <option>Mangá</option>
                </select>
                <button className="p-2 rounded-md bg-blue-700">
                  <FaPlus className="text-zinc-50" />
                </button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="p-2 text-zinc-200 bg-blue-700 border-2 border-blue-700 rounded-md"
          >
            Adicionar
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddBook;
