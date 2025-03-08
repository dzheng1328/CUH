// const { DataTypes } = require("sequelize");
// const sequelize = require("./db");

// const HelpRequest = sequelize.define("HelpRequest", {
//   id: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   phone: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   location: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   type_of_help: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   status: {
//     type: DataTypes.ENUM("pending", "accepted", "completed"),
//     defaultValue: "pending",
//   },
//   volunteer_id: {
//     type: DataTypes.UUID,
//     allowNull: true, // Populated when a volunteer accepts the request
//   },
// });

// module.exports = HelpRequest;
