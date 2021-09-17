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
// Models
const userModel = require("./models/User");
const productModel = require("./models/Product");
const categoryModel = require("./models/Category");
// Controllers
const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const categoryController = require("./controllers/categoryController");
// Daos
const authDaos = require("./daos/authDaos");
const productDaos = require("./daos/productDaos");
const categoryDaos = require("./daos/categoryDaos");
// Ulti
const authentication = require("./ultils/authentication");
// Middleware
const authMiddleware = require("./middleware/authMiddleware");

// Routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const searchRoutes = require("./routes/searchRoutes");

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
  //Models
  userModel: awilix.asValue(userModel),
  productModel: awilix.asValue(productModel),
  categoryModel: awilix.asValue(categoryModel),
  //Controllers
  authController: awilix.asClass(authController),
  productController: awilix.asClass(productController),
  categoryController: awilix.asClass(categoryController),
  //Daos
  authDaos: awilix.asClass(authDaos),
  productDaos: awilix.asClass(productDaos),
  categoryDaos: awilix.asClass(categoryDaos),
  //Authentication
  authentication: awilix.asClass(authentication),
  //Middleware
  authMiddleware: awilix.asClass(authMiddleware),
  //Routes
  authRoutes: awilix.asFunction(authRoutes),
  productRoutes: awilix.asFunction(productRoutes),
  categoryRoutes: awilix.asFunction(categoryRoutes),
  searchRoutes: awilix.asFunction(searchRoutes),
});

module.exports = container;
