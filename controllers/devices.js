const Device = require('../models/Device');

exports.addDevice = async (req, res) => {
  try {
    const device = await Device.create(req.body);
    res.json({
      device,
      status: {
        msg: 'Device is successfully added to db',
        added: true,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: {
        msg: 'Failed to add device',
        error,
        added: false,
      },
    });
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
