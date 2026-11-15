require("dotenv").config();
const jwt = require("jsonwebtoken");

class JWTService {
    SECRET_KEY = process.env.JWT_SECRET_KEY;

    sign = (payload) => {
        return jwt.sign(payload, this.SECRET_KEY)
    }

    verify = (token) => {
        return jwt.verify(token, this.SECRET_KEY)
    }
}

module.exports = new JWTService();