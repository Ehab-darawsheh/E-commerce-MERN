const express = require("express");
const Product = require("../models/productModel.js");
const User = require("../models/userModel.js");
const data = require("../data.js");

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Product.remove({}); 
  const createProducts = await Product.insertMany(data.products);
  await User.remove({}); 
  const createUsers = await User.insertMany(data.Users);
  res.send({ createProducts,createUsers });
});

module.exports = seedRouter;
