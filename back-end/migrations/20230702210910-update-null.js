'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
       queryInterface.changeColumn('destinations', 'continent_name', {
        allowNull: true
      })
    ])
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.changeColumn('destinations', 'continent_name')])
  }
};
