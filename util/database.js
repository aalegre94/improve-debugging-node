const msyql = require("mysql2");

const pool = msyql.createPool({
  host: "localhost",
  user: "user",
  database: "db",
  password: "password",
});

module.exports = pool.promise();
