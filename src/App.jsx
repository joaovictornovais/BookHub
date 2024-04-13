import React from "react";
import Hero from "./components/Hero";

const App = () => {
  const books = [
    {
      id: 1,
      title: "Your Name Edição Única",
      cover: "https://m.media-amazon.com/images/I/6175PH7eGwL._AC_UL320_.jpg",
      author: "Makoto Shinkai e Ranmaru Kotone",
      status: "null",
    },
    {
      id: 2,
      title: "Chainsaw Man Vol. 1",
      cover: "https://m.media-amazon.com/images/I/71QS2yNxhoL._AC_UL320_.jpg",
      author: "Tatsuki Fujimoto",
      status: {
        borrowedIn: "2024-4-13T08:55:22",
      },
    },
    {
      id: 3,
      title: "Jujutsu Kaisen 0",
      cover: "https://m.media-amazon.com/images/I/71sicR3ldaL._AC_UL320_.jpg",
      author: "Gege Akutami",
      status: "null",
    },
  ];

  return (
    <>
      <Hero books={books} />
    </>
  );
};

export default App;
