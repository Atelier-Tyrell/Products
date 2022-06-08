require("dotenv").config();

const express = require("express"); // npm installed

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// other configuration...
const PORT = process.env.PORT || 3000;

app.listen(PORT);

console.log(`Server listening at http://localhost:${PORT}`);

