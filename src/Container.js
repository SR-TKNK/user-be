const awilix = require("awilix");

// Main
const app = require("./main/App");
// Services
const loginService = require("./service/login");
// Models
const userModel = require("./models/User");
// Controllers
const authController = require("./controllers/authController");
// Daos
const authDaos = require("./daos/authDaos");
// Ulti
const authentication = require("./ultils/authentication");
// Middleware
const authMiddleware = require("./middleware/authMiddleware");

// Routes
const authRoutes = require("./routes/authRoutes");

const container = awilix.createContainer();

container.register({
    app : awilix.asClass(app),
    loginService : awilix.asClass(loginService),
    userModel : awilix.asClass(userModel),
    authController : awilix.asClass(authController),
    authDaos : awilix.asClass(authDaos),
    authentication : awilix.asClass(authentication),
    authMiddleware : awilix.asClass(authMiddleware),
    authRoutes : awilix.asFunction(authRoutes),
});

module.exports = container;