const fs = require("fs");
const path = require("path");
// const misProductos = []; //para almacenar mis elementos
//declaro una clase Producto
module.exports = class Producto {
  //declaro un constructor para cuando cree un nuevo Producto
  //al cual le pasare sus atributos como argumentos
  constructor(t, p) {
    this.title = t;
    this.price = p;
  }
  //esta metodo es para agregar ese producto al array despues de crear el objeto
  save() {
    // misProductos.push(this);
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "productos.json"
    );
    fs.readFile(p, (err, fileContent) => {
      let productos = [];
      if (!err) {
        productos = JSON.parse(fileContent);
      }
      productos.push(this);
      fs.writeFile(p, JSON.stringify(productos), (err) => {
        console.log(err);
      });
    });
  }
  //este metodo statico es para obtener todos los elementos
  static fetchAll(cb) {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "productos.json"
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
    // return misProductos;
  }
};
