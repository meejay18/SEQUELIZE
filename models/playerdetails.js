'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class playerDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.footballdb, { foreignKey: 'playerId', as: 'footballdb' })
      // define association here
    }
  }

  const { v4: uuidv4 } = require('uuid')
  playerDetails.init(
    {
      id: { type: DataTypes.UUID, primaryKey: true, defaultValue: uuidv4 },
      goals: DataTypes.INTEGER,
      assist: DataTypes.INTEGER,
      redCard: DataTypes.INTEGER,
      yellowCard: DataTypes.INTEGER,
      playerId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: 'playerDetails',
    }
  )
  return playerDetails
}
