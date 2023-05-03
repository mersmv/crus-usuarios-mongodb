const mongoose = require("mongoose");

const ProductsScheme = mongoose.Schema({
  _id: String,
  name: String,
  price: Number,
  category: String,
  size: String,
});

const ProductModel = mongoose.model("Camisetas", ProductsScheme);

module.exports = ProductModel;
