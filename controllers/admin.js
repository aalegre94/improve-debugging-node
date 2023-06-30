const Producto = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add TI Products",
    path: "/admin/add-product",
    editing: false,
  });
};

//Controla cuando ya llene el form y lo que quiero hacer con la data
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  const myProducto = new Producto(null, title, imageUrl, description, price); //instancio un nuevo producto
  myProducto.save(); //lo guardo en el array
  res.redirect("/");
};

exports.getEditProduct = (req, res, next) => {
  //para obtener los datos opcionales despues de ?edit=true&title=new etc
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const proId = req.params.productId;
  Producto.findByid(proId, (misProductos) => {
    if (!misProductos) {
      res.redirect("/");
    }
    res.render("admin/edit-product", {
      pageTitle: "Edit TI Products",
      path: "/admin/edit-product",
      editing: editMode,
      prod: misProductos,
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const proId = req.body.productId;
  const updateTitle = req.body.title;
  const updateImageUrl = req.body.imageUrl;
  const updatePrice = req.body.price;
  const updateDescription = req.body.description;
  const myUpdateProducto = new Producto(
    proId,
    updateTitle,
    updateImageUrl,
    updateDescription,
    updatePrice
  );
  myUpdateProducto.save();
  res.redirect("/admin/products");
};

exports.getProductsA = (req, res, next) => {
  Producto.fetchAll((misProductos) => {
    // console.log("admin-c", misProductos);
    res.render("admin/products", {
      prod: misProductos,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const proId = req.body.productId;
  Producto.deleteById(proId);
  res.redirect("/admin/products");
};
