const Producto = require("../models/product"); //importo mi clase con mi modelo del producto
//Controla cuando quiero ver el form para agregar un producto

//controla cuando quiero obtener una lista con los productos
exports.getProducts = (req, res, next) => {
  Producto.fetchAll((misProductos) => {
    console.log("shop.js", misProductos);
    res.render("shop/product-list", {
      prod: misProductos,
      pageTitle: "All Products TI",
      path: "/",
    });
  }); //obtengo todos los productos
};

exports.getIndex = (req, res, next) => {
  Producto.fetchAll((misProductos) => {
    console.log("shop.js", misProductos);
    res.render("shop/index", {
      prod: misProductos,
      pageTitle: "My TI Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", { pageTitle: "Your Cart", path: "/cart" });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", { pageTitle: "Checkout", path: "/checkout" });
};
