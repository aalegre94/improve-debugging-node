//npm install --save-dev nodemon
//npm install --save express
//npm install --save body-parser
//npm install --save ejs pug express-handlebars
const path = require("path");
const express = require("express"); //import express
const bodyParser = require("body-parser");

const app = express(); //declaro express
app.set("view engine", "pug");
app.set("views", "views");
//archivos con las rutas
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
//midleware
app.get("/favicon.ico", (req, res) => res.status(204)); //funcion para que no repita la salida de consola
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
//rutas con patron y sin
app.use("/admin", adminData.rutas);
app.use(shopRoutes);
//funcion de error
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page not found" });
});
//
app.listen(3000);
