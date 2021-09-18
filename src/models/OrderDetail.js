const mongoose = require("mongoose");

const orderDetailSchema = new mongoose.Schema({
  orderID: {
    type: mongoose.Types.ObjectId,
    require: [true, "Please enter order ID"],
  },
  productCode: {
    type: String,
    require: [true, "Please enter product Code"],
  },
  quantity: {
    type: Number,
    required: [true, "Please enter quantity"],
  },
  price: {
    type: Number,
    required: [true, "Please enter price"],
  }
});

const OrderDetail = mongoose.model("Order Detail", orderDetailSchema);

module.exports = OrderDetail;