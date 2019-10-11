'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('leaveappfs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      supervisor_name: {
        type: Sequelize.STRING
      },
      department_name: {
        type: Sequelize.STRING
      },
      leave_type: {
        type: Sequelize.STRING
      },
      leave_date: {
        type: Sequelize.STRING
      },
      return_date: {
        type: Sequelize.STRING
      },
      attachment: {
        type: Sequelize.STRING
      },
      dateFiled: {
        type: Sequelize.STRING
      },
      line_man_appr: {
        type: Sequelize.INTEGER
      },
      hr_appr: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('leaveappfs');
  }
};
