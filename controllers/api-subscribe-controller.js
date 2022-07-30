'use strict';

const fs = require("fs");

exports.apiSubscribe = async (req, res) => {
  const fileData = fs.readFileSync('./emails.txt');
  const currentEmail = req.body["email"];
  if(!fileData.includes(currentEmail)) {
    fs.appendFileSync('./emails.txt', `${currentEmail.trim()}\n`);
    res.status(200).send();
  } else {
    res.status(409).send();
  }
};
