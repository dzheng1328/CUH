const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { prisma } = require("../models/db");

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await prisma.User.findMany();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: '❌ Error fetching users', error: err });
  }
});

// Get a user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await prisma.User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: '❌ User not found' });
    }
  } catch (err) {
    res.status(500).json({ message: '❌ Error fetching user', error: err });
  }
});

// Create a new user
router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const { name, type, location, needs, available_resources } = req.body;
    const newUser = await prisma.User.create({data:{
      name,
      type,
      phone,
      location,
      needs,
      available_resources
  }});
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: '❌ Error creating user', error: err });
  }
});

// Update user by ID
router.put('/:id', async (req, res) => {
  try {
    const user = await prisma.User.findByPk(req.params.id);
    if (user) {
      const { name, type, location, needs, available_resources } = req.body;
      await user.update({data:{
        name,
        type,
        phone,
        location,
        needs,
        available_resources
    }});
      res.json(user);
    } else {
      res.status(404).json({ message: '❌ User not found' });
    }
  } catch (err) {
    res.status(500).json({ message: '❌ Error updating user', error: err });
  }
});

// Delete user by ID
router.delete('/:id', async (req, res) => {
  try {
    const user = await prisma.User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.json({ message: '✅ User deleted' });
    } else {
      res.status(404).json({ message: '❌ User not found' });
    }
  } catch (err) {
    res.status(500).json({ message: '❌ Error deleting user', error: err });
  }
});

//DELETES ALL USERS CAUTION
router.delete('/clear', async (req, res) => {
  try {
    const result = await prisma.User.deleteMany();  // Deletes all users from the User table
    res.status(200).json({ message: '✅ All users have been deleted', deletedCount: result.count });
  } catch (err) {
    res.status(500).json({ message: '❌ Error deleting all users', error: err });
  }
});


module.exports = router;
