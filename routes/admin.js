const path = require("path");
const express = require("express");
const router = express.Router();

//  /admin/product => GET
router.get("/add-product", (req, res, next) => {
  //console.log("Antoher midleaware 2");
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

//  /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
