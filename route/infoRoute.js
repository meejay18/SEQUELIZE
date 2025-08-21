const express = require('express')
const { createDetails, updateDetails } = require('../controller/infoController')
const route = express.Router()

route.post('/create-info/:playerId', createDetails)
route.put('/update-player-info/:id', updateDetails)

module.exports = route
