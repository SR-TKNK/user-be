const express = require("express");

module.exports = ({ orderController }) => {
  const router = express.Router();

  router.get("/user/:id", orderController.indexUser);
  router.post("/", orderController.create);

  return router;
};
