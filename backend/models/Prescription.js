const mongoose = require('mongoose');

const PrescriptionSchema = new mongoose.Schema({
  patientName: String,
  filePath: String,
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Prescription', PrescriptionSchema);
