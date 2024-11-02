const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    organs: [{ type: String }],
    registrationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donor', donorSchema); 