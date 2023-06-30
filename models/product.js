const fs = require("fs");
const path = require("path");
// const misProductos = []; //para almacenar mis elementos
//declaro una clase Producto
const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "productos.json"
);

const getProductosFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Producto {
  //declaro un constructor para cuando cree un nuevo Producto
  //al cual le pasare sus atributos como argumentos
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  //esta metodo es para agregar ese producto al array despues de crear el objeto
  save() {
    getProductosFromFile((productos) => {
      if (this.id) {
        const existingProductIndex = productos.findIndex(
          (prod) => prod.id === this.id
        );
        const updatedProducts = [...productos];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        productos.push(this);
        fs.writeFile(p, JSON.stringify(productos), (err) => {
          console.log(err);
        });
      }
    });
  }
  //este metodo statico es para obtener todos los elementos
  static fetchAll(cb) {
    getProductosFromFile(cb);
  }

  static findByid(id, cb) {
    getProductosFromFile((productos) => {
      const producto = productos.find((p) => p.id === id);
      cb(producto);
    });
  }
};
