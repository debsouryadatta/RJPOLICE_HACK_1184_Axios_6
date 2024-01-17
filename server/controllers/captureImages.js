const { spawn } = require("child_process");
const fs = require("fs");
const findRemoveSync = require("find-remove");
const Camera = require("../models/Camera");
const { exec } = require('child_process');
const { default: axios } = require("axios");

let ffmpegProcesses = {}; // Stores the FFmpeg processes for each camera
let cleanerIntervals = {}; // Stores the cleaner intervals for each camera(both images and videos)

const captureImages = async (req,res)=> {
    const cameraId = req.params.cameraId;

    if (ffmpegProcesses[cameraId]) {
        ffmpegProcesses[cameraId].kill();
        await onExit(ffmpegProcesses[cameraId]);
        ffmpegProcesses[cameraId] = null;
        watchers[cameraId].close();
        clearInterval(restartIntervals[cameraId]); // Clear the restart interval
      }

      ffmpegProcesses[cameraId] = spawn('ffmpeg', ['-i', `rtsp://admin:10iLtxyh@192.168.29.79/live/ch00_1`, '-vf', 'fps=1', '-q:v', '2', `./images/ipcam/0/${cameraId}_%03d.jpg`]);

        // Run the cleaner function
  cleanerIntervals[cameraId] = cleanerFunction(0);

  res.status(200).json({message: 'successful'});
}

// ?Stop streaming for a camera
const stopCapturing = async (req, res) => {
    const cameraId = req.params.cameraId;
  
    // Kill the FFmpeg process for this camera if it exists
    if (ffmpegProcesses[cameraId]) {
      ffmpegProcesses[cameraId].kill();
      await onExit(ffmpegProcesses[cameraId]);
      ffmpegProcesses[cameraId] = null;
    }
  
    // Clear the cleaner interval for this camera if it exists
    if (cleanerIntervals[cameraId]) {
      clearInterval(cleanerIntervals[cameraId]);
      cleanerIntervals[cameraId] = null;
    }
  
      // Clear the restart interval for this camera if it exists
      if (restartIntervals[cameraId]) {
        clearInterval(restartIntervals[cameraId]);
        restartIntervals[cameraId] = null;
      }
  
    res.send(`Stopped streaming camera ${cameraId}`);
  };
  
  // Helper function to wait for a process to exit
  function onExit(childProcess) {
    return new Promise((resolve, reject) => {
      childProcess.on("exit", resolve);
      childProcess.on("error", reject);
    });
  }


  function cleanerFunction(index) {
    return setInterval(() => {
      var result2 = findRemoveSync(`./images/ipcam/${index}`, {
        age: { seconds: 10 },
        extensions: ".jpg",
      });
      console.log(result2, "hii2");
    }, 5000);
  }

    module.exports = {
        captureImages,
        stopCapturing
    }