//npm install --save-dev nodemon
//npm install --save express
//npm install --save body-parser
//npm install --save ejs pug express-handlebars
const path = require("path");
const express = require("express"); //import express
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
//const {engine} = require('express-handlebars')

const app = express(); //declaro express

//cargando pug para las plantillas
//eje viene integrado como pug
app.set("view engine", "ejs");
//app.engine("hbs", expressHbs()); //creando el motor, pug ya viene creado
//app.engine('has', engine({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}));
//app.set("view engine", "hbs"); //motor hbs
//app.set("view engine", "pug"); //motor pug
app.set("views", "views"); //donde estan nuestas vistas

//archivos con las rutas
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//midleware
app.get("/favicon.ico", (req, res) => res.status(204)); //funcion para que no repita la salida de consola x el favicon
app.use(bodyParser.urlencoded({ extended: false })); //para q salga bien el body del request
app.use(express.static(path.join(__dirname, "public"))); //para carga contenido static

//rutas con patron y sin
app.use("/admin", adminData.rutas);
app.use(shopRoutes);

//funcion de error
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page not found q sed" });
});

//puerto escucha
app.listen(3000);
