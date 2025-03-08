const axios = require('axios');

// Base URL for your API
const BASE_URL = "http://localhost:3000";

// 1. Delete all help requests
async function deleteHelpAll() {
  try {
    const response = await axios.delete(`${BASE_URL}/api/help-requests/clear`); // Assuming your clear route is `/api/help-requests`
    console.log("All Help Requests Deleted:", response.data);
  } catch (error) {
    console.error("Error deleting all help requests:", error.response ? error.response.data : error.message);
  }
}

// 2. Delete all users
async function deleteUserAll() {
  try {
    const response = await axios.delete(`${BASE_URL}/api/users/clear`); // Assuming your clear route is `/api/users`
    console.log("All Users Deleted:", response.data);
  } catch (error) {
    console.error("Error deleting all users:", error.response ? error.response.data : error.message);
  }
}


async function runTests() {
    console.log("Deleting All...");
    await deleteHelpAll();
    await deleteUserAll();
  }
  
  runTests();