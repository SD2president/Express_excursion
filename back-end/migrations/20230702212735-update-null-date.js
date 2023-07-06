'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
       queryInterface.changeColumn('destinations', 'date', {
        allowNull: true
      })
    ])
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.changeColumn('destinations', 'date')])
  }
};
