const Device = require('../models/Device');

exports.addDevice = async (req, res) => {
  try {
    const device = await Device.create(req.body);
    res.json(device);
  } catch (error) {
    console.log(error);
  }
};
exports.getDevices = async (req, res) => {
  res.send('get devices');
};
exports.delDevice = async (req, res) => {
  res.send('delete device');
};
exports.updateDevice = async (req, res) => {
  res.send('update device');
};
