const Sequelize = require("sequelize");
// const Sequelize = require("sequelize/index");
// const Sequelize = require("sequelize").Sequelize;
const sequelize = require("../util/database");

const Producto = sequelize.define("producto", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Producto;

// // const fs = require("fs");
// // const path = require("path");
// const db = require("../util/database");
// const Cart = require("./cart");
// // const misProductos = []; //para almacenar mis elementos
// //declaro una clase Producto
// // const p = path.join(
// //   path.dirname(require.main.filename),
// //   "data",
// //   "productos.json"
// // );

// // const getProductosFromFile = (cb) => {
// //   fs.readFile(p, (err, fileContent) => {
// //     if (err) {
// //       cb([]);
// //     } else {
// //       cb(JSON.parse(fileContent));
// //     }
// //   });
// // };

// module.exports = class Producto {
//   //declaro un constructor para cuando cree un nuevo Producto
//   //al cual le pasare sus atributos como argumentos
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }
//   //now whith database

//   save() {
//     return db.execute(
//       "INSERT INTO productos (title,price,description,imageUrl) VALUES (?,?,?,?)",
//       [this.title, this.price, this.description, this.imageUrl]
//     );
//   }

//   update() {
//     return db.execute(
//       "UPDATE productos SET title = ?,price = ?, description = ? ,imageUrl = ? where id = ?",
//       [this.title, this.price, this.description, this.imageUrl, this.id]
//     );
//   }

//   static deleteById(id) {
//     return db.execute("DELETE FROM productos WHERE id = ? ", [id]);
//   }

//   static fetchAll() {
//     return db.execute("SELECT * FROM productos");
//   }

//   static findByid(id) {
//     return db.execute("SELECT * FROM productos WHERE id = ? ", [id]);
//   }

//esto es para archivos
// //esta metodo es para agregar ese producto al array despues de crear el objeto
// save() {
//   getProductosFromFile((productos) => {
//     if (this.id) {
//       const existingProductIndex = productos.findIndex(
//         (prod) => prod.id === this.id
//       );
//       const updatedProducts = [...productos];
//       updatedProducts[existingProductIndex] = this;
//       fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
//         console.log(err);
//       });
//     } else {
//       this.id = Math.random().toString();
//       productos.push(this);
//       fs.writeFile(p, JSON.stringify(productos), (err) => {
//         console.log(err);
//       });
//     }
//   });
// }

// static deleteById(id) {
//   getProductosFromFile((productos) => {
//     const producto = productos.find((prod) => prod.id === id);
//     const updatedProducts = productos.filter((prod) => prod.id !== id);
//     fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
//       if (!err) {
//         Cart.deleteProduct(id, producto.price);
//       }
//     });
//   });
// }

// //este metodo statico es para obtener todos los elementos
// static fetchAll(cb) {
//   getProductosFromFile(cb);
// }

// static findByid(id, cb) {
//   getProductosFromFile((productos) => {
//     const producto = productos.find((p) => p.id === id);
//     cb(producto);
//   });
// }
// };
