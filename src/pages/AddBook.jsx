import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import FormTitle from "../components/FormTitle";
import FormSection from "../components/FormSection";
import Form from "../components/Form";
import axios from "axios";

const AddBook = ({ categories }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pages, setPages] = useState("");
  const [cover, setCover] = useState("");
  const [category, setCategory] = useState(0);

  const subtitle =
    "Preencha as informações abaixo para cadastrar um livro em nosso banco de dados.";

  const createBook = () => {
    axios
      .post("http://localhost:8080/books", {
        title: title,
        author: author,
        publisher: publisher,
        pages: pages,
        cover: cover,
      })
      .then((res) =>
        axios.post(`http://localhost:8080/books/${res.data.id}/categories`, {
          categoryId: category,
        })
      );
  };

  return (
    <FormSection>
      <FormTitle subtitle={subtitle} back="/">
        Adicionar Livro
      </FormTitle>
      <Form btnFn={createBook} color="blue">
        <FormInput setValue={setTitle}>Título</FormInput>
        <FormInput setValue={setAuthor}>Autor</FormInput>
        <FormInput setValue={setPublisher}>Editora</FormInput>
        <FormInput setValue={setPages}>Qtd. de páginas</FormInput>
        <FormInput setValue={setCover}>URL da capa</FormInput>
        <div className="flex items-center gap-2 justify-between px-2">
          <label>Categoria</label>
          <div className="flex gap-2 items-center">
            <select
              className="p-2 rounded-md text-sm text-zinc-700 bg-zinc-200"
              onChange={(e) => setCategory(e.target.value)}
              defaultValue={0}
              required
            >
              <option value={0} disabled>
                SELECIONE
              </option>
              {categories.map((category) => (
                <option key={category.id} value={parseInt(category.id)}>
                  {category.name}
                </option>
              ))}
            </select>
            <Button link="/adicionar-categoria" color="blue">
              <FaPlus />
            </Button>
          </div>
        </div>
      </Form>
    </FormSection>
  );
};

export default AddBook;
