import React, { useEffect, useState } from "react";
import SearchBook from "./pages/SearchBook";
import AddBook from "./pages/AddBook";
import AddCategory from "./pages/AddCategory";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  const loadBooks = async () => {
    await axios
      .get("http://localhost:8080/books")
      .then((res) => setBooks(res.data));
  };

  const loadCategories = async () => {
    await axios
      .get("http://localhost:8080/books/categories")
      .then((res) => setCategories(res.data));
  };

  useEffect(() => {
    loadBooks();
    loadCategories();
  }, []);

  const filteredBooks =
    search === ""
      ? []
      : books.filter((book) =>
          book.title.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SearchBook
                books={filteredBooks}
                search={search}
                setSearch={setSearch}
              />
            }
          />
          <Route
            path="/adicionar-livro"
            element={<AddBook categories={categories} />}
          />
          <Route
            path="/adicionar-categoria"
            element={<AddCategory categories={categories} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
