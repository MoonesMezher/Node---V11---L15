let users = require("../models/users");
let posts = require("../models/posts");

class UsersControllers {
    getAll = (req, res) => {
        res.status(200).json({
            message: "Fetched All data",
            data: users
        })
    }

    getOne = (req, res) => {
        const id = +req.params.id;

        const user = users.find(e => e.id === id);

        if(!user) return res.status(404).json({
            message: "User Not Found"
        })

        res.status(200).json({
            message: "Get user successfully",
            data: user
        })
    }

    add = (req, res) => {
        const { name, username, email, avatar, bio } = req.body;

        // email is unique
        const emailIsExist = users.find(e => e.email === email);

        if(emailIsExist) 
            return res.status(400).json({ message: "Invalid Email" })
        // username is unique
        const usernameIsExist = users.find(e => e.username === username);

        if(usernameIsExist) 
            return res.status(400).json({ message: "Invalid Username" })

        const data = { 
            id: Math.random() * Math.random(), // pk
            role: "user",
            name, username, email, avatar, bio,
            createdAt: new Date() 
        }

        users.push(data);

        res.status(201).json({
            message: "Added user successfully",
            data
        })
    }

    update = (req, res) => {
        const id = +req.params.id;

        const user = users.find(e => e.id === id);

        if(!user) return res.status(404).json({
            message: "User Not Found"
        })

        const { name, avatar, bio } = req.body;

        user.name = name || user.name;
        user.avatar = avatar || user.avatar;
        user.bio = bio || user.bio;

        res.status(200).json({
            message: "User Updated",
            data: user
        })
    }

    remove = (req, res) => {
        const id = +req.params.id;

        const user = users.find(e => e.id === id);

        if(!user) return res.status(404).json({
            message: "User Not Found"
        })

        users = users.filter(e => e.id !== id);
        posts = posts.filter(e => e.userId !== id);

        res.status(200).json({
            message: "User is Deleted"
        })
    }
}

module.exports = new UsersControllers();