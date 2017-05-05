FROM node:6.10.2-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN mkdir build

RUN npm install -g mocha chai babel-cli && \
    npm install --unsafe-perm && \
    npm cache clean

RUN npm run test

CMD npm start