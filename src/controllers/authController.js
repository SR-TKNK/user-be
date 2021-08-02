class AuthController {
  constructor({ loginService, authentication }) {
    this.authentication = authentication;
    this.loginService = loginService;

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async login(req, res) {
    try {
      const params = req.body;
      const serviceResult = await this.loginService.execute(params);
      if (serviceResult.failure) throw new Error(serviceResult.message);
      res.status(200).header("token", serviceResult.token).send({
        valid: true,
        userId: serviceResult.userId,
        email: serviceResult.email,
        isVIP: serviceResult.isVIP,
        lastName: serviceResult.lastName,
        firstName: serviceResult.firstName,
      });
    } catch (err) {
      const errors = this.authentication.handleErrors(err.message)
      res.status(400).send({ valid: false, message: errors });
    }
  }

  async logout(req, res) {
    res.header('jwt', '');
    res.redirect('/');
  }
}

module.exports = AuthController;

//const User = require("../models/User");
//const jwt = require('jsonwebtoken');

// handle errors
// const handleErrors = (err) => {
//   console.log(err.message, err.code);
//   let errors = { email: '', password: '' };

//   // Qr-code is invalid
//   if (err.message === 'invalid') {
//     errors.email = 'QR-code is invalid!';
//   }

//   // duplicate email error
//   if (err.code === 11000) {
//     errors.email = 'that email is already registered';
//     return errors;
//   }

//   // validation errors
//   if (err.message.includes('user validation failed')) {
//     // console.log(err);
//     Object.values(err.errors).forEach(({ properties }) => {
//       // console.log(val);
//       // console.log(properties);
//       errors[properties.path] = properties.message;
//     });
//   }

//   return errors;
// }