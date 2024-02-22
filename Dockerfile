FROM node:18.18.2-alpine3.18

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 5173

CMD [ "yarn", "dev" ]