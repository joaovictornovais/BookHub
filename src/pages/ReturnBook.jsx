import React, { useEffect, useState } from "react";
import FormSection from "../components/FormSection";
import FormTitle from "../components/FormTitle";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";

const ReturnBook = () => {
  const { id } = useParams();
  const subtitle = "Retornar livro ao estoque";
  const navigate = useNavigate();

  const [book, setBook] = useState("");
  const [load, setLoad] = useState(false);

  const loadBook = async () => {
    await axios
      .get(`http://localhost:8080/books/${id}`)
      .then((res) => setBook(res.data));
  };

  const returnBook = async () => {
    setLoad(true);
    axios
      .get(`http://localhost:8080/users?email=${book.borrow.borrowedTo}`)
      .then((res) =>
        axios.delete(
          `http://localhost:8080/books/${id}/borrow?userId=${res.data.id}`,
          {}
        )
      )
      .then((res) => {
        if (res.status === 204) {
          navigate("/");
          window.location.reload();
        }
      });
  };

  useEffect(() => {
    loadBook();
  }, []);

  return (
    <FormSection>
      <FormTitle subtitle={subtitle} back={`/livros/${id}`}>
        Confirmar devolução
      </FormTitle>
      <div>
        <p className="text-zinc-600">
          Você confirma que o livro{" "}
          <span className="text-zinc-900 font-medium">{book.title}</span> foi
          devolvido?
        </p>
        <div className="flex gap-2 items-center justify-center">
          <Link to="/livros/1">
            <Button color="blue" btnFn={returnBook}>
              Sim
            </Button>
          </Link>
          <Link to="/livros/1">
            <Button color="red">Não</Button>
          </Link>
        </div>
      </div>
      <div className={load ? "loader" : "hidden"}></div>
    </FormSection>
  );
};

export default ReturnBook;
