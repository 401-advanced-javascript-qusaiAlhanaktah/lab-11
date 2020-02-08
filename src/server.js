/* eslint-disable strict */
'use strict';
// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// Require Resourses
const errorHandler = require( './middleware/500.js');
const notFound = require( './middleware/404.js' );
const authRouter = require('./lib/routes.js');

// Prepare the express app
const app = express();


// app using
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(authRouter);
app.use(notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port=>{
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log('I am Listening'));

  },
};