const path = require("path"); // para manejar rutas del fs mas facil
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  //__dirname es para el camino desde la raiz, ../ es para sali y lo demas es la ubicacion
});

module.exports = router;
