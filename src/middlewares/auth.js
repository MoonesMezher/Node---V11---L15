const collection = require("../utils/collection")
const jwtService = require("../utils/jwtService");
const User = require("../models/User");

const auth = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization; // Bearer TOKEN
        /* console.log(1, authorization) */

        if(!authorization) return res.status(401).json(
            collection.error("UnAuthorized")
        )
    
        const token = authorization.split(" ")[1]; // TOKEN
        /* console.log(2, token) */

        // JWT Form - Expiration (Age) - From My System (Secret Key)
        const decoded = jwtService.verify(token);
        /* console.log(3, decoded) */
    
        const { email, _id } = decoded;
    
        const user = await User.findByEmail(email);
    
        if(!user) return res.status(401).json(
            collection.error("UnAuthorized")
        )

        req._user = { email, _id }
    
        next();
    } catch(err) {
        return res.status(401).json(
            collection.error("UnAuthorized", err.message)
        )
    }
}

module.exports = auth