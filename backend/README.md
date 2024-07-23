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

em caso de senha ou email errados a api dará a seguinte resposta:
```bash
Error: Senha ou email incorretos
```
se algum campo ficar em branco a resposta será:

```bash
Error: Todos os campos devem ser preenchidos
```

## rota `get: '/login/validate'`

Essa rota ira validar seu login utilizando o token: 
deve ser pass nos headers Authorization o token que foi gerado no login e a resposta será o nome e o id do usuário, como visto abaixo:

```json 
{
  "id": 1,
  "name": "James Happer"
}
```

em caso de token inexistente ou em formato errado a api responderá:

```bash 
Error: Você deve ter um token válido
```
## rota `get: '/products/:userId'`

essa rota captura todos os produtos registrados pelo id do usuário, ex:

`/products/1`

```json

[
  {
    "id": 1,
    "name": "Nike Air Max SC",
    "description": "VISUAL OLD SCHOOL. CONFORTO NEW SCHOOL.",
    "price": "360.99",
    "quantity": 8,
    "model": "Air Max",
    "referencia": "NIKE12345",
    "brand": "Nike",
    "image_url": "https://imgnike-a.akamaihd.net/768x768/01122452A11.jpg",
    "user_id": 1,
    "createdAt": "2024-07-22T01:02:41.240Z",
    "updatedAt": "2024-07-22T01:02:41.240Z"
  },
  {
    "id": 2,
    "name": "Adidas Duramo Sl",
    "description": "Versátil tanto para correr quanto para treinar",
    "price": "281.29",
    "quantity": 10,
    "model": "Ultraboost",
    "referencia": "ADIDAS54321",
    "brand": "Adidas",
    "image_url": "https://m.media-amazon.com/images/I/61svcDpQYoL._AC_SY575_.jpg",
    "user_id": 1,
    "createdAt": "2024-07-22T01:02:41.240Z",
    "updatedAt": "2024-07-22T01:02:41.240Z"
  },
  {
    "id": 3,
    "name": "Puma X-Ray 2",
    "description": "Item indispensável para quem busca estilo e conforto",
    "price": "419.99",
    "quantity": 5,
    "model": "X-Ray 2",
    "referencia": "PUMA67890",
    "brand": "Puma",
    "image_url": "https://m.media-amazon.com/images/I/51hr6hXHouL._AC_SY575_.jpg",
    "user_id": 1,
    "createdAt": "2024-07-22T01:02:41.240Z",
    "updatedAt": "2024-07-22T01:02:41.240Z"
  },
  {
    "id": 4,
    "name": "Asics Gel-Sparta 2",
    "description": "Tênis de corrida com suporte extra da Asics",
    "price": "295.99",
    "quantity": 8,
    "model": "Gel-Sparta",
    "referencia": "ASICS98765",
    "brand": "Asics",
    "image_url": "https://imgcentauro-a.akamaihd.net/768x768/9832431B.jpg",
    "user_id": 1,
    "createdAt": "2024-07-22T01:02:41.240Z",
    "updatedAt": "2024-07-22T01:02:41.240Z"
  },
  {
    "id": 5,
    "name": "Tênis Mizuno Wave Dynasty 5",
    "description": "Tênis de alta tecnologia da Mizuno",
    "price": "299.99",
    "quantity": 4,
    "model": "Wave Dynasty",
    "referencia": "MIZUNO11223",
    "brand": "Mizuno",
    "image_url": "https://m.media-amazon.com/images/I/61lwe9KcnKL._AC_SY575_.jpg",
    "user_id": 1,
    "createdAt": "2024-07-22T01:02:41.240Z",
    "updatedAt": "2024-07-22T01:02:41.240Z"
  }
]

```
`/products/2`

```json
[
  {
    "id": 6,
    "name": "Camiseta Nike Sportswear",
    "description": "Tecido jersey de algodão e um logotipo clássico no peito.",
    "price": "72.19",
    "quantity": 25,
    "model": "Icon Futura",
    "referencia": "NIKE14523",
    "brand": "Nike",
    "image_url": "https://imgnike-a.akamaihd.net/768x768/01638818A20.jpg",
    "user_id": 2,
    "createdAt": "2024-07-22T01:02:41.240Z",
    "updatedAt": "2024-07-22T01:02:41.240Z"
  },
  {
    "id": 7,
    "name": "Camisa Polo Lacoste",
    "description": "Camisa polo Slim Fit",
    "price": "319.99",
    "quantity": 35,
    "model": "Slim fit",
    "referencia": "LACOSTE22334",
    "brand": "Lacoste",
    "image_url": "https://m.media-amazon.com/images/I/61LCtujKrCL._AC_SX569_.jpg",
    "user_id": 2,
    "createdAt": "2024-07-22T01:02:41.240Z",
    "updatedAt": "2024-07-22T01:02:41.240Z"
  },
  {
    "id": 8,
    "name": "Camiseta Adidas Essentials",
    "description": "Perfeita para todas as ocasiões. ",
    "price": "129.00",
    "quantity": 20,
    "model": "Essentials",
    "referencia": "ADIDAS33445",
    "brand": "Adidas",
    "image_url": "https://m.media-amazon.com/images/I/71K+qTAswpL._AC_SX569_.jpg",
    "user_id": 2,
    "createdAt": "2024-07-22T01:02:41.240Z",
    "updatedAt": "2024-07-22T01:02:41.240Z"
  },
  {
    "id": 9,
    "name": "Camiseta Básica Reserva",
    "description": "A peça curinga da Reserva que combina com o seu armário inteiro",
    "price": "143.79",
    "quantity": 15,
    "model": "Endorphin",
    "referencia": "SAUCONY55667",
    "brand": "Saucony",
    "image_url": "https://m.media-amazon.com/images/I/41giVC2inSL._AC_SX569_.jpg",
    "user_id": 2,
    "createdAt": "2024-07-22T01:02:41.240Z",
    "updatedAt": "2024-07-22T01:02:41.240Z"
  },
  {
    "id": 10,
    "name": "Moletom Under Armour Rival Fleece",
    "description": "Moletom com capuz com cordão ajustável.",
    "price": "230.76",
    "quantity": 5,
    "model": "Rival Fleece",
    "referencia": "UAS66778",
    "brand": "Under Armour",
    "image_url": "https://m.media-amazon.com/images/I/51ecxCuqdFL._AC_SX569_.jpg",
    "user_id": 2,
    "createdAt": "2024-07-22T01:02:41.240Z",
    "updatedAt": "2024-07-22T01:02:41.240Z"
  }
]
```

em caso de ser usado algum usuário inexistente a api retornará um array vazio 

## rota `Post: '/products`

Essa rota recebe um json com os dados completos do produto e responde com o objeto criado : 

entrada:
```json
 {
  "name": "Under Armour Tribase",
  "description": " Entrega toda resistência necessária para a atividade.",
  "price": "289.99",
  "quantity": 12,
  "model": "Tribase",
  "referencia": "UA71890",
  "brand": "Under Armour",
  "image_url": "https://m.media-amazon.com/images/I/51QYaQL9k4L._AC_SY575_.jpg",
 "user_id": 1
}
```

saída : 

```
{
  "id": 11,
  "name": "Under Armour Tribase",
  "description": " Entrega toda resistência necessária para a atividade.",
  "price": "289.99",
  "quantity": 12,
  "model": "Tribase",
  "referencia": "UA71890",
  "brand": "Under Armour",
  "image_url": "https://m.media-amazon.com/images/I/51QYaQL9k4L._AC_SY575_.jpg",
  "user_id": 1,
  "updatedAt": "2024-07-23T03:31:21.603Z",
  "createdAt": "2024-07-23T03:31:21.603Z"
}

```

Em caso de produto já cadastrado a api dará a seguinte resposta:

```bash
Error: Produto já cadastrado
```

Se algum campo não for preenchido : 

```bash

Error: Todos os campos devem ser preenchidos

```
## rota `Put: '/products/:productId`

Edita o produto que foi dado o Id, recebendo um json coom todos valores preenchidos , alterando o que for necessário:
ex:

`/products/1`

vou alterar a descrição do produto criado no exemplo anterior

```json
 {
  "name": "Under Armour Tribase",
  "description": " Entrega toda resistência necessária para a atividade.",
  "price": "289.99",
  "quantity": 12,
  "model": "Tribase",
  "referencia": "UA71890",
  "brand": "Under Armour",
  "image_url": "https://m.media-amazon.com/images/I/51QYaQL9k4L._AC_SY575_.jpg",
 "user_id": 1
}

```

e api retorna 

```json
{
  "id": 1,
  "name": "Under Armour Tribase",
  "description": " Tênis bonito e barato.",
  "price": "289.99",
  "quantity": 12,
  "model": "Tribase",
  "referencia": "UA71890",
  "brand": "Under Armour",
  "image_url": "https://m.media-amazon.com/images/I/51QYaQL9k4L._AC_SY575_.jpg",
  "user_id": 1,
  "createdAt": "2024-07-22T01:02:41.240Z",
  "updatedAt": "2024-07-23T03:44:47.290Z"
}
```
Se algum campo não for preenchido : 

```bash

Error: Todos os campos devem ser preenchidos
```
em caso de um id não existente ser escolhido a api retornará `null`

## Rota ´Delete: '/products/productId´:

Deleta um produto pelo Id:

ex:

`/product/1` 

a api retornará

```json
{
  "message": "Produto deletado com sucesso"
}
```

em caso de um id não existente: 

```bash
Error: Produto não encontrado
```


