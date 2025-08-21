const { playerDetails } = require('../models')
// const {footballdb} = require("../models")

exports.createDetails = async (req, res) => {
  const { playerId } = req.params
  const data = req.body
  try {
    const newInfo = await playerDetails.create({ playerId, ...data })
    return res.status(200).json({
      message: 'player details created',
      data: newInfo,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error creating details',
      error: error.message,
    })
  }
}

exports.updateDetails = async (req, res) => {
  const { id } = req.params
  const data = req.body

  try {
    const findPlayerdetails = await playerDetails.findByPk(id)
    if (!findPlayerdetails) {
      return res.status(404).json({
        message: 'details not found',
      })
    }

    const updated = await findPlayerdetails.update(data)
    return res.status(200).json({
      message: 'updated successfully',
      data: updated,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error updating player details',
      error: error.message,
    })
  }
}
