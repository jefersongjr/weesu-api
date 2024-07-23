# Backend API

Este projeto é um backend simples em Node.js usando Express e Sequelize para gerenciamento de usuários e produtos. O backend inclui rotas para login, validação de login, criação, edição e uma rota para excluir o produto.

## Funcionalidades

- Login de usuários
- Criação de produtos
- Validação de login
- edição de produtos
- Exclusão de produto

## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- PostgreSQL
- bcryptjs
- jsonwebtoken
- body-parser
- cors

## rota `Post: '/login'`

Essa rota recebe um json com login e senha e gera um token usando JWT : 
Obs: no banco de dados essa senha é criptografada com bcrypt


```json 
{
  "email": "jim_happer@ds.com",
  "password": "senha"
}
```

a resposta será como essa: 

```json 
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFtZXMgSGFwcGVyIiwiZW1haWwiOiJqaW1faGFwcGVyQGRzLmNvbSIsImlkIjoxLCJpYXQiOjE3MjE3MDQzODEsImV4cCI6MTcyMjMwOTE4MX0.lB0fEgnWwAF5bJPa9ToqAG6gVgMGEILuuZB7MSO_tbY"
}
```
