'use strict';

const express = require('express');
const rateController = require('../controllers/api-rate-controller.js');
const subscribeController = require('../controllers/api-subscribe-controller');
const apiRouter = express.Router();

apiRouter
  .route('/rate')
  .get(rateController.apiRate);

apiRouter
  .route('/subscribe')
  .post(subscribeController.apiSubscribe);

module.exports = apiRouter;