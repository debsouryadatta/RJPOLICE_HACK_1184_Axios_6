const fs = require("fs");
const fsPromises = fs.promises;
const mongoose = require("mongoose");
const Image = require("../models/Image");
const { default: axios } = require("axios");
const FormData = require("form-data");
const path = require("path");
const Camera = require("../models/Camera");
const cloudinary = require('cloudinary').v2;

// let intervalId; // To stop calling the saveImages function when there are no files in the directory

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const saveImagesToDb = () => {
  // Upload image to cloudinary storage
  let upload_preset = process.env.UPLOAD_PRESET;
  let cloud_name = process.env.CLOUD_NAME;
  const uploadImage = async (file) => {
    const result = await cloudinary.v2.uploader.upload(file);
    return result.public_id; // Return the public_id instead of the URL
  };

  async function saveImages() {
    try {
      const files = await fsPromises.readdir("./images/ipcam/0");

      for (let file of files) {
        const imagePath = path.join("./images/ipcam/0", file);
        const imageExists = await Image.findOne({ filename: file });

        if (!imageExists) {
          const imageId = await uploadImage(fs.createReadStream(imagePath));
          const cameraDetails = await Camera.findById(file.slice(0, 24));
          const newImage = await Image.create({
            fileName: file,
            image: imageId,
            cameraDetails: cameraDetails,
          })
          // const newImage = new Image({
          //   fileName: file,
          //   image: imageId,
          //   cameraDetails: file.slice(0, 24),
          // });
          // await newImage.save();
          console.log(`Saved new image: ${imageId}`);
        }
      }
    } catch (err) {
      console.log("Unable to scan directory: " + err);
    }
  }

  setInterval(saveImages, 3000); // Call saveImages every 3 seconds
};

module.exports = {
  saveImagesToDb,
};
