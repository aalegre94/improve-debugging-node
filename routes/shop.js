const path = require("path"); // para manejar rutas del fs mas facil
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path");

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  console.log("shop.js", adminData.productos);
  const misProductos = adminData.productos; //recibo los productos y los mando a la plantilla
  res.render("shop", { prod: misProductos, pageTitle: "My Shop", path: "/" });
  //res.sendFile(path.join(rootDir, "views", "shop.html"));
  //__dirname es para el camino desde la raiz, ../ es para sali y lo demas es la ubicacion
});

module.exports = router;
