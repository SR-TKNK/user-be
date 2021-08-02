const express = require("express");
const cors = require("cors");

module.exports = ({ authRoutes }) => {
  const router = express.Router();
  router.use(express.static("public"));
  router.use(cors({ exposedHeaders: "auth-token" }));
  router.use(express.json());
  router.use(express.urlencoded({ extended: true }));
  router.use(cookieParser());

  router.use("/", authRoutes);

  return router;
};