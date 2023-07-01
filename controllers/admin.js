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
  //metodo create para insertar en la bd
  Producto.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description,
  })
    .then((resultado) => {
      // console.log(resultado);
      console.log("Producto Creado!!");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });

  // const myProducto = new Producto(null, title, imageUrl, description, price); //instancio un nuevo producto
  // myProducto
  //   .save()
  //   .then(() => {
  //
  //   })
  //   .catch((err) => console.log(err)); //lo guardo en el array
};

exports.getEditProduct = (req, res, next) => {
  //para obtener los datos opcionales despues de ?edit=true&title=new etc
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const proId = req.params.productId;
  Producto.findByPk(proId)
    .then((miProducto) => {
      if (!miProducto) {
        res.redirect("/");
      }
      // console.log(misProductos);
      res.render("admin/edit-product", {
        pageTitle: "Edit TI Products",
        path: "/admin/edit-product",
        editing: editMode,
        prod: miProducto,
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

  Producto.findByPk(proId)
    .then((miProducto) => {
      miProducto.title = updateTitle;
      miProducto.price = updatePrice;
      miProducto.description = updateDescription;
      miProducto.imageUrl = updateImageUrl;
      return miProducto.save();
    })
    .then((resultado) => {
      console.log("Producto Actualizado");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });

  // const myUpdateProducto = new Producto(
  //   proId,
  //   updateTitle,
  //   updateImageUrl,
  //   updateDescription,
  //   updatePrice
  // );
  // myUpdateProducto
  //   .update()
  //   .then(() => {
  //     res.redirect("/admin/products");
  //   })
  //   .catch((err) => console.log(err));
};

exports.getProductsA = (req, res, next) => {
  Producto.findAll()
    .then((misProductos) => {
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
  Producto.findByPk(proId)
    .then((miProducto) => {
      return miProducto.destroy();
    })
    .then((resultado) => {
      console.log("Producto destruido");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};
