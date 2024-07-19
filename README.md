# weesu-api

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
