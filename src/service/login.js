const bcrypt = require("bcrypt");

module.exports = class AuthLogin {
    constructor({ authDaos, authentication }) {
        this.authDaos = authDaos;
        this.authentication = authentication;

        this.execute = this.execute.bind(this);
    }

    async execute(params) {
        const { email, password } = params;
        const user = await this.authDaos.findByEmail(email);
        if (user.failure) {
            return {
                failure: true,
                message: "invalid",
            };
        }
        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return {
                
                failure: true,
                message: "invalid",
            };
        }
        return {
            token: this.authentication.sign(user.email),
            userId: user._id,
            email: user.email,
        };
    }
}

