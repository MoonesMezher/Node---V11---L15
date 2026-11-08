const error = (err, req, res, next) => {
    const message = err.message;

    res.status(500).json({
        message: "Server Error",
        data: message
    })
}

module.exports = error;