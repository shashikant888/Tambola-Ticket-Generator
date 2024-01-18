const sequelize = require('./config/database');
const TambolaTicket = require('./models/tambolaTicket');

// lets define the models
const models = [TambolaTicket];

// sync the models with the database
const syncDatabase = async () => {
  await sequelize.sync({ force: true }); // set force to true to recreate tables
  console.log('Database synchronized successfully!');
};

// Run the syncDatabase function
syncDatabase();



//use this...
// node migrate.js
