const mongoose = require('mongoose');

const DeliverySchema = new mongoose.Schema({
  prescriptionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Prescription',
  },
  status: {
    type: String,
    enum: ['Pending', 'Shipped', 'Delivered'],
    default: 'Pending',
  },
});

module.exports = mongoose.model('Delivery', DeliverySchema);
