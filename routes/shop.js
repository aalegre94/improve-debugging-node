const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shop");

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);
//ruta con 1 valor especifico
router.get("/products/:productId", shopController.getProduct);

router.get("/cart", shopController.getCart);

router.get("/checkout", shopController.getCheckout);

router.get("/order", shopController.getOrder);

module.exports = router;
