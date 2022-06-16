require('dotenv').config();
// require('newrelic');
const compression = require("compression");
const express = require('express');
const path = require("path");

const db = require('./db');
const router = require('./routes.js')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
// const DIST_DIR = path.join(__dirname, '../../Client/public');
// app.use(express.static(DIST_DIR));

app.use('', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
