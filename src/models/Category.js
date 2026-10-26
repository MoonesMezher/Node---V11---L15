const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // مطلوب - اجباري
        unique: true // فريد
    },
    descrption: String
}, { timestamps: true });

const Categroy = mongoose.model("Category", categorySchema);

module.exports = Categroy;