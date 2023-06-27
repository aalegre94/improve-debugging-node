const express = require("express");
const router = express.Router();

const productController = require("../controllers/products");
//en este array almacenare los productos

//  /admin/product => GET
router.get("/add-product", productController.getAddProduct);
//console.log("Antoher midleaware 2");
//res.sendFile(path.join(rootDir, "views", "add-product.html"));    //sin motor

//  /admin/add-product => POST
router.post("/add-product", productController.postAddProduct);

// , (req, res, next) => {
//   //console.log(req.body);
//   misProductos.push({ title: req.body.title, price: req.body.price }); //agrego los productos ingresados x el formulario
//   res.redirect("/"); //me voy al inicio
// });

//exportar las rutas y los productos guardados
// exports.rutas = router;
// exports.productos = misProductos;
module.exports = router;
