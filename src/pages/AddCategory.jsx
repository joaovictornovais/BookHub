import React, { useState } from "react";
import FormSection from "../components/FormSection";
import FormTitle from "../components/FormTitle";
import Form from "../components/Form";
import FormInput from "../components/FormInput";
import axios from "axios";

const AddCategory = ({ categories }) => {
  const subtitle = "Adicionar categoria de livros";

  const [category, setCategory] = useState("");

  const addCategory = () => {
    axios.post("http://localhost:8080/books/categories", {
      name: category,
    });
  };

  return (
    <FormSection>
      <FormTitle subtitle={subtitle} back="/adicionar-livro">
        Adicionar Categoria
      </FormTitle>
      <Form btnFn={addCategory}>
        <FormInput setValue={setCategory}>Nome da Categoria</FormInput>
      </Form>
    </FormSection>
  );
};

export default AddCategory;
