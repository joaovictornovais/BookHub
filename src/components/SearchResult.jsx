import React, { useEffect } from "react";
import MinBook from "./MinBook";

const SearchResult = ({ books }) => {
  return (
    <div className="flex flex-wrap max-w-4xl mx-auto gap-8">
      {books.map((book) => (
        <MinBook
          key={book.id}
          cover={book.cover}
          title={book.title}
          author={book.author}
          borrow={book.borrow}
          publisher={book.publisher}
        />
      ))}
    </div>
  );
};

export default SearchResult;
