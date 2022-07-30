'use strict';

const fs = require("fs");
const readline = require('readline');
const nodemailer = require('nodemailer');
const getBtcCurrency = require('../lib/get-btc-currency.js');

const dataJson = JSON.parse(fs.readFileSync('./app-config.json'));

const transporter = nodemailer.createTransport({
  host: dataJson.host,
  port: dataJson.port,
  auth: {
    user: dataJson.user,
    pass: dataJson.password,
  },
});

exports.apiSendEmails = async (req, res) => {
  const fileStream = fs.createReadStream('./emails.txt');
  const currentRate = await getBtcCurrency;
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  for await (const line of rl) {
    transporter.sendMail({
      from: dataJson.user,
      to: line,
      subject: 'BTC currency',
      text: `Current BTC currency to UAH: ${currentRate['price']}`,
    }).then(info => {
      console.log(info);
    }).catch(console.error);
  }
  res.status(200).send();
};
