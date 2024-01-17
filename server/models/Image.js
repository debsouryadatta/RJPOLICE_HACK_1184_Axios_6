const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  cameraDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Camera',
  },
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;