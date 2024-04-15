import React from "react";
import { FaPlus } from "react-icons/fa";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import FormTitle from "../components/FormTitle";
import FormSection from "../components/FormSection";
import Form from "../components/Form";

const AddBook = () => {
  const subtitle =
    "Preencha as informações abaixo para cadastrar um livro em nosso banco de dados.";

  return (
    <FormSection>
      <FormTitle subtitle={subtitle}>Adicionar Livro</FormTitle>
      <Form>
        <FormInput>Título</FormInput>
        <FormInput>Autor</FormInput>
        <FormInput>Editora</FormInput>
        <FormInput>Qtd. de páginas</FormInput>
        <FormInput>URL da capa</FormInput>
        <div className="flex items-center gap-2 justify-between px-2">
          <label>Categoria</label>
          <div className="flex gap-2 items-center">
            <select
              className="p-2 rounded-md text-sm text-zinc-700 bg-zinc-200"
              required
            >
              <option>Mangá</option>
            </select>
            <Button link="/adicionar-categoria">
              <FaPlus />
            </Button>
          </div>
        </div>
      </Form>
    </FormSection>
  );
};

export default AddBook;
