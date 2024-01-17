const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema(
  {
    public_id: {
      type: String,
    },
    caughtDetails: {
      type: String,
    },
    message: {
      type: String,
    },
    cameraModel: {
      type: String,
    },
    // address: {
    //   type: String,
    // },
    time_stamp:{
      type: String,
    },
    ipAddress: {
      type: String,
    },
    ownerName: {
      type: String,
    },
    OwnerPhone: {
      type: String,
    },
  },
  { 
    collection: "alerts",
    timestamps: true,
  }
);

module.exports = mongoose.model("Alert", AlertSchema);
