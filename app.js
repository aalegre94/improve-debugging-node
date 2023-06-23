const http = require("http");

const express = require("express");

const app = express();
//midleware
app.get("/favicon.ico", (req, res) => res.status(204));

app.use("/add-product", (req, res, next) => {
  console.log("Antoher midleaware 2");
  res.send("<h1>Add product</h1>");
});

app.use("/", (req, res, next) => {
  console.log("Antoher midleaware");
  res.send("<h1>Hello tiranitar</h1>");
});

app.listen(3000);
