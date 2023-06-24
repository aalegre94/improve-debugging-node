const path = require("path"); // para manejar rutas del fs mas facil
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  //__dirname es para el camino desde la raiz, ../ es para sali y lo demas es la ubicacion
});

module.exports = router;
