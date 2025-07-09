# Usa uma imagem oficial do Node.js
FROM node:20-slim

# Define o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Expõe a porta que o app vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD [ "npm", "start" ]