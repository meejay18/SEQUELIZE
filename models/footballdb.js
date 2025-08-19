'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class footballdb extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  const { v4: uuidv4 } = require('uuid')

  footballdb.init(
    {
      id: { type: DataTypes.UUID, primaryKey: true, defaultValue: uuidv4 },
      playerName: DataTypes.STRING,
      playerAge: DataTypes.INTEGER,
      playerCountry: DataTypes.STRING,
      playerClub: DataTypes.STRING,
      playerWage: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'footballdb',
    }
  )
  return footballdb
}
