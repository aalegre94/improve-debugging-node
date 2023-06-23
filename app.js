//npm install --save-dev nodemon
//npm install --save express
//npm install --save body-parser
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//rutas
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
//midleware
app.get("/favicon.ico", (req, res) => res.status(204)); //funcion para que no repita la salida de consola
app.use(bodyParser.urlencoded({ extended: false }));
//rutas con patron y sin
app.use("/admin", adminRoutes);
app.use(shopRoutes);
//funcion de error
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});
//
app.listen(3000);
