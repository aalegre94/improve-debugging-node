// const Sequelize = require("sequelize");
const Sequelize = require("sequelize").Sequelize;
const sequelize = new Sequelize("db", "user", "password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
