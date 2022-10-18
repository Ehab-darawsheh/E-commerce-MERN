const express = require("express");
const Product = require("../models/productModel.js");
const data = require("../data.js");

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Product.remove({}); //remove all prev record
  const createProducts = await Product.insertMany(data.products);
  res.send({ createProducts });
});

module.exports = seedRouter;
