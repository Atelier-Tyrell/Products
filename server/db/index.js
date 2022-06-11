const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DBPORT,
});

// pool
//   .connect()
//   .then(() => console.log('connected'))
//   .catch((err) => console.error('err', err));

module.exports = pool;
