'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TodoTasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      project_name: {
        type: Sequelize.STRING
      },
      task_name: {
        type: Sequelize.STRING
      },
      assignee: {
        type: Sequelize.STRING
      },
      due_date: {
        type: Sequelize.STRING
      },
      assigner: {
        type: Sequelize.STRING
      },
      updates: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('TodoTasks');
  }
};
