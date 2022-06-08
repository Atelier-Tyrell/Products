const { Client } = require("pg");

const client = new Client({
  host: 'localhost',
  user: 'isaac',
  password: 'sdc',
  port: 3000,
});

client
  .connect()
  .then(() => console.log("connected"))
  .catch((err) => console.error("err", err));
