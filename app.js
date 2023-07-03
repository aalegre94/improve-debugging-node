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
const Carro = require("./models/cart");
const CarroItem = require("./models/cart-item");

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

//obtener usuario creado
app.use((req, res, next) => {
  Usuario.findByPk(1)
    .then((usuario) => {
      req.usuario = usuario;
      //   console.log(req.usuario);
      next();
    })
    .catch((err) => {
      //   console.log(err);
    });
});

//rutas con patron y sin
app.use("/admin", adminRoutes);
app.use(shopRoutes);

//funcion de error
app.use(errorController.get404);

//relaciones entre modelos
Producto.belongsTo(Usuario, { constraints: true, onDelete: "CASCADE" });
//la llave foranea se creara en el 2do modelo(Producto)
//1 .. N - 1 a mucho
Usuario.hasMany(Producto);
//1 a 1 - 1 a 1
Usuario.hasOne(Carro);
Carro.belongsTo(Usuario);
//N .. N - muchos a muchos
Carro.belongsToMany(Producto, { through: CarroItem });
Producto.belongsToMany(Carro, { through: CarroItem });
sequelize
  //.sync({ force: true }) //Para forzar a los modelos, si es que hay cambios en los datos o relaciones
  .sync()
  .then((resultado) => {
    return Usuario.findByPk(1);
    // console.log(resultado);
  })
  .then((usuario) => {
    if (!usuario) {
      return Usuario.create({ name: "Angel", email: "fisiangel.14@gmail.com" });
    }
    return usuario;
  })
  .then((usuario) => {
    return usuario.createCarro();
    // console.log(usuario);
  })
  .then((carro) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

//puerto escucha
