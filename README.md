[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript
[REACT__BADGE]: https://img.shields.io/badge/React-005CFE?style=for-the-badge&logo=react
[PROJECT__BADGE]: https://img.shields.io/badge/ðŸ“±Visit_this_project-000?style=for-the-badge&logo=project
[PROJECT__URL]: https://github.com/Fernanda-Kipper/Readme-Templates

<h1 align="center" style="font-weight: bold;">BookHub 📚</h1>

![react][REACT__BADGE]
![javascript][JAVASCRIPT__BADGE]

<p align="center">
  <a href="#about">Sobre</a> •
  <a href="#started">Começando</a> •
  <a href="#routes">Rotas da aplicação</a>
</p>


<p align="center" style=>
  <img src="https://github.com/joaovictornovais/bookhub/assets/80803417/13f0ba94-f9d1-4358-b3ad-2c415f0dc8f7" alt="Search Books" width="400px" />
</p>

<h2 id="about">🌪 Sobre</h2>

Front-end feito em React.js para consumir a API do [BookHub-API](https://github.com/joaovictornovais/BookHub-API/)

<h2 id="started">🚀 Começando</h2>

<h3>Pré-Requisitos</h3>

- [Git](https://github.com)
- [NodeJS](https://nodejs.org/en)
- [yarn](https://yarnpkg.com/)
- [BookHub-API](https://github.com/joaovictornovais/BookHub-API/)


<h3>Clonando</h3>

```bash
git clone git@github.com:joaovictornovais/bookhub.git
```

<h3>Começando</h3>

```bash
cd bookhub
yarn install
yarn dev
```
⚠ Importante: Certifique-se de estar com a API do BookHub rodando simultaneamente.

<h2 id="routes">🚉 Rotas da Aplicação</h2>

| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>/livros</kbd>     | página principal
| <kbd>/livros/{id}</kdb> | página de informações de um livro X
| <kbd>/livros/{id}/emprestar</kbd> | página para emprestar um livro X a um cliente Y
| <kbd>/livros/{id}/devolver</kbd> | página para devolução de um livro
| <kbd>/adicionar-livro</kbd>     | página para adicionar um livro
| <kbd>/adicionar-categoria</kbd>     | página para adicionar uma categoria
