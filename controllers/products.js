const misProductos = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add TI Products",
    path: "/admin/add-product",
  }); //para pug
};

exports.postAddProduct = (req, res, next) => {
  misProductos.push({ title: req.body.title, price: req.body.price });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  console.log("shop.js", misProductos);
  //const misProductos = adminData.productos; //recibo los productos y los mando a la plantilla
  res.render("shop", {
    prod: misProductos,
    pageTitle: "My TIW Shop",
    path: "/",
  });
};
