const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

exports.paymentHandle = async (req, res) => {
  const purchasedItems = req.body.map((item) => {
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    };
  });
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: purchasedItems,
      success_url: `${process.env.STRIPE_SUCCESS_URL}/success`,
      cancel_url: `${process.env.STRIPE_CANCEL_URL}/cart`,
    });
    res.json({ url: session.url });
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
