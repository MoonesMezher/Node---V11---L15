const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },// await User.findById(userID)
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
    },
    // 1-M => 1 Id -> M Collection
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);
module.exports = Post;

// categoryId
// posts.filter(e => e.categoryId === categoryId)