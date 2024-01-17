const Alert = require("../models/Alert");

const addAlert = async (req, res) => {
    try {
        console.log(req.body);
        const response = await Alert.create(req.body);
        res.status(200).json({success: true, message: 'Alert added successfully', data: response});
    } catch (error) {
        next(error);
    }
}


const fetchAllAlerts = async (req, res) => {
    try {
        const response = await Alert.find({});
        res.status(200).json({success: true, message: 'All alerts fetched successfully', data: response});
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addAlert,
    fetchAllAlerts
}