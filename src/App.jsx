import React, { useEffect, useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header setSearch={setSearch} />
    </>
  );
};

export default App;
