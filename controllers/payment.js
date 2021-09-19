const keys = require('../config/keys');

const stripe = require('stripe')(keys.STRIPE_PRIVATE_KEY);

exports.paymentHandle = async (req, res) => {
  console.log(req.body);
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: {
        msg: 'payment failed',
        success: false,
      },
    });
  }
};
