const { Pool } = require("pg");

const pool = new Pool({
  host: 'localhost',
  user: 'isaac',
  password: 'sdc',
  database: 'products',
  port: 5432,
});

pool
  .connect()
  .then(() => console.log('connected'))
  .catch((err) => console.error('err', err));

module.exports = pool;
