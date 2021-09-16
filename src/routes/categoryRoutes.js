const express = require("express");

module.exports = ({ categoryController }) => {
  const router = express.Router();

  router.get("/", categoryController.getAllCategories);

  return router;
};
