const express = require("express");

module.exports = ({ authController, authMiddleware}) => {
    const router = express.Router();

    router.post("/login", authController.login);
    router.post("/users/me", authMiddleware.requireAuth, authController.postUser);
    // router.get("/logout", authMiddleware.requireAuth, authController.logout);
    // router.get('/signup', authController.signup_get);
    // router.post('/signup', authController.signup_post);
    // router.get('/login', authController.login_get);

    return router;
}