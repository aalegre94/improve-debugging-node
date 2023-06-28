const Producto = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add TI Products",
    path: "/admin/add-product",
  });
};

//Controla cuando ya llene el form y lo que quiero hacer con la data
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  const myProducto = new Producto(title, imageUrl, description, price); //instancio un nuevo producto
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
