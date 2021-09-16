const Device = require('../models/Device');

exports.addDevice = async (req, res) => {
  try {
    const device = await Device.create(req.body);
    res.status(200).json({
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
  try {
    const allDevices = await Device.find();
    return res.status(200).json(allDevices);
  } catch (error) {
    res.status(500).json({
      status: {
        msg: 'Failed to get devices',
        error,
      },
    });
  }
};
exports.delDevice = async (req, res) => {
  res.send('delete device');
};
exports.updateDevice = async (req, res) => {
  res.send('update device');
};
