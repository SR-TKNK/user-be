class AuthController {
  constructor({ loginService, authentication, authDaos }) {
    this.authentication = authentication;
    this.loginService = loginService;
    this.authDaos = authDaos;

    this.login = this.login.bind(this);
    this.postUser = this.postUser.bind(this);
    this.logout = this.logout.bind(this);
  }

  async login(req, res) {
    try {
      const params = req.body;
      const serviceResult = await this.loginService.execute(params);
      if (serviceResult.failure) throw new Error(serviceResult.message);
      res.status(200).send({
        valid: true,
        token: serviceResult.token,
        email: serviceResult.email,
      });
    } catch (err) {
      const errors = this.authentication.handleErrors(err.message)
      res.status(400).send({ valid: false, message: errors });
    }
  }

  async postUser(req, res) {
    const email = req.body.email;
    const user = await this.authDaos.findByEmail(email);
    res.status(200).send({
      userId: user._id,
      email: user.email,
      isVIP: user.isVIP,
      lastName: user.lastName,
      firstName: user.firstName,      
    })
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