const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const CarroItem = sequelize.define("carroItem", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: Sequelize.INTEGER,
});

module.exports = CarroItem;
