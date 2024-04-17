import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormTitle from "../components/FormTitle";
import FormSection from "../components/FormSection";
import axios from "axios";
import Back from "../components/Back";
import Button from "../components/Button";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState("");

  const loadBook = async () => {
    await axios
      .get(`http://localhost:8080/books/${parseInt(id)}`)
      .then((res) => {
        setBook(res.data);
      });
  };

  useEffect(() => {
    loadBook();
  }, []);

  return (
    <FormSection>
      <div className="w-full flex flex-col gap-4 items-start">
        <Back to="/" />
        <div className="flex gap-4">
          <img
            src={book.cover}
            alt={book.title}
            className="w-60 border-2 rounded-md h-80 object-contain"
          />
          <div className="flex flex-col gap-6 text-sm text-zinc-700">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-blue-700">{book.title}</h1>
              <h3>por: {book.author}</h3>
            </div>

            <div>
              <h4>Categoria(s): </h4>
              <div>
                <p></p>
              </div>
            </div>

            <Button>{book.borrow === null ? "Emprestar" : "Devolver"}</Button>
          </div>
        </div>
      </div>
    </FormSection>
  );
};

export default BookDetails;
