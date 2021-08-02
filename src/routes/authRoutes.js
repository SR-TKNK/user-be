const express = require('express');

module.exports = (authController, authMiddleware) => {
    const router = express.Router();
    router.post('/login', authMiddleware.requireAuth, authController.login);
    router.get('/logout', authController.logout);
    // router.get('/signup', authController.signup_get);
    // router.post('/signup', authController.signup_post);
    // router.get('/login', authController.login_get);

    return router;
}