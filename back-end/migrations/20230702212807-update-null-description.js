'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
       queryInterface.changeColumn('destinations', 'description', {
        allowNull: true
      })
    ])
  },
  async down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.changeColumn('destinations', 'description')])
  }
};
