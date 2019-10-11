'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('travels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_name: {
        type: Sequelize.STRING
      },
      event_type: {
        type: Sequelize.STRING
      },
      venue: {
        type: Sequelize.STRING
      },
      travel_date: {
        type: Sequelize.STRING
      },
      return_date: {
        type: Sequelize.STRING
      },
      transport_cost: {
        type: Sequelize.STRING
      },
      boarding_cost: {
        type: Sequelize.STRING
      },
      other_cost: {
        type: Sequelize.STRING
      },
      line_man_appr: {
        type: Sequelize.INTEGER
      },
      hr_approval: {
        type: Sequelize.INTEGER
      },
      emp_name: {
        type: Sequelize.STRING
      },
      emp_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('travels');
  }
};