require('dotenv').config();
const express = require('express'); // npm installed
const bodyParser = require('body-parser');

const db = require('./db');
const router = require('./routes.js')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

app.use('/products', router);

module.exports = app;
