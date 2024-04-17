import React, { useEffect } from "react";
import MinBook from "./MinBook";
import { Link } from "react-router-dom";

const SearchResult = ({ books }) => {
  return (
    <div className="flex flex-wrap max-w-4xl mx-auto gap-8 justify-center">
      {books.map((book) => (
        <Link key={book.id} to={`/livros/${book.id}`}>
          <MinBook
            cover={book.cover}
            title={book.title}
            author={book.author}
            borrow={book.borrow}
            publisher={book.publisher}
          />
        </Link>
      ))}
    </div>
  );
};

export default SearchResult;
