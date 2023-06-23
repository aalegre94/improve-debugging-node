const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Antoher midleaware");
  res.send("<h1>Hello tiranitar</h1>");
});

module.exports = router;
