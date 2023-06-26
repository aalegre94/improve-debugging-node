const path = require("path"); // para manejar rutas del fs mas facil
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path");

const adminData = require("./admin");
const { Console } = require("console");

router.get("/", (req, res, next) => {
  console.log("shop.js", adminData.productos);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  //__dirname es para el camino desde la raiz, ../ es para sali y lo demas es la ubicacion
});

module.exports = router;
