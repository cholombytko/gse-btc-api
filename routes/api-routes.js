'use strict';

const express = require('express');
const rateController = require('../controllers/api-rate-controller.js');
const subscribeController = require('../controllers/api-subscribe-controller');
const sendEmailsController = require('../controllers/api-send-emails-controller');
const apiRouter = express.Router();

apiRouter
  .route('/rate')
  .get(rateController.apiRate);

apiRouter
  .route('/subscribe')
  .post(subscribeController.apiSubscribe);

apiRouter
  .route('/sendEmails')
  .post(sendEmailsController.apiSendEmails);

module.exports = apiRouter;