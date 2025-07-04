const express = require('express');
const Delivery = require('../models/Delivery');
const router = express.Router();

router.post('/', async (req, res) => {
  const { prescriptionId, status } = req.body;
  const delivery = new Delivery({ prescriptionId, status });
  await delivery.save();
  res.json({ message: 'Delivery status created', delivery });
});

router.put('/:id', async (req, res) => {
  const delivery = await Delivery.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json({ message: 'Status updated', delivery });
});

router.get('/', async (req, res) => {
  const deliveries = await Delivery.find().populate('prescriptionId');
  res.json(deliveries);
});

module.exports = router;
