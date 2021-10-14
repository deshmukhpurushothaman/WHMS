const mongoose = require('mongoose');
const uuidv1 = require('uuidv1');
const crypto = require('crypto');
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
  },
  customerName: {
    type: String,
  },
  customerAddress: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  products: [
    {
      product: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      price: {
        type: Number,
      },
    },
  ],
  status: {
    type: String,
  },

  vehicleId: {
    type: ObjectId,
    ref: 'Vehicle',
  },
  confinement_no: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
  updatedBy: {
    type: ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Order', orderSchema);
