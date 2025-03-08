const { DataTypes } = require("sequelize");
const sequelize = require("./db");  // Import the sequelize instance

// Define the User model
const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM("victim", "volunteer"),
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  needs: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  available_resources: {
    type: DataTypes.JSON,
    allowNull: true,
  },
});

module.exports = User;
