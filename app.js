//npm install --save-dev nodemon
//npm install --save express body-parser ejs mysql2 sequelize
const path = require("path");
const express = require("express"); //import express
const bodyParser = require("body-parser");

const app = express(); //declaro express

//cargando pug para las plantillas
//eje viene integrado como pug
app.set("view engine", "ejs");
app.set("views", "views"); //donde estan nuestas vistas

//importo los archivos con las rutas
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");
const sequelize = require("./util/database");
const Producto = require("./models/product");
const Usuario = require("./models/user");

// db.execute("SELECT * FROM productos")
//   .then((resultado) => {
//     console.log(resultado[0]);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//midleware
app.get("/favicon.ico", (req, res) => res.status(204)); //funcion para que no repita la salida de consola x el favicon
app.use(bodyParser.urlencoded({ extended: false })); //para q salga bien el body del request
app.use(express.static(path.join(__dirname, "public"))); //para carga contenido static

//rutas con patron y sin
app.use("/admin", adminRoutes);
app.use(shopRoutes);

//funcion de error
app.use(errorController.get404);

//relaciones entre modelos
Producto.belongsTo(Usuario, { constraints: true, onDelete: "CASCADE" });
//1 a muchos(N)
Usuario.hasMany(Producto);

sequelize
  .sync({ force: true })
  .then((resultado) => {
    // console.log(resultado);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

//puerto escucha
