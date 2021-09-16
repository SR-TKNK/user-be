const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  _id: {
    type: String,
    require: true,
  },
  ID: {
    type: Number,
    require: [true, "Please enter category ID"],
  },
  name: {
    type: String,
    required: [true, "Please enter category name"],
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
