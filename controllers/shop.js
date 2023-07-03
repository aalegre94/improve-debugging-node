const Producto = require("../models/product"); //importo mi clase con mi modelo del producto
const Carro = require("../models/cart");

exports.getIndex = (req, res, next) => {
  //metodo findAll para traer todo de la bd, se puede poner where para condiciones
  Producto.findAll()
    .then((misProductos) => {
      res.render("shop/index", {
        prod: misProductos,
        pageTitle: "My TI Shop",
        path: "/",
      });
    })
    .catch((err) => {
      // console.log(err);
    });
  // Producto.fetchAll()
  //   .then(([misProductos, fieldData]) => {
  //     res.render("shop/index", {
  //       prod: misProductos,
  //       pageTitle: "My TI Shop",
  //       path: "/",
  //     });
  //   })
  //   .catch((err) => console.log(err));
};
//controla cuando quiero obtener una lista con los productos
exports.getProducts = (req, res, next) => {
  Producto.findAll()
    .then((misProductos) => {
      res.render("shop/product-list", {
        prod: misProductos,
        pageTitle: "All Products TI",
        path: "/products",
      });
    })
    .catch((err) => {
      // console.log(err);
    });

  // Producto.fetchAll()
  //   .then(([misProductos, fieldData]) => {
  //     res.render("shop/product-list", {
  //       prod: misProductos,
  //       pageTitle: "All Products TI",
  //       path: "/products",
  //     });
  //   })
  //   .catch((err) => console.log(err)); //obtengo todos los productos
};

exports.getProduct = (req, res, next) => {
  //obetniendo el id para trabajar el elemento
  //aca usamo params xq es un elemento de la ruta
  const proId = req.params.productId;
  Producto.findByPk(proId)
    .then((miProducto) => {
      // console.log(misProductos[0]);
      res.render("shop/product-detail", {
        prod: miProducto,
        pageTitle: "Detalle de Producto",
        path: "/products",
      });
    })
    .catch((err) => {
      // console.log(err);
    });
};

//para ver el carrito
exports.getCart = (req, res, next) => {
  req.usuario
    .getCarro()
    .then((carro) => {
      console.log(carro);
      return carro
        .getProductos()
        .then((cartProductos) => {
          res.render("shop/cart", {
            pageTitle: "Your Cart",
            path: "/cart",
            misProductos: cartProductos,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
  // Carro.getCart((cart) => {
  //   Producto.fetchAll((misProductos) => {
  //     const cartProductos = [];
  //     for (let miProd of misProductos) {
  //       const cartProductoData = cart.products.find(
  //         (prod) => prod.id === miProd.id
  //       );
  //       if (cartProductoData) {
  //         cartProductos.push({
  //           productData: miProd,
  //           qty: cartProductoData.qty,
  //         });
  //       }
  //     }
  //     res.render("shop/cart", {
  //       pageTitle: "Your Cart",
  //       path: "/cart",
  //       misProductos: cartProductos,
  //     });
  //   });
  // });
};

//para agregar productos desde la vista de detalle
exports.postCart = (req, res, next) => {
  //aca usamos body xq es un elemento del form
  //para usarlo usamos el name de cada elemento html
  const prodId = req.body.productId;
  // console.log("postCart - ", prodId);
  Producto.findByid(prodId, (misProductos) => {
    Carro.addProduct(prodId, misProductos.price);
  });
  res.redirect("/cart");
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodID = req.body.productId;
  Producto.findByid(prodID, (misProductos) => {
    Carro.deleteProduct(prodID, misProductos.price);
    res.redirect("/cart");
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", { pageTitle: "Checkout", path: "/checkout" });
};

exports.getOrder = (req, res, next) => {
  res.render("shop/order", { pageTitle: "Your Order", path: "/order" });
};
