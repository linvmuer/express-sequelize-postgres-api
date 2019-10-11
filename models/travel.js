'use strict';
module.exports = (sequelize, DataTypes) => {
  const travel = sequelize.define('travel', {
    event_name: DataTypes.STRING,
    event_type: DataTypes.STRING,
    venue: DataTypes.STRING,
    travel_date: DataTypes.STRING,
    return_date: DataTypes.STRING,
    transport_cost: DataTypes.STRING,
    boarding_cost: DataTypes.STRING,
    other_cost: DataTypes.STRING,
    line_man_appr: DataTypes.INTEGER,
    hr_approval: DataTypes.INTEGER,
    emp_name: DataTypes.STRING,
    emp_id: DataTypes.INTEGER
  }, {});
  travel.associate = function(models) {
    // associations can be defined here
  };
  return travel;
};