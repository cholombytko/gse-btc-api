'use strict';

const express = require('express');
const rateController = require('../controllers/api-rate-controller.js');
const apiRouter = express.Router();

apiRouter
  .route('/rate')
  .get(rateController.apiRate);

module.exports = apiRouter;