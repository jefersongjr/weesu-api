# Weesu Storage 🏬

## 🚀 Começando

![Imagem do Projeto](https://raw.githubusercontent.com/jefersongjr/weesu-api/main/frontend/src/assets/weesubg.png)


O Weesu Storage, foi desenvolvido como parte de um desafio técnico para o processo seletivo da empresa [Weesu](https://weesu.com.br). O desafio consistia em criar um banco de dados e uma API REST que se conectasse a um front-end. O front-end deveria incluir uma página de login com validação e funcionalidades para listar, criar e editar produtos. A aplicação foi construída utilizando React, Node, Postgres e Docker.

## Deploy 💻

As credenciais de acesso são : 

```
User: jim_happer@ds.com
password: senha
```

Veja o projeto em funcionamento [aqui](https://weesu-api-xupz.vercel.app/).

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


## 🛠️ Construído com

* - Node.js
* - Express
* - Sequelize
* - PostgreSQL
* - React
* - JWT

## ✒️ Autor

* **Jeferson Gomes** - *Trabalho Inicial* - [LinkdIn](https://www.linkedin.com/in/jefersongjr/)

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.
