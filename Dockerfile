FROM node:lts AS build
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci
COPY . /app
RUN npm run build

FROM node:lts
RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/build .
EXPOSE 4000
ENTRYPOINT [ "serve", "-s", ".", "-l", "4000" ]
