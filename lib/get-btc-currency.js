'use strict';

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const url = 'https://api.binance.com/api/v3/avgPrice?symbol=BTCUAH';
const settings = { method: 'GET' };

const getBtcCurrency = fetch(url, settings)
  .then((res) => res.json())
  .then((json) => {
    return json
  });

module.exports = getBtcCurrency;