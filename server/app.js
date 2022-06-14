require('dotenv').config();
// require('newrelic');
const express = require('express'); // npm installed
const bodyParser = require('body-parser');
const path = require("path");
const morgan = require('morgan');

const db = require('./db');
const router = require('./routes.js')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan('dev'));

// const DIST_DIR = path.join(__dirname, '../../Client/public');
// app.use(express.static(DIST_DIR));

app.use('', router);

module.exports = app;
