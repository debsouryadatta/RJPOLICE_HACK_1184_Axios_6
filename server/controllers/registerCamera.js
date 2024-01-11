const Camera = require("../models/Camera");

const registerCamera = async (req, res, next) => {
    try {
        const response = await Camera.create(req.body);
        res.status(201).json({success: true,message: 'Camera registered successfully', data: response});
    } catch (error) {
        next(error);
    }
}

module.exports = {
    registerCamera
}