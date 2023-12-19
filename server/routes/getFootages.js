const express = require('express')
const router = express.Router()

const {getLiveFootage,getRecordedFootage} = require('../controllers/getFootages')

router.post('/getLiveFootage',getLiveFootage)
router.post('/getRecordedFootage',getRecordedFootage)

module.exports = router