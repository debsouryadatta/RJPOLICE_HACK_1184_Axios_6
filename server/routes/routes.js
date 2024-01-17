const express = require('express');
const { registerCamera } = require('../controllers/registerCamera');
const { loginAdmin } = require('../controllers/loginAdmin');
const { fetchAllCameras } = require('../controllers/fetchAllCameras');
const { verifyCamera } = require('../controllers/verifyCamera');
const { startStreaming, stopStreaming, serveFiles } = require('../controllers/streaming');
const { addAlert, fetchAllAlerts } = require('../controllers/alerts');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { captureImages, stopCapturing } = require('../controllers/captureImages');

router.post('/registerCamera', registerCamera);
router.post('/loginAdmin', loginAdmin);
router.get('/fetchAllCameras', fetchAllCameras);
router.post('/verifyCamera', verifyCamera);
router.get('/streaming/:cameraId', startStreaming);
router.get('/stopStreaming/:cameraId', stopStreaming);
router.post('/addAlert', addAlert);
router.get('/fetchAllAlerts', fetchAllAlerts);

router.get('/captureImages/:cameraId', captureImages);
router.get('/stopCapturing/:cameraId', stopCapturing);

module.exports = router;