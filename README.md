# Weesu Storage 🏬

## 🚀 Começando

O Weesu Storage, foi desenvolvido como parte de um desafio técnico para o processo seletivo da empresa [Weesu](https://weesu.com.br). O desafio consistia em criar um banco de dados e uma API REST que se conectasse a um front-end. O front-end deveria incluir uma página de login com validação e funcionalidades para listar, criar e editar produtos. A aplicação foi construída utilizando React, Node, Postgres e Docker.

Consulte **[Implantação](#-implanta%C3%A7%C3%A3o)** para saber como implantar o projeto.

### 📋 Pré-requisitos:

Inicialmente você precisará ter instalados:

```
*v20.15.1
*Docker version 27.0.3
*Docker Compose version v2.5.0
*Npm 10.7.0
```
### 🔧 Rodando o Projeto localmente:


<details>
  <summary> Clique para ver o passo a passo da instalação </summary>
    
  ### 1- Crie um fork e clone o repositório :

ex:
```bash
git clone https://github.com/jefersongjr/weesu-api.git

```
### 2- navegue até o diretório do `/weesu/frontend` :

ex:
```
cd /weesu/frontend
```
### 3- mude o nome do arquivo .envExample para .env e instale as dependências

ex

```bash
mv .envExample .env
npm install
```

### 4- navegue até a pasta do `/weesu/backend e renomeie o envExample` :

ex:
```bash
cd ../backend
mv .envExample .env
```
### 5- construa a estrutura inicial da aplicação com os comandos: 

```bash
npm instal
npm run build
```

### 6- Monte os containers da aplicação usando o docker compose:  


```bash
    docker-compose up --build
````

### 7- crie e popule os dbs com comando: 
```bash
npm run db:init
```

</details>

## Se tudo deu certo até aqui é só acessar `http://localhost:5173/` o projeto ja estará funcionando 

Para mais detalhes sobre o front-end, veja o [README do front-end](https://github.com/jefersongjr/weesu-api/tree/main/frontend#readme).



```
inicie o banco de dados:

```
npm run db:init
```
Após a criação do banco de dados e a aplicação dos seeders, você pode apagar ou comentar os arquivos de migração e seeders no diretório do projeto, conforme necessário.

## Rotas 

* Rota `/login`: 🧑‍⚕️

``` JSON
{
  "email": "jim_happer@ds.com",
  "password": "senha"
}

ou

{
  "email": "ds_manager@dm.com",
  "password": "senha2"
}
```
### A resposta da requisição ira gerar um token necessário para a rota `validate` 
### ex: 

``` JSON
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFtZXMgSGFwcGVyIiwiZW1haWwiOiJqaW1faGFwcGVyQGRzLmNvbSIsImlhdCI6MTcyMTM0NjU5NywiZXhwIjoxNzIxOTUxMzk3fQ.o6V0AIpD8O4Ffo8HijtudXfVKVMhxSHwHyXHvC8U5r4"
}

```

* Rota `validate`
## PRECISA DO TOKEN EM `HEADERS.AUTHORIZATION` E A RESPOSTA SERÁ:

``` JSON
{}
```

* Rota `sign-up`
## PRECISA DO TOKEN EM `HEADERS.AUTHORIZATION` E A RESPOSTA SERÁ:

``` JSON
{
 "name": "Dwight Schrute",
 "password": "senha2",
 "email": "ds_manager@dm.com"
}
```

## A respota:

``` JSON
{
  "id": 16,
  "name": "Dwight Schrute",
  "email": "ds_manager@dm.com",
  "password": "$2a$10$ZRY63BU4Nw2Q1GCTh8onzedMjv.35HZAPhC3gv1EzpKMLuWAiqO/K",
  "updatedAt": "2024-07-19T00:14:03.433Z",
  "createdAt": "2024-07-19T00:14:03.433Z"
}
```
