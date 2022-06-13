require('dotenv').config();
// require('newrelic');
const express = require('express'); // npm installed
const bodyParser = require('body-parser');
const path = require("path");

const db = require('./db');
const router = require('./routes.js')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

app.get("/loaderio-db8be098a46b7c938fe5681a58a1e510.txt", (req, res) => {
  res.sendFile(path.join(__dirname, "./loaderio.txt"));
});
// const DIST_DIR = path.join(__dirname, '../../Client/public');
// app.use(express.static(DIST_DIR));

app.use('', router);

module.exports = app;
