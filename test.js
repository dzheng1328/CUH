const axios = require('axios');

// Base URL for your API
const BASE_URL = "http://localhost:3000";

// 1. Test API Root (GET request)
async function testApiRoot() {
  try {
    const response = await axios.get(BASE_URL);
    console.log("API Root Test:", response.data);
  } catch (error) {
    console.error("Error testing API root:", error.response ? error.response.data : error.message);
  }
}

// 2. Get All Users (GET request)
async function getAllUsers() {
  try {
    const response = await axios.get(`${BASE_URL}/api/users`);
    console.log("All Users:", response.data);
  } catch (error) {
    console.error("Error getting users:", error.response ? error.response.data : error.message);
  }
}

// 3. Create a New User (POST request)
async function createNewUser() {
  const userData = {
    name: 'chicks',
    phone: '7224545645',
    type: 'volunteer',
    location: '34.67657225397399, -82.83541151936164'
  };

  try {
    const response = await axios.post(`${BASE_URL}/api/users`, userData, {
      headers: { "Content-Type": "application/json" }
    });
    console.log("User Created:", response.data);
  } catch (error) {
    console.error("Error creating user:", error.response ? error.response.data : error.message);
  }
}

// 4. Get All Help Requests (GET request)
async function getAllHelpRequests() {
  try {
    const response = await axios.get(`${BASE_URL}/api/help-requests`);
    console.log("All Help Requests:", response.data);
  } catch (error) {
    console.error("Error getting help requests:", error.response ? error.response.data : error.message);
  }
}

// 5. Create a Help Request (POST request)
async function createHelpRequest() {
  const helpRequestData = {
    name: "Jane Doe",
    phone: "1234567890",
    location: "California",
    type_of_help: "medical"
  };

  try {
    const response = await axios.post(`${BASE_URL}/api/help-requests`, helpRequestData, {
      headers: { "Content-Type": "application/json" }
    });
    console.log("Help Request Created:", response.data);
  } catch (error) {
    console.error("Error creating help request:", error.response ? error.response.data : error.message);
  }
}

// Test all functions
async function runTests() {
  console.log("Running tests...");
  // await testApiRoot();
  // await getAllUsers();
  await createNewUser();
  // await getAllHelpRequests();
  // await createHelpRequest();
}

runTests();
