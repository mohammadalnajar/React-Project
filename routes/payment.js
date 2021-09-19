const express = require('express');
const router = express.Router();
const { paymentHandle } = require('../controllers/payment');

router.post('/', paymentHandle);
module.exports = router;
