const mongoose = require('mongoose');
const uuidv1 = require('uuidv1');
const crypto = require('crypto');
const { ObjectId } = mongoose.Schema;

const vehicleSchema = new mongoose.Schema({
  vehicleNumber: {
    type: String,
  },
  vehicleName: {
    type: String,
  },
  capacity: {
    type: Number,
  },

  created: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
