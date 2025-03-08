const express = require("express");
const HelpRequest = require("../models/HelpRequest");
const User = require("../models/User"); // To find volunteers
const { prisma } = require("../models/db");
const router = express.Router();

// 📌 1. Submit a new help request
router.post("/", async (req, res) => {
  try {
    const { name, phone, location, type_of_help } = req.body;
    const newHelpRequest = await prisma.HelpRequest.create({data:{
      name,
      phone,
      location,
      type_of_help,
  }});
    res.status(201).json(newHelpRequest);
  } catch (err) {
    res.status(500).json({ message: "❌ Error creating help request", error: err });
  }
});  


// 1a. Get all help requests
router.get("/", async (req, res) => {
  try{
    const allHelp = await prisma.HelpRequest.findMany();
    res.status(200).json(allHelp);
  }
  catch (err){
    res.status(500).json({ message:'❌ Error fetching users', error: err});
  }
});

// 📌 2. Find volunteers near a help request (mock geolocation match)
router.get("/match/:location", async (req, res) => {
  try {
    const { location } = req.params;

    // Fetch volunteers near the location (exact match for now)
    const volunteers = await prisma.User.findAll({data:{ where: { location } }});

    if (volunteers.length === 0) {
      return res.status(404).json({ message: "❌ No volunteers found nearby" });
    }

    res.json(volunteers);
  } catch (err) {
    res.status(500).json({ message: "❌ Error finding volunteers", error: err });
  }
});

// 📌 3. Volunteer accepts a help request
router.post("/:id/accept", async (req, res) => {
  try {
    const { id } = req.params;
    const { volunteer_id } = req.body;

    const helpRequest = await prisma.HelpRequest.findByPk(id);
    if (!helpRequest) {
      return res.status(404).json({ message: "❌ Help request not found" });
    }

    // Update help request with volunteer ID and set status to accepted
    await helpRequest.update({ volunteer_id, status: "accepted" });

    res.json({ message: "✅ Help request accepted", helpRequest });
  } catch (err) {
    res.status(500).json({ message: "❌ Error accepting help request", error: err });
  }
});

// 📌 4. Get all volunteers & help requests for the map
router.get("/map-data", async (req, res) => {
  try {
    const volunteers = await prisma.User.findAll();
    const helpRequests = await prisma.HelpRequest.findAll();

    res.json({ volunteers, helpRequests });
  } catch (err) {
    res.status(500).json({ message: "❌ Error fetching map data", error: err });
  }
});

//5. DELETE ALL HELP REQUESTS CAUTION
router.delete('/clear', async (req, res) => {
  try {
    await prisma.HelpRequest.deleteMany();  // Deletes all help requests from the helpRequests table
    res.status(200).json({ message: '✅ All help requests have been deleted' });
  } catch (err) {
    res.status(500).json({ message: '❌ Error deleting all help requests', error: err });
  }
});


module.exports = router;

