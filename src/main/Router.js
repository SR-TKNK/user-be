const express = require("express");
const cors = require("cors");

module.exports = ({
  authRoutes,
  productRoutes,
  categoryRoutes,
  searchRoutes,
}) => {
  const router = express.Router();
  router.use(express.static("public"));
  router.use(cors({ exposedHeaders: "auth-token" }));
  router.use(express.json());
  router.use(express.urlencoded({ extended: true }));
  // router.use(cookieParser());

  router.use("/auth", authRoutes);

  router.use("/products", productRoutes);

  router.use("/categories", categoryRoutes);

  router.use("/search", searchRoutes);

  return router;
};
