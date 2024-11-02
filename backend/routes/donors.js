const express = require('express');
const router = express.Router();
const Donor = require('../models/Donor');

// Register a new donor
router.post('/register', async (req, res) => {
    try {
        const donor = new Donor(req.body);
        await donor.save();
        res.status(201).json({ message: 'Registration successful', donor });
    } catch (error) {
        res.status(400).json({ message: 'Registration failed', error: error.message });
    }
});

// Get all donors
router.get('/', async (req, res) => {
    try {
        const donors = await Donor.find();
        res.json(donors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 