const express = require('express')
const {
  createNewPlayer,
  getAllPlayers,
  getOnePlayer,
  updatePlayer,
  deleteOnePlayer,
} = require('../controller/playerController')
const route = express.Router()

route.post('/create-player', createNewPlayer)
route.get('/getAllPlayers', getAllPlayers)
route.get('/getOnePlayer/:id', getOnePlayer)
route.put('/updatePlayer/:id', updatePlayer)
route.delete('/deleteplayer/:id', deleteOnePlayer)

module.exports = route
