const awilix = require("awilix");
// Main
const App = require("./main/App");
const Server = require("./main/Server");
const Router = require("./main/Router");
const DatabaseConection = require("./main/DbConnection");
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
    //Main
    app: awilix.asClass(App),
    server: awilix.asClass(Server),
    router: awilix.asFunction(Router),
    database: awilix.asValue(DatabaseConection),
    //Services
    loginService : awilix.asClass(loginService),
    //Models
    userModel : awilix.asClass(userModel),
    //Controllers
    authController : awilix.asClass(authController),
    //Daos
    authDaos : awilix.asClass(authDaos),
    //Authentication
    authentication : awilix.asClass(authentication),
    //Middleware
    authMiddleware : awilix.asClass(authMiddleware),
    //Routes
    authRoutes : awilix.asFunction(authRoutes),
});

module.exports = container;