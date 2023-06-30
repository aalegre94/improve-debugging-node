const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

//  /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

//  /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

//  /admin/products => GET
router.get("/products", adminController.getProductsA);

router.get("/edit-product/:productId", adminController.getEditProduct);

router.post("/edit-product", adminController.postEditProduct);

module.exports = router;
