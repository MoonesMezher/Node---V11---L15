const Category = require("../models/Category");
const Post = require("../models/Post")
class CategoriesController {
    getAll = async (req, res) => {
        const categories = await Category.find();

        res.status(200).json({
            message: "GET ALL DATA SUCCESSFULLY",
            categories
        })
    }
    getOne = async (req, res) => {
        const id = req.params.id;

        const category = await Category.findById(id);

        if(!category) return res.status(404).json({
            message: "CATEGORY NOT FOUND"
        });

        const posts = await Post.find({ categoryId: id })

        category.posts = posts

        res.status(200).json({
            message: "GET ALL DATA SUCCESSFULLY",
            category
        })
    }
    create = async (req, res) => {
        const { title, descrption } = req.body;

        const categoryIsExist = await Category.findOne({ title });

        if(categoryIsExist) return res.status(400).json({
            message: "TITLE MUST BE UNIQUE"
        })

        const category = await Category.create({ title, descrption });

        res.status(201).json({
            message: "ADDED CATEGORY SUCCESSFULLY",
            category
        })
    }
    update = async (req, res) => {
        const id = req.params.id;

        const category = await Category.findById(id);

        if(!category) return res.status(404).json({
            message: "CATEGORY NOT FOUND"
        });

        const { title, descrption } = req.body;

        const categoryIsExist = await Category.findOne({ title });

        if(categoryIsExist) return res.status(400).json({
            message: "TITLE MUST BE UNIQUE"
        })

        category.title = title || category.title;
        category.descrption = descrption || category.descrption;

        await category.save();

        res.status(200).json({
            message: "UPDATED CATEGORY SUCCESSFULLY",
            category
        })
    }
    remove = async (req, res) => {
        const id = req.params.id;

        const category = await Category.findById(id);

        if(!category) return res.status(404).json({
            message: "CATEGORY NOT FOUND"
        });

        await Category.findByIdAndDelete(id);
        // 2) await Category.deleteOne({ _id: id });

        // soft delete -> default category -> delete
        await Post.deleteMany({ categoryId: id });

        res.status(200).json({
            message: "DELETED CATEGORY SUCCESSFULLY"
        })
    }
}

module.exports = new CategoriesController();