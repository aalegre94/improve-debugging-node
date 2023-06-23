//npm install --save-dev nodemon
//npm install --save express
//npm install --save body-parser
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//midleware
app.get("/favicon.ico", (req, res) => res.status(204));

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  console.log("Antoher midleaware 2");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add product</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("Antoher midleaware");
  res.send("<h1>Hello tiranitar</h1>");
});

app.listen(3000);
