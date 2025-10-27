FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "cli.js", "--port", "3000", "--origin", "https://google.com"]
