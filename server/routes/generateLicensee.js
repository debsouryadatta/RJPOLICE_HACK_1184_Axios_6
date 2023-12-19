const express = require('express')
const router = express.Router()

const {generateLicensee} = require('../controllers/generateLicensee')

router.post('/generateLicensee',generateLicensee)

module.exports = router