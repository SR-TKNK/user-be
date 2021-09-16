const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  _id: {
    type: String,
    require: true,
  },
  code: {
    type: String,
    require: [true, "Please enter product code"],
  },
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  weight: {
    type: Number,
    required: [true, "Please enter product weight"],
  },
  image: {
    type: Array,
    default: [],
  },
  category: {
    type: Number,
    required: [true, "Please enter product category"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
