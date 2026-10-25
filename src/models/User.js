const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String,
        default: "path/image.png"
    },
    bio: String,
    role: {
        type: String,
        default: "user"
    }
}, { timestamps: true }); // schema 
// timestamps => createdAt & updatedAt

const User = mongoose.model("User", userSchema); // model = collection

module.exports = User;