import React, { useState } from "react";
import Hero from "./components/Hero";

const App = () => {
  const [search, setSearch] = useState();

  const books = [
    {
      id: 1,
      title: "Jujutsu Kaisen: Batalha de Feiticeiros Vol. 11",
      cover: "https://m.media-amazon.com/images/I/71zBO2JVYUL._AC_UL320_.jpg",
      author: "Gege Akutami",
      status: {
        borrowedIn: "2024-04-12T16:23:01",
      },
    },
    {
      id: 2,
      title: "Tokyo Ghoul Vol. 1: 01",
      cover:
        "https://m.media-amazon.com/images/I/516X03mTEmL._SY445_SX342_.jpg",
      author: "Sui Ishida",
      status: "null",
    },
  ];

  return (
    <>
      <Hero setSearch={setSearch} books={books} />
    </>
  );
};

export default App;
