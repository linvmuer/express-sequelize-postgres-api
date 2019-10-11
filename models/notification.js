'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    dateCreated: DataTypes.STRING,
    sender: DataTypes.STRING
  }, {});
  Notification.associate = function(models) {
    // associations can be defined here
  };
  return Notification;
};