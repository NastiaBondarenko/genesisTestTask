
FROM node:16-alpine

WORKDIR /usr/
COPY . .

RUN npm ci

CMD ["node", "src/app.js"]
EXPOSE 3000