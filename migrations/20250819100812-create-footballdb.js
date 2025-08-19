'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('footballdbs', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        default: Sequelize.UUID,
      },
      playerName: {
        type: Sequelize.STRING,
      },
      playerAge: {
        type: Sequelize.INTEGER,
      },
      playerCountry: {
        type: Sequelize.STRING,
      },
      playerClub: {
        type: Sequelize.STRING,
      },
      playerWage: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('footballdbs')
  },
}
