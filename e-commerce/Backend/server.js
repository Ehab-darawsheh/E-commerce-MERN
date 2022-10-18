const express = require("express");
const data = require("./data.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const seedRouter = require("./routes/seedRoutes.js");
const productRouter = require("./routes/productRoutes");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);



const port = 5000;

app.listen(port, () => {
  console.log("Runing");
});
