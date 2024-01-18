const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TambolaTicket = sequelize.define('TambolaTicket', {
  setNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ticketNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  number1: DataTypes.INTEGER,
  number2: DataTypes.INTEGER,
  number3: DataTypes.INTEGER,
  number4: DataTypes.INTEGER,
  number5: DataTypes.INTEGER,
  number6: DataTypes.INTEGER,
  number7: DataTypes.INTEGER,
  number8: DataTypes.INTEGER,
  number9: DataTypes.INTEGER,
}, {
  // Additional options, if needed
});

module.exports = TambolaTicket;
