const { footballdb } = require('../models')

exports.createNewPlayer = async (req, res) => {
  const data = req.body

  try {
    const newPlayer = await footballdb.create(data)

    return res.status(201).json({
      message: 'Player created',
      data: newPlayer,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error creating student',
      error: error.message,
    })
  }
}

exports.getAllPlayers = async (req, res) => {
  try {
    const players = await footballdb.findAll()

    return res.status(200).json({
      message: 'successful',
      data: players,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error getting players',
      error: error.message,
    })
  }
}

exports.getOnePlayer = async (req, res) => {
  const { id } = req.params
  try {
    const player = await footballdb.findByPk(id)

    return res.status(200).json({
      message: 'Successful',
      data: player,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error getting player',
      error: error.message,
    })
  }
}

exports.updatePlayer = async (req, res) => {
  const { id } = req.params
  const data = req.body
  try {
    const findPlayer = await footballdb.findByPk(id)
    if (!findPlayer) {
      return res.status(404).json({
        message: 'player not found',
      })
    }

    const update = await findPlayer.update(data)
    return res.status(200).json({
      message: 'successfully',
      data: update,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error updating player',
      error: error.message,
    })
  }
}

exports.deleteOnePlayer = async (req, res) => {
  const { id } = req.params
  try {
    const player = await footballdb.findByPk(id)
    if (!player) {
      return res.status(404).json({
        message: 'player not found',
      })
    }

    const deleted = await player.destroy()
    return res.status(200).json({
      message: 'player deleted successfully',
      data: deleted,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error deleting player',
      error: error.message,
    })
  }
}
