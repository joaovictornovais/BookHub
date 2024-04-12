import React from "react";
import MinBook from "./MinBook";

const SearchResult = ({ books }) => {
  return (
    <div className="flex flex-wrap max-w-4xl mx-auto gap-8">
      {books.map((book) => (
        <MinBook
          cover={book.cover}
          title={book.title}
          author={book.author}
          status={book.status}
        />
      ))}
    </div>
  );
};

export default SearchResult;
