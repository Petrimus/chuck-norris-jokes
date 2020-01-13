FROM node:8-alpine as build-stage

WORKDIR /usr/src/
RUN apk add --no-cache git
RUN git clone https://github.com/Petrimus/chuck-norris-jokes.git 
WORKDIR /usr/src/chuck-norris-jokes

RUN npm install && \
    npm update && \
    npm audit fix && \
    npm run build

FROM node:8-alpine

RUN npm install -g serve
COPY --from=build-stage /usr/src/chuck-norris-jokes/build /usr/src/chuck-norris-jokes/build

EXPOSE 5000

WORKDIR /usr/src/chuck-norris-jokes

USER node

CMD ["serve", "-p", "5000", "build"]
