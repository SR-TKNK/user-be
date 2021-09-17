const express = require("express");

module.exports = ({ productController }) => {
  const router = express.Router();

  router.get("/", productController.searchProductByName);

  return router;
};
