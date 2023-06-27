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
  constructor(t, p) {
    this.title = t;
    this.price = p;
  }
  //esta metodo es para agregar ese producto al array despues de crear el objeto
  save() {
    getProductosFromFile((productos) => {
      productos.push(this);
      fs.writeFile(p, JSON.stringify(productos), (err) => {
        console.log(err);
      });
    });
  }
  //este metodo statico es para obtener todos los elementos
  static fetchAll(cb) {
    getProductosFromFile(cb);
  }
};
