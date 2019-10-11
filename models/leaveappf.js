'use strict';
module.exports = (sequelize, DataTypes) => {
  const leaveappf = sequelize.define('leaveappf', {
    name: DataTypes.STRING,
    supervisor_name: DataTypes.STRING,
    department_name:DataTypes.STRING,
    leave_type: DataTypes.STRING,
    leave_date: DataTypes.STRING,
    return_date: DataTypes.STRING,
    attachment: DataTypes.STRING,
    dateFiled: DataTypes.STRING,
    line_man_appr: DataTypes.NUMBER,
    hr_appr: DataTypes.NUMBER,
    emp_id: DataTypes.NUMBER
  }, {});
  leaveappf.associate = function(models) {
    // associations can be defined here
  };
  return leaveappf;
};
