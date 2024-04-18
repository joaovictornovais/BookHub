import React, { useState } from "react";
import FormSection from "../components/FormSection";
import FormTitle from "../components/FormTitle";
import { useParams } from "react-router-dom";
import axios from "axios";
import FormInput from "../components/FormInput";
import Form from "../components/Form";

const Borrow = () => {
  const { id } = useParams();
  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [email, setEmail] = useState();

  const borrowBook = () => {};

  return (
    <FormSection>
      <FormTitle back={`/livros/${id}`}>Empréstimo de livro</FormTitle>
      <Form color="blue" btnText="Emprestar">
        <p className="text-xs px-2 uppercase tracking-wider text-zinc-700">
          Dados do cliente
        </p>
        <div className="space-y-2">
          <FormInput setValue={setNome}>Nome</FormInput>
          <FormInput setValue={setSobrenome}>Sobrenome</FormInput>
          <FormInput setValue={setEmail} type="email">
            E-mail
          </FormInput>
        </div>
      </Form>
    </FormSection>
  );
};

export default Borrow;
