const jwt = require('jsonwebtoken');

module.exports = class AuthMiddleware {
  constructor({ userModel }) {
    this.userModel = userModel;
    this.requireAuth = this.requireAuth.bind(this);
  }
  requireAuth(req, res, next) {
    const token = req.cookies.jwt;
    // check json web token exists & is verified
    if (token) {
      jwt.verify(token, 'sr-tknk', (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          res.redirect('/login');
        } else {
          console.log(decodedToken);
          next();
        }
      });
    } else {
      res.redirect('/login');
    }
  }
};