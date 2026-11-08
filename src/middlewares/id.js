const mongoose = require("mongoose");
const collection = require("../utils/collection");

const id = (req, res, next) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json(
            collection.error("Invalid ID")
        )
    }

    next();
}

module.exports = id;