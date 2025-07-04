const express = require('express');
const multer = require('multer');
const Prescription = require('../models/Prescription');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

router.post('/', upload.single('prescription'), async (req, res) => {
  try {
    const prescription = new Prescription({
      patientName: req.body.patientName,
      filePath: req.file.path,
    });
    await prescription.save();
    res.json({ message: 'Prescription uploaded successfully', prescription });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const prescriptions = await Prescription.find();
  res.json(prescriptions);
});

module.exports = router;
