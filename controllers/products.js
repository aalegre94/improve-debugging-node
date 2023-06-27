const Producto = require("../models/product"); //importo mi clase
//Controla cuando quiero ver el form para agregar un producto
exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
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
//controla cuando quiero obtener una lista con los productos
exports.getProducts = (req, res, next) => {
  Producto.fetchAll((misProductos) => {
    console.log("shop.js", misProductos);
    res.render("shop", {
      prod: misProductos,
      pageTitle: "My TIW Shop",
      path: "/",
    });
  }); //obtengo todos los productos
};
