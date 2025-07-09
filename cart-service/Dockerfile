# Usa uma imagem oficial do Node.js
FROM node:20-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Expõe a porta que o serviço vai rodar
EXPOSE 3002

CMD [ "npm", "start" ]