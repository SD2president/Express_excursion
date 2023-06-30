'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'destinations',
      'picture', //new column
      Sequelize.STRING,
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'destinations',
      'picture'
    )
  }
};
