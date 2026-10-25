const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    tags: [String],
    likes: {
        type: Number,
        default: 0
    },
    published: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);
module.exports = Post;