// if post<->categroy = M-M
const mongoose = require("mongoose");

const postCategorySchema = new mongoose.Schema({
    categroyId: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    postId: {
        type: mongoose.Types.ObjectId,
        ref: "Post"
    },
}, { timestamps: true });

const PostCategory = mongoose.model("PostCategory", postCategorySchema);

module.exports = PostCategory;