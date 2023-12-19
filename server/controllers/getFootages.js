const getLiveFootage = (req, res) => {
    res.send('getLiveFootage')
}

const getRecordedFootage = (req, res) => {
    res.send('getRecordedFootage')
}
module.exports = {
    getLiveFootage,
    getRecordedFootage
}