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
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "path/image.png"
    },
    bio: String,
    role: {
        type: String,
        default: "user"
    },
    birthDate: String
}, { 
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
}); // schema 
// timestamps => createdAt & updatedAt

userSchema.virtual("age").get(function() {
    return new Date().getFullYear() - this.birthDate;
})

userSchema.static(
    "findByEmail",
    async function(email) {
        return await this.findOne({ email }); // this => User
    }
)
// await User.findByEmail(email)

userSchema.method(
    "short",
    function() {
        return `${this.email} - ${this.username}`; // this => document
    }
)
// const user = await User.findOne({ email })
// user.short()

/* userSchema.pre("save", function() {})

userSchema.post("save", function() {}) */

const User = mongoose.model("User", userSchema); // model = collection

module.exports = User;