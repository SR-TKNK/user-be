const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Types.ObjectId,
    require: [true, "Please enter user ID"],
  },
  totalPrice: {
    type: Number,
    required: [true, "Please enter total price"],
  }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;