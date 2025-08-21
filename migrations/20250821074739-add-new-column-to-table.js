'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('playerdetails', 'playerId', {
      type: Sequelize.UUID,
      allowNull: true, // Adjust as needed
      references: { model: 'footballdb', key: 'id' },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('playerdetails', 'playerId')
  },
}

// migrations/20250821074739-add-new-column-to-table.js
