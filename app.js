const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Entro en el midleware");
  next();
});

app.use((req, res, next) => {
  console.log("Antoher midleaware");
  res.send("<h1>Hello tiranitar</h1>");
});

const server = http.createServer(app);

server.listen(3000);
