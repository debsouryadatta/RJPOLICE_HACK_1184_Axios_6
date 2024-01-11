const Camera = require("../models/Camera");

const fetchAllCameras = async (req, res) => {
    try {
        const response = await Camera.find({});
        res.status(200).json({success: true, message: 'All cameras fetched successfully', data: response});
    } catch (error) {
        next(error);
    }
}

module.exports = {
    fetchAllCameras
}