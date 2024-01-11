const mongoose = require('mongoose');

const CameraSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Please provide valid email',
        ],
    },
    phoneNumber: {
        type: String,
        required: [true, 'Please provide phone number'],
    },
    address: {
        type: String,
        required: [true, 'Please provide address'],
    },
    pincode: {
        type: String,
        required: [true, 'Please provide pincode'],
    },
    cameraModel: {
        type: String,
        required: [true, 'Please provide camera model'],
    },
    cameraDMSLocation: {
        type: Object,
        required: [true, 'Please provide camera location'],
    },
    cameraResolution: {
        type: String,
        required: [true, 'Please provide camera resolution'],
    },
    cameraRange: {
        type: String,
        required: [true, 'Please provide camera range'],
    },
    ipAddress: {
        type: String,
        required: [true, 'Please provide IP address'],
    },
    verificationStatus: {
        type: String,
        default: 'pending',
    },
    licenseKey: {
        type: String,
    },
    rtspLink: {
        type: String,
    },
})

module.exports = mongoose.model('Camera', CameraSchema);