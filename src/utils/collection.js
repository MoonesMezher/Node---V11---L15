class Collection {
    success = (message, data = null) => {
        return {
            success: true,
            message,
            data,
            time: new Date()
        }
    }

    error = (message, data = null) => {
        return {
            success: false,
            message,
            data,
            time: new Date()
        }
    }
}

module.exports = new Collection();