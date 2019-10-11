'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoTasks = sequelize.define('TodoTasks', {
    project_name: DataTypes.STRING,
    task_name: DataTypes.STRING,
    assignee: DataTypes.STRING,
    due_date: DataTypes.STRING,
    assigner: DataTypes.STRING,
    updates: DataTypes.TEXT,
    status: DataTypes.STRING
  }, {});
  TodoTasks.associate = function(models) {
    // associations can be defined here
  };
  return TodoTasks;
};
