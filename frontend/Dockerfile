# Use a imagem base do Node.js
FROM node:18-alpine

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie os arquivos de dependências
COPY package.json package-lock.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código fonte para o diretório de trabalho
COPY . .

# Exponha a porta em que a aplicação será executada
EXPOSE 5173

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]
