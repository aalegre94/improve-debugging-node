const Sequelize = require("sequelize");
const sequelize = new Sequelize("db", "user", "password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
