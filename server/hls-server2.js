const express = require("express");
const fs = require("fs");
const { spawn } = require('child_process');
// const Camera = require("./models/Camera");
const app = express();
const PORT = 4000;

let ffmpegProcess = null;
let cleanerProcess = null;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
  next();
});

app.get("/streaming/:cameraId", async (req, res) => {
  // Kill the previous processes if they exist
  if (ffmpegProcess) {
    ffmpegProcess.kill();
    await onExit(ffmpegProcess);
    ffmpegProcess = null;
  }
  if (cleanerProcess) {
    cleanerProcess.kill();
    await onExit(cleanerProcess);
    cleanerProcess = null;
  }

  // Start a new FFmpeg process with the provided RTSP URL
  ffmpegProcess = spawn('ffmpeg', ['-i', 'rtsp://admin:10iLtxyh@192.168.29.79/live/ch00_1', '-fflags', 'flush_packets', '-max_delay', '5', '-flags', '-global_header', '-hls_time', '5', '-hls_list_size', '3', '-vcodec', 'copy', '-y', `./videos/ipcam/index.m3u8`], { detached: true });
  ffmpegProcess.on('error', (error) => {
    console.error(`Failed to start FFmpeg process: ${error.message}`);
  });

  // Start the cleaner.js script
  cleanerProcess = spawn('node', ['./cleaner.js'], { detached: true });
  cleanerProcess.on('error', (error) => {
    console.error(`Failed to start cleaner.js process: ${error.message}`);
  });

  res.send(`Started streaming camera ${req.params.cameraId}`);
});

app.get("/stop", async (req, res) => {
  // Kill the processes if they exist
  if (ffmpegProcess) {
    ffmpegProcess.kill();
    await onExit(ffmpegProcess);
    ffmpegProcess = null;
  }
  if (cleanerProcess) {
    cleanerProcess.kill();
    await onExit(cleanerProcess);
    cleanerProcess = null;
  }

  res.send('Stopped streaming');
});

// Helper function to wait for a process to exit
function onExit(childProcess) {
  return new Promise((resolve, reject) => {
    childProcess.on('exit', resolve);
    childProcess.on('error', reject);
  });
}

app.get("*", (req, res) => {
  var filePath = "./videos/ipcam" + req.url;
  console.log(filePath);
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code == "ENOENT") {
        fs.readFile("./404.html", (error, content) => {
          res.end(content, "utf-8");
        });
      } else {
        res.status(500).send("Sorry, check with the site admin for error: " + error.code + " ..\n");
      }
    } else {
      res.end(content, "utf-8");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
