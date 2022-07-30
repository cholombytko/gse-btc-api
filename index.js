'use strict';

const server = require('./server.js');
const dotenv = require('dotenv').config();

(() => {
  try {
    const PORT = process.env.PORT;
    server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    })
  } catch (err) {
    throw err;
  }
})();
