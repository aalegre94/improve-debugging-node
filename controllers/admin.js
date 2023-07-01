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
  myProducto
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err)); //lo guardo en el array
};

exports.getEditProduct = (req, res, next) => {
  //para obtener los datos opcionales despues de ?edit=true&title=new etc
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const proId = req.params.productId;
  Producto.findByid(proId)
    .then(([misProductos]) => {
      if (!misProductos[0]) {
        res.redirect("/");
      }
      // console.log(misProductos);
      res.render("admin/edit-product", {
        pageTitle: "Edit TI Products",
        path: "/admin/edit-product",
        editing: editMode,
        prod: misProductos[0],
      });
    })
    .catch((err) => console.log(err));
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
  myUpdateProducto
    .update()
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

exports.getProductsA = (req, res, next) => {
  Producto.fetchAll()
    .then(([misProductos]) => {
      res.render("admin/products", {
        prod: misProductos,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const proId = req.body.productId;
  Producto.deleteById(proId)
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};
