'use strict';
module.exports = (sequelize, DataTypes) => {
  const training_schedule = sequelize.define('training_schedule', {
    training_name: DataTypes.STRING,
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    attachment: DataTypes.STRING
  }, {});
  training_schedule.associate = function(models) {
    // associations can be defined here
  };
  return training_schedule;
};