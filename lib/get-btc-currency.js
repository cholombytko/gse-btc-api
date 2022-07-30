'use strict';

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const dotenv = require('dotenv').config();

const url = process.env.URL;
const settings = { method: 'GET' };

const getBtcCurrency = fetch(url, settings)
  .then((res) => res.json())
  .then((json) => {
    return json
  });

module.exports = getBtcCurrency;