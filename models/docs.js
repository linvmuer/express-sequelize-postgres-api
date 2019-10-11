'use strict';
module.exports = (sequelize, DataTypes) => {
  const docs = sequelize.define('docs', {
    owner: DataTypes.STRING,
    name: DataTypes.STRING,
    attachment: DataTypes.STRING,
    emp_id: DataTypes.INTEGER
  }, {});
  docs.associate = function(models) {
    // associations can be defined here
  };
  return docs;
};