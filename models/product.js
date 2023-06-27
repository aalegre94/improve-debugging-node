const misProductos = []; //para almacenar mis elementos
//declaro una clase Producto
module.exports = class Producto {
  //declaro un constructor para cuando cree un nuevo Producto
  //al cual le pasare sus atributos como argumentos
  constructor(t, p) {
    this.title = t;
    this.price = p;
  }
  //esta metoddo es para agregar ese producto al array despues de crear el objeto
  save() {
    misProductos.push(this);
  }
  //este metodo statico es para obtener todos los elementos
  static fetchAll() {
    return misProductos;
  }
};
