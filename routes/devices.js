const express = require('express');
const {
  addDevice,
  getDevices,
  delDevice,
  updateDevice,
} = require('../controllers/devices');
const router = express.Router();

router.route('/').get(getDevices).post(addDevice);
router.delete('/delete', delDevice);
router.put('/update', updateDevice);

module.exports = router;
