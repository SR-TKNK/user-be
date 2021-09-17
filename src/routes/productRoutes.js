const express = require("express");

module.exports = ({ productController }) => {
  const router = express.Router();

  router.get("/", productController.getAllProduct);

  router.get("/:id", productController.getProduct);

  // router.post("/detail/:id", productController.getProductDetail);

  return router;
};
