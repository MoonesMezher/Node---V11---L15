// let users = require("../models/users");
const User = require("../models/User");
const Post = require("../models/Post");

class UsersControllers {
    getAll = async (req, res) => {
        // limit
        const limit = 2;
        // page
        // ?page=5
        const page = req.query.page || 1;
        // total
        const total = await User.countDocuments();
        // pages
        const pages = Math.ceil(total / limit);
        // data 
        // page = 1 => skip = 0
        // page = 2 => skip = 50
        // page = 3 => skip = 100
        const skip = (page - 1) * limit;
        const users = await User
            .find()
            .skip(skip)
            .limit(limit);
        // pagination
        const pagination = {
            limit,
            total, 
            pages,
            page,
            isPrev: page > 1,
            isNext: page < pages,
        };

        res.status(200).json({
            message: "Fetched All data",
            data: users,
            pagination
        })
    }

    getOne = async (req, res) => {
        const id = req.params.id;

        const user = await User.findById(id);

        if(!user) return res.status(404).json({
            message: "User Not Found"
        })

        res.status(200).json({
            message: "Get user successfully",
            data: user
        })
    }

    add = async (req, res) => {
        const { name, username, email, avatar, bio } = req.body;

        // email is unique
        const emailIsExist = await User.findOne({ email });
        
        if(emailIsExist) 
            return res.status(400).json({ message: "Invalid Email" })
        // username is unique
        const usernameIsExist = await User.findOne({ username })
        if(usernameIsExist) 
            return res.status(400).json({ message: "Invalid Username" })

        const data = await User.create({ name, username, email, avatar, bio })

        res.status(201).json({
            message: "Added user successfully",
            data
        })
    }

    update = async (req, res) => {
        const id = req.params.id;

        const user = await User.findById(id)

        if(!user) return res.status(404).json({
            message: "User Not Found"
        })

        const { name, avatar, bio } = req.body;

        user.name = name || user.name;
        user.avatar = avatar || user.avatar;
        user.bio = bio || user.bio;

        await user.save();

        res.status(200).json({
            message: "User Updated",
            data: user
        })
    }

    remove = async (req, res) => {
        const id = req.params.id;

        const user = await User.findById(id)

        if(!user) return res.status(404).json({
            message: "User Not Found"
        })

        await User.findByIdAndDelete(id);
        await Post.deleteMany({ userId: id });

        res.status(200).json({
            message: "User is Deleted"
        })
    }
}

module.exports = new UsersControllers();