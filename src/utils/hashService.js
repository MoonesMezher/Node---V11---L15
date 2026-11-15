const bcrypt = require("bcryptjs");

class HashService {
    hash = async (password) => {
        try {
            return await bcrypt.hash(password, 12);
        } catch(err) {
            throw new Error(err.message)
        }
    }

    compare = async (password, dbPassword) => {
        try {
            return await bcrypt.compare(password, dbPassword);
        } catch(err) {
            throw new Error(err.message)
        }
    }
}

module.exports = new HashService();

// user -> abc123ABC@ -> hash -> $fnewpnfewnfpwepfnwefnwepfn
// login -> abc123ABC@ -> hash -> 