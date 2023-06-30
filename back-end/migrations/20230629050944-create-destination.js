'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('destinations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      destination_id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      continent_name: {
        type: Sequelize.STRING
      },
      country_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      author: {
        type: Sequelize.STRING
      },
      date_posted: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('destinations');
  }
};