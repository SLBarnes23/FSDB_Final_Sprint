const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD || '', // Use an empty string if password is not set
  port: process.env.PGPORT,
});

module.exports = pool;