let posts = require("../models/posts");
const users = require("../models/users");

class PostsControllers {
    getAll = (req, res) => {
        res.status(200).json({
            message: "Fetched All data",
            data: posts
        })
    }

    getOne = (req, res) => {
        const id = +req.params.id;

        const post = posts.find(e => e.id === id);

        if(!post) return res.status(404).json({
            message: "Post Not Found"
        })

        res.status(200).json({
            message: "Get post successfully",
            data: post
        })
    }

    add = (req, res) => {
        const { userId } = req.params;

        const user = users.find(e => e.id === userId);

        if(!user) return res.status(404).json({ message: "User Not Found" });

        const { title, body, published, tags } = req.body;

        const data = { 
            id: Math.random() * Math.random(), // pk
            userId,
            title, body, published, tags,
            createdAt: new Date() 
        }

        posts.push(data);

        res.status(201).json({
            message: "Added post successfully",
            data
        })
    }

    update = (req, res) => {
        const id = +req.params.id;

        const post = posts.find(e => e.id === id);

        if(!post) return res.status(404).json({
            message: "Post Not Found"
        })

        const { title, body, published, tags } = req.body;

        post.title = title || post.title;
        post.body = body || post.body;
        post.published = published || post.published;
        post.tags = tags || post.tags;

        res.status(200).json({
            message: "Post Updated",
            data: post
        })
    }

    remove = (req, res) => {
        const id = +req.params.id;

        const post = posts.find(e => e.id === id);

        if(!post) return res.status(404).json({
            message: "Post Not Found"
        });

        posts = posts.filter(e => e.id !== id);

        res.status(200).json({
            message: "Post is Deleted"
        })
    }
}

module.exports = new PostsControllers();