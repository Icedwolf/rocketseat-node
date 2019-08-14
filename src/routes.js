const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

// req = request | res = response
routes.get("/products", ProductController.index);

module.exports = routes;
