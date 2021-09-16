const express = require("express");

module.exports = ({ productController }) => {
  const router = express.Router();

  router.get("/:id", productController.getProductByName);

  // router.get("/:cq", productController.getProductByCategory);

  return router;
};
