const express = require('express');
const { registerCamera } = require('../controllers/registerCamera');
const { loginAdmin } = require('../controllers/loginAdmin');
const { fetchAllCameras } = require('../controllers/fetchAllCameras');
const { verifyCamera } = require('../controllers/verifyCamera');
const { startStreaming, stopStreaming, serveFiles } = require('../controllers/streaming');
const router = express.Router();

router.post('/registerCamera', registerCamera);
router.post('/loginAdmin', loginAdmin);
router.get('/fetchAllCameras', fetchAllCameras);
router.post('/verifyCamera', verifyCamera);
router.get('/streaming/:cameraId', startStreaming);
router.get('/stopStreaming/:cameraId', stopStreaming);

module.exports = router;