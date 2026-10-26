const Post = require("../models/Post");
const User = require("../models/User");

class PostsControllers {
    getAll = async (req, res) => {
        const posts = await Post.find();

        res.status(200).json({
            message: "Fetched All data",
            data: posts
        })
    }

    getOne = async (req, res) => {
        const id = req.params.id;

        const post = await Post.findById(id).populate("userId");

        // userId: id - categoryId: id
        // userId: { .. } - categoryId: { .. }

        if(!post) return res.status(404).json({
            message: "Post Not Found"
        })

        res.status(200).json({
            message: "Get post successfully",
            data: post
        })
    }

    add = async (req, res) => {
        const { userId } = req.params;

        const user = await User.findById(userId);
        // users.find(e => e.id === userId);

        if(!user) return res.status(404).json({ message: "User Not Found" });

        const { title, body, published, tags } = req.body;

        const data = await Post.create({ userId, title, body, published, tags })

        res.status(201).json({
            message: "Added post successfully",
            data
        })
    }

    update = async (req, res) => {
        const id = req.params.id;

        const post = await Post.findById(id);

        if(!post) return res.status(404).json({
            message: "Post Not Found"
        })

        const { title, body, published, tags } = req.body;

        post.title = title || post.title;
        post.body = body || post.body;
        post.published = published || post.published;
        post.tags = tags || post.tags;

        await post.save();

        res.status(200).json({
            message: "Post Updated",
            data: post
        })
    }

    remove = async (req, res) => {
        const id = req.params.id;

        const post = await Post.findById(id);

        if(!post) return res.status(404).json({
            message: "Post Not Found"
        });

        await Post.findByIdAndDelete(id);

        res.status(200).json({
            message: "Post is Deleted"
        })
    }
}

module.exports = new PostsControllers();