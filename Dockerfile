

FROM node:8-alpine

RUN npm install -g serve
COPY ./build /usr/src/chuck-norris-jokes/build

EXPOSE 5000

WORKDIR /usr/src/chuck-norris-jokes

USER node

CMD serve -p $PORT -s build
