import React from "react";
import FormSection from "../components/FormSection";
import FormTitle from "../components/FormTitle";
import Form from "../components/Form";
import FormInput from "../components/FormInput";

const AddCategory = () => {
  const subtitle = "Adicionar categoria de livros";

  return (
    <FormSection>
      <FormTitle subtitle={subtitle}>Adicionar Categoria</FormTitle>
      <Form>
        <FormInput>Nome da Categoria</FormInput>
      </Form>
    </FormSection>
  );
};

export default AddCategory;
