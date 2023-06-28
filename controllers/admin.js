const Producto = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add TI Products",
    path: "/admin/add-product",
  });
};

//Controla cuando ya llene el form y lo que quiero hacer con la data
exports.postAddProduct = (req, res, next) => {
  const myProducto = new Producto(req.body.title, req.body.price); //instancio un nuevo producto
  myProducto.save(); //lo guardo en el array
  res.redirect("/");
};

exports.getProductsA = (req, res, next) => {
  Producto.fetchAll((misProductos) => {
    console.log("admin-c", misProductos);
    res.render("admin/products", {
      prod: misProductos,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};
