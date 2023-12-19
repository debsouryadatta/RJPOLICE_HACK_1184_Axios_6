const express = require('express')
const router = express.Router()

const {registerCamera} = require('../controllers/registerCamera')

router.post('/registerCamera',registerCamera)

module.exports = router