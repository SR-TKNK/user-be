const awilix = require("awilix");
// Main
const App = require("./main/App");
const Server = require("./main/Server");
const Router = require("./main/Router");
const DatabaseConection = require("./main/DbConnection");
// Services
const loginService = require("./service/login");
const productService = require("./service/product");
const categoryService = require("./service/category");
const searchByNameService = require("./service/searchByName");
const createOrderService = require("./service/order/createOrder");
const getAllOrdersByUserIdService = require("./service/order/getAllOrderByUserID");
// Models
const userModel = require("./models/User");
const productModel = require("./models/Product");
const categoryModel = require("./models/Category");
const orderModel = require("./models/Order");
const orderDetailModel = require("./models/OrderDetail");
// Controllers
const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const categoryController = require("./controllers/categoryController");
const orderController = require("./controllers/orderController");
// Daos
const authDaos = require("./daos/authDaos");
const productDaos = require("./daos/productDaos");
const categoryDaos = require("./daos/categoryDaos");
const orderDaos = require("./daos/orderDaos");
const orderDetailDaos = require("./daos/orderDetailDaos");
// Ulti
const authentication = require("./ultils/authentication");
// Middleware
const authMiddleware = require("./middleware/authMiddleware");

// Routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const searchRoutes = require("./routes/searchRoutes");
const orderRoutes = require("./routes/orderRoutes");

const container = awilix.createContainer();

container.register({
  //Main
  app: awilix.asClass(App),
  server: awilix.asClass(Server),
  router: awilix.asFunction(Router),
  database: awilix.asValue(DatabaseConection),
  //Services
  loginService: awilix.asClass(loginService),
  productService: awilix.asClass(productService),
  categoryService: awilix.asClass(categoryService),
  searchByNameService: awilix.asClass(searchByNameService),
  createOrderService: awilix.asClass(createOrderService),
  getAllOrdersByUserIdService: awilix.asClass(getAllOrdersByUserIdService),
  //Models
  userModel: awilix.asValue(userModel),
  productModel: awilix.asValue(productModel),
  categoryModel: awilix.asValue(categoryModel),
  orderModel: awilix.asValue(orderModel),
  orderDetailModel: awilix.asValue(orderDetailModel),
  //Controllers
  authController: awilix.asClass(authController),
  productController: awilix.asClass(productController),
  categoryController: awilix.asClass(categoryController),
  orderController: awilix.asClass(orderController),
  //Daos
  authDaos: awilix.asClass(authDaos),
  productDaos: awilix.asClass(productDaos),
  categoryDaos: awilix.asClass(categoryDaos),
  orderDaos: awilix.asClass(orderDaos),
  orderDetailDaos: awilix.asClass(orderDetailDaos),
  //Authentication
  authentication: awilix.asClass(authentication),
  //Middleware
  authMiddleware: awilix.asClass(authMiddleware),
  //Routes
  authRoutes: awilix.asFunction(authRoutes),
  productRoutes: awilix.asFunction(productRoutes),
  categoryRoutes: awilix.asFunction(categoryRoutes),
  searchRoutes: awilix.asFunction(searchRoutes),
  orderRoutes: awilix.asFunction(orderRoutes),
});

module.exports = container;
