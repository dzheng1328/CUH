const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: '❌ Error fetching users', error: err });
  }
});

// Get a user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
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
    const { name, type, location, needs, available_resources } = req.body;
    const newUser = await User.create({
      name,
      type,
      location,
      needs,
      available_resources
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: '❌ Error creating user', error: err });
  }
});

// Update user by ID
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      const { name, type, location, needs, available_resources } = req.body;
      await user.update({
        name,
        type,
        location,
        needs,
        available_resources
      });
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
    const user = await User.findByPk(req.params.id);
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

module.exports = router;
