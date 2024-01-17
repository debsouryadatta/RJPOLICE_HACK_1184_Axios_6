// controllers/streamController.js

const { spawn } = require("child_process");
const fs = require("fs");
const findRemoveSync = require("find-remove");
const Camera = require("../models/Camera");
const { exec } = require('child_process');
const { default: axios } = require("axios");

let ffmpegProcesses = {}; // Stores the FFmpeg processes for each camera
let cleanerIntervals = {}; // Stores the cleaner intervals for each camera(both images and videos)
let lastFileTime = {}; // Stores the last time a file was added to the output directory 
let watchers = {}; // Stores the fs.watch for the output directory for each camera
let restartIntervals = {}; // Stores the restart intervals for each camera
let lastFileTime2 = {}; // Stores the last time a file was added to the output directory for dislocation purpose
let watchers2 = {}; // Stores the fs.watch for the output directory for dislocation purpose

// ?Start streaming for cameras
const startStreaming = async () => {
  const cameras = await Camera.find({});

  // cameras.forEach(async (camera, index) => {
    startStreamingForCamera(cameras[0], 0);
  // });
    cameraDislocation(cameras[0], 0);
};

const startStreamingForCamera = async (camera, index) => {
  try {
      // Kill the previous FFmpeg process for this camera if it exists
  if (ffmpegProcesses[camera._id]) {
    ffmpegProcesses[camera._id].kill();
    await onExit(ffmpegProcesses[camera._id]);
    ffmpegProcesses[camera._id] = null;
    watchers[camera._id].close();
    clearInterval(restartIntervals[camera._id]); // Clear the restart interval
  }

  // Start a new FFmpeg process with the provided RTSP URL
  // ffmpegProcesses[camera._id] = spawn('ffmpeg', ['-i', `rtsp://admin:10iLtxyh@192.168.29.79/live/ch${index}_1`, '-fflags', 'flush_packets', '-max_delay', '5', '-flags', '-global_header', '-hls_time', '5', '-hls_list_size', '3', '-vcodec', 'copy', '-y', `./videos/ipcam/${index}/${camera._id}.m3u8`, '-vf', 'fps=1', '-q:v', '2', `./images/ipcam/${index}/${camera._id}_%03d.jpg`]);

  ffmpegProcesses[camera._id] = spawn('ffmpeg', ['-i', `rtsp://admin:10iLtxyh@192.168.29.79/live/ch${index}_1`, '-vf', 'fps=1', '-q:v', '2', `./images/ipcam/${index}/${camera._id}_%03d.jpg`]);
  // We will keep the videos indexwise, suppose we have 3 cameras, then we will have 3 folders in videos/ipcam/0, videos/ipcam/1, videos/ipcam/2, then we will store accordingly.(Manually created the folders)

    // Initialize lastFileTime for this camera
    lastFileTime[camera._id] = Date.now();

    // Watch the output directory for new files
    watchers[camera._id] = fs.watch(`./images/ipcam/${index}/`, (eventType, filename) => {
      if (eventType === 'rename' && filename.endsWith('.jpg')) {
        lastFileTime[camera._id] = Date.now();
      }
    });
  
    // Check every second if more than 1 minutes have passed since the last file was added
    restartIntervals[camera._id] = setInterval(() => {
      if (Date.now() - lastFileTime[camera._id] > 60 * 1000) { // 1 minutes
        console.log('No new files for 1 minutes, restarting FFmpeg');
        if (ffmpegProcesses[camera._id]) {
          ffmpegProcesses[camera._id].kill('SIGKILL');
          watchers[camera._id].close();
          clearInterval(restartIntervals[camera._id]); // Clear the restart interval
        }
        startStreamingForCamera(camera, index);
      }
    }, 1000);

  // Run the cleaner function
  cleanerIntervals[camera._id] = cleanerFunction(index);
  } catch (error) {
    console.log(error);
  }

};

// ?Stop streaming for a camera
const stopStreaming = async (req, res) => {
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
    var result = findRemoveSync(`./videos/ipcam/${index}`, {
      age: { seconds: 30 },
      extensions: ".ts",
    });
    console.log(result, "hii");
    var result2 = findRemoveSync(`./images/ipcam/${index}`, {
      age: { seconds: 10 },
      extensions: ".jpg",
    });
    console.log(result2, "hii2");
  }, 5000);
}


// ?Camera Dislocation Feature
const cameraDislocation = async(camera, index)=> {
  // Initialize lastFileTime for this camera
  lastFileTime2[camera._id] = Date.now();

  // Watch the output directory for new files
  watchers2[camera._id] = fs.watch(`./images/ipcam/${index}/`, (eventType, filename) => {
    if (eventType === 'rename' && filename.endsWith('.jpg')) {
      lastFileTime2[camera._id] = Date.now();
    }
  });

  // Do the fetch req if more than 2 minutes have passed since the last file was added
  if (Date.now() - lastFileTime2[camera._id] > 2 * 60 * 1000) { // 2 minutes
    console.log('No new files for 2 minutes, fetching data...');
    const response = await axios.post('http://localhost:5000/api/v1/addAlert', {
      message: 'Camera Dislocation',
      cameraModel: camera.cameraModel,
      address: camera.address,
      ipAddress: camera.ipAddress,
      ownerName: camera.name,
      ownerPhone: camera.phoneNumber,
    })
    console.log(response.data);
  }
}


// ?Serving Files
const serveFiles = (req, res) => {
  var filePath = "./videos/ipcam/0" + req.url;
  console.log(filePath);
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code == "ENOENT") {
        fs.readFile("./404.html", (error, content) => {
          res.end(content, "utf-8");
        });
      } else {
        res
          .status(500)
          .send(
            "Sorry, check with the site admin for error: " +
              error.code +
              " ..\n"
          );
      }
    } else {
      res.end(content, "utf-8");
    }
  });
};

module.exports = {
  startStreaming,
  stopStreaming,
  serveFiles,
};
