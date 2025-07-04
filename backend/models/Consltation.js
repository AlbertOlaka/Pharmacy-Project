const mongoose = require('mongoose');

const ConsultationSchema = new mongoose.Schema({
  patientName: String,
  doctorName: String,
  date: String,
  time: String,
  status: {
    type: String,
    default: 'Pending',
  },
});

module.exports = mongoose.model('Consultation', ConsultationSchema);
