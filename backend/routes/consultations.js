const express = require('express');
const Consultation = require('../models/Consultation');
const router = express.Router();

router.post('/', async (req, res) => {
  const { patientName, doctorName, date, time } = req.body;
  const consult = new Consultation({ patientName, doctorName, date, time });
  await consult.save();
  res.json({ message: 'Consultation booked', consult });
});

router.get('/', async (req, res) => {
  const consultations = await Consultation.find();
  res.json(consultations);
});

module.exports = router;
