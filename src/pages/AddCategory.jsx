import React, { useState } from "react";
import FormSection from "../components/FormSection";
import FormTitle from "../components/FormTitle";
import Form from "../components/Form";
import FormInput from "../components/FormInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const subtitle = "Adicionar categoria de livros";

  const [category, setCategory] = useState("");
  const [messageError, setMessageError] = useState("");
  const navigate = useNavigate();

  const addCategory = () => {
    axios
      .post("http://localhost:8080/books/categories", {
        name: category,
      })
      .then((res) => {
        navigate("/adicionar-livro");
        window.location.reload();
      })
      .catch((err) => setMessageError("Categoria já cadastrada no sistema"));
  };

  return (
    <FormSection>
      <FormTitle subtitle={subtitle} back="/adicionar-livro">
        Adicionar Categoria
      </FormTitle>
      <Form btnFn={addCategory} color="blue" type="button">
        <FormInput setValue={setCategory}>Nome da Categoria</FormInput>
      </Form>
      <p className={messageError !== "" ? "inline text-red-700" : "hidden"}>
        {messageError}
      </p>
    </FormSection>
  );
};

export default AddCategory;
