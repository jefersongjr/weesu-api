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
### 🔧 Configuração Inicial:

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

# 7- crie e popule os dbs com comando: 
```bash
npm run db:init
```
## Se tudo deu certo até aqui é só acessar `http://localhost:5173/` o projeto ja estará funcionando 


## Como Usar:

Navegue até o diretório raiz do backend e execute o seguinte comando para instalar as dependências necessárias:

```BASH
npm install

npm run build

npm run sequelize init
```
**Configuração do Banco de Dados**

Abra o arquivo `backend/build/database/config/config.json` e atualize as credenciais do banco de dados conforme necessário:

```json
{
  "development": {
    "username": "root",
    "password": "password",
    "database": "your_db",
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": "password",
    "database": "your_db_test",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": "password",
    "database": "your_db",
    "host": "localhost",
    "dialect": "postgres"
  }
}

```
Inicie o container do app

```bash
docker-compose up --build
```
com o container funcionando

Vá até o diretório `/backend/src/database/migrations` e remova os comentários das migrações que deseja aplicar. Por exemplo

```javascript
module.exports = {
  up: async (QueryInterface, DataTypes) => {
    await QueryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fullname: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: async (QueryInterface) => {
    await QueryInterface.dropTable('users');
  },
};
```

Vá até o diretório `/backend/src/database/seeders` e remova os comentários dos seeders que deseja aplicar. Por exemplo:

```javascript
'use strict';
module.exports = {
  up: async (QueryInterface) => {
    await QueryInterface.bulkInsert('users', [
      {
        fullname: 'James Happer',
        password:
          '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
        // senha: secret_admin
        email: 'jim_happer@ds.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullname: 'Dwight Schrute',
        password:
          '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
        // senha: secret_user
        email: 'ds_manager@dm.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (QueryInterface) => {
    await QueryInterface.bulkDelete('users', {}, {});
  },
};


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
