const cloudinary = require('cloudinary').v2;
const Image = require("../models/Image");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const deleteAllImagesInDb = async () => {
  const deleteImages = async () => {
    try {
      // Delete from database
      const response = await Image.deleteMany({});
      console.log(response);

      // Delete images from Cloudinary
      const resources = await cloudinary.api.resources({ type: 'upload', prefix: 'raj-hack' });
      for (let resource of resources.resources) {
        await cloudinary.uploader.destroy(resource.public_id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Call deleteAllImagesInDb every 5 minutes
  setInterval(deleteImages, 5 * 60 * 1000);
};

module.exports = {
  deleteAllImagesInDb,
};
