FROM node:16

COPY . .

WORKDIR /usr/src/app

RUN yarn install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ]