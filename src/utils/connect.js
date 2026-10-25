const mongoose = require("mongoose");

const connect = async (app) => {
    const MONGODB_URL = process.env.MONGODB_URL;

    return mongoose.connect(MONGODB_URL)
        .then(e => {
            console.log("Connected to DB successfully");

            const PORT = process.env.PORT || 4000;
            app.listen(PORT, () => {
                console.log("Server is Running")
            });
        })
        .catch(err => {
            console.log("Error in Connecting to DB", err.message);
            process.exit(0)
        }); 
}

module.exports = connect;