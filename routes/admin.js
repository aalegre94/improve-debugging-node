const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path");
//en este array almacenare los productos
const misProductos = [];

//  /admin/product => GET
router.get("/add-product", (req, res, next) => {
  //console.log("Antoher midleaware 2");
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Products",
    path: "/admin/add-product",
  });
});

//  /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  //console.log(req.body);
  misProductos.push({ title: req.body.title, price: req.body.price });
  res.redirect("/");
});

//exportar las rutas y los productos
exports.rutas = router;
exports.productos = misProductos;
