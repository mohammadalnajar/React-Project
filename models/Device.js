const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add name'],
  },
  brand: {
    type: String,
    required: [true, "Please add device's brand name"],
  },
  type: {
    type: String,
    required: [true, 'Please add device type'],
  },
  price: {
    type: Number,
    required: [true, 'please add a price for the device'],
  },
  specs: {
    releaseDate: {
      type: Date,
    },
    display: {
      type: {
        type: String,
      },
      size: {
        type: String,
      },
      resolution: {
        type: String,
      },
    },
    platform: {
      OS: {
        type: String,
      },
      chipSet: {
        type: String,
      },
      cpu: {
        type: String,
      },
      gpu: {
        type: String,
      },
    },
    memory: {
      ram: [
        {
          type: String,
        },
      ],
      storage: [
        {
          type: String,
        },
      ],
    },
    camera: {
      main: {
        type: String,
      },
      selfie: {
        type: String,
      },
    },
    battery: {
      capacity: {
        type: String,
      },
      charging: {
        type: String,
      },
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model('Device', DeviceSchema);
