//export module to show on server
exports.version = (req, res, next) => {
    return res.status(200).json("Hello world")
}