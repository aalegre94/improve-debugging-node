const express = require("express");
const router = express.Router();

const productController = require("../controllers/products");

router.get("/", productController.getProducts);
//res.sendFile(path.join(rootDir, "views", "shop.html"));
//__dirname es para el camino desde la raiz, ../ es para sali y lo demas es la ubicacion
// });

module.exports = router;
