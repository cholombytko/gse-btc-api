'use strict';

const getBtcCurrency = require('../lib/get-btc-currency.js');

exports.apiRate = async (req, res) => {
  try {
    const currentRate = await getBtcCurrency;
    return res
      .status(200)
      .json({price: currentRate['price']});
  } catch (e) {
    return res.status(400).send();
  }
};
