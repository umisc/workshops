FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY .env ./

RUN npm install

COPY . .

EXPOSE 2525
CMD [ "npm", "start" ]
