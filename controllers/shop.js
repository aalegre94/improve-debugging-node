const Producto = require("../models/product"); //importo mi clase con mi modelo del producto
//Controla cuando quiero ver el form para agregar un producto

//controla cuando quiero obtener una lista con los productos
exports.getProducts = (req, res, next) => {
  Producto.fetchAll((misProductos) => {
    // console.log("shop.js", misProductos);
    res.render("shop/product-list", {
      prod: misProductos,
      pageTitle: "All Products TI",
      path: "/products",
    });
  }); //obtengo todos los productos
};

exports.getProduct = (req, res, next) => {
  //obetniendo el id para trabajar el elemento
  //aca usamo params xq es un elemento de la ruta
  const proId = req.params.productId;
  Producto.findByid(proId, (misProductos) => {
    console.log("OneProduct", misProductos);
    res.render("shop/product-detail", {
      prod: misProductos,
      pageTitle: "Detalle de Producto",
      path: "/products",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Producto.fetchAll((misProductos) => {
    // console.log("shop.js", misProductos);
    res.render("shop/index", {
      prod: misProductos,
      pageTitle: "My TI Shopa",
      path: "/",
    });
  });
};
//para ver el carrito
exports.getCart = (req, res, next) => {
  res.render("shop/cart", { pageTitle: "Your Cart", path: "/cart" });
};

//para agregar productos desde la vista de detalle
exports.postCart = (req, res, next) => {
  //aca usamos body xq es un elemento del form
  //para usarlo usamos el name de cada elemento html
  const prodId = req.body.productId;
  console.log("postCart - ", prodId);
  res.redirect("/cart");
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", { pageTitle: "Checkout", path: "/checkout" });
};

exports.getOrder = (req, res, next) => {
  res.render("shop/order", { pageTitle: "Your Order", path: "/order" });
};
