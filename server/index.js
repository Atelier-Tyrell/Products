require('dotenv').config();
const express = require('express'); // npm installed
const bodyParser = require('body-parser');

const db = require('./db');
const router = require('./routes.js')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

app.use('/products', router);

app.listen(PORT);

console.log(`Server listening at http://localhost:${PORT}`);
