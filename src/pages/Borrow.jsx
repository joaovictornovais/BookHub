import React, { useEffect, useState } from "react";
import FormSection from "../components/FormSection";
import FormTitle from "../components/FormTitle";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import FormInput from "../components/FormInput";
import Form from "../components/Form";

const Borrow = () => {
  const { id } = useParams();
  const [book, setBook] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    await axios
      .get(`http://localhost:8080/books/${parseInt(id)}`)
      .then((res) => setBook(res.data));
  };

  const borrowBook = async () => {
    setLoad(true);
    await axios
      .get(`http://localhost:8080/users?email=${email}`)
      .catch((err) =>
        axios
          .post(`http://localhost:8080/users`, {
            firstName: firstName,
            lastName: lastName,
            email: email,
          })
          .then((res) => {
            axios
              .post(`http://localhost:8080/books/${id}/borrow`, {
                userId: parseInt(res.data.id),
              })
              .then((res) => {
                navigate(`/livros/${id}`);
                window.location.reload();
              });
          })
      )
      .then((res) => {
        if (res.status !== 200) {
        } else {
          axios
            .post(`http://localhost:8080/books/${id}/borrow`, {
              userId: parseInt(res.data.id),
            })
            .then((res) => {
              navigate(`/livros/${id}`);
              window.location.reload();
            });
        }
      });
  };

  return (
    <FormSection>
      <FormTitle back={`/livros/${id}`}>Empréstimo de livro</FormTitle>
      <Form color="blue" btnText="Emprestar" btnFn={borrowBook} type="button">
        <p className="text-xs px-2 uppercase tracking-wider text-zinc-700">
          Dados do cliente
        </p>
        <div className="space-y-2">
          <FormInput setValue={setFirstName}>Nome</FormInput>
          <FormInput setValue={setLastName}>Sobrenome</FormInput>
          <FormInput setValue={setEmail} type="email">
            E-mail
          </FormInput>
        </div>
      </Form>
      <div className={load ? "loader" : "hidden"}></div>
    </FormSection>
  );
};

export default Borrow;
