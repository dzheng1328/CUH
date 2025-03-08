// require("dotenv").config();
// const { Sequelize } = require("sequelize");

const Sequelize = require('sequelize');
const config = require('../config.js')['development'];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// Create a new Sequelize instance
// const sequelize = new Sequelize(
//     rocess.env.DB_NAME, 
//     process.env.DB_USER, 
//     process.env.DB_PASSWORD, 
//     {
//       host: process.env.DB_HOST,
//       port: process.env.DB_PORT,
//       dialect: "mysql",
//       logging: console.log,  // Optional: for debugging
//       dialectOptions: {
//         connectTimeout: 10000,  // 10 seconds timeout (default is 10 seconds)
//       },
//       pool: {
//         acquire: 30000,  // Time (in ms) before throwing an error if the connection is not established
//       },
//     }
//   );
  

// Test Connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL Connected!");
  } catch (error) {
    console.error("❌ Unable to connect to MySQL:", error);
  }
})();

module.exports = sequelize;