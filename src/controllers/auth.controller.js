const User = require("../models/User");
const collection = require("../utils/collection");
const hashService = require("../utils/hashService");
const jwtService = require("../utils/jwtService");

class AuthController {
    me = async (req, res) => {
        const id = req._user._id;
        const user = await User.findById(id).select("-password");

        res.status(200).json(
            collection.success("Get my data successfully", user)
        )
    }

    login = async (req, res) => {
        // req body => email, password
        const { email, password } = req.body;

        // user -> email
        const user = await User.findByEmail(email);
        if(!user) return res.status(400).json(
            collection.error("Invalid Credintials")
        )

        // password -> email
        const compare = await hashService.compare(password, user.password)
        if(!compare) return res.status(400).json(
            collection.error("Invalid Credintials")
        )

        // token -> jwt
        const token = jwtService.sign({ email, _id: user._id });
        // response
        res.status(200).json(
            collection.success("LoggedIn Successfully", token)
        )
    }

    signup = async (req, res) => {
        // req body {  name, username, email, password }
        const { name, username, email, password } = req.body;

        // if user has the same email or username -> error
        const emailCheck = await User.findOne({ email })
        if(emailCheck) return res.status(400).json(collection.error("This email already exist"))

        const usernameCheck = await User.findOne({ username })
        if(usernameCheck) return res.status(400).json(collection.error("This username already exist"))

        // hash password
        const hashed = await hashService.hash(password);

        // create user
        let user = await User.create({ name, username, email, password: hashed });
        user = user.toObject();
        delete user.password;

        // response
        res.status(201).json(collection.success("User Created", user));
    }

    logout = async (req, res) => {
        res.status(200).json(collection.success("Logged Out Successfully"));
    }

    update = async (req, res) => {
        const { name, birthDate, bio, avatar } = req.body;

        let user = await User.findById(req._user._id).select("-password");

        user.name = name || user.name;
        user.birthDate = birthDate || user.birthDate;
        user.bio = bio || user.bio;
        user.avatar = avatar || user.avatar;

        await user.save()

        res.status(200).json(
            collection.success("Updated Profile Successfully", user)
        )
    }
}

module.exports = new AuthController();