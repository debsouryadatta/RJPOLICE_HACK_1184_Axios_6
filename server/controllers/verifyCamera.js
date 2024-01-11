const { v4: uuidv4 } = require("uuid");
const Camera = require("../models/Camera");

const verifyCamera = async (req, res, next) => {
  try {
    let { cameraId, verificationStatus } = req.body;
    if (verificationStatus === "verified") {
      let licenseKey = uuidv4();
      const response = await Camera.findByIdAndUpdate(
        cameraId,
        { verificationStatus, licenseKey, rtspLink: "rtsp://admin:10iLtxyh@192.168.29.79/live/ch00_1"},
        { new: true }
      );
      res.status(200).json({success: true, message: 'Camera verified successfully', data: response});
    }
    if (verificationStatus === "rejected") {
      const response = await Camera.findByIdAndUpdate(
        cameraId,
        { verificationStatus, rtspLink: "rtsp://admin:10iLtxyh@192.168.29.79/live/ch00_1" },
        { new: true }
      );
      res.status(200).json({success: true, message: 'Camera rejected successfully', data: response});
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  verifyCamera,
};
