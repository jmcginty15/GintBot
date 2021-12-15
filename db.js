/** Database config for database. */


const { Client } = require('pg');

const DB_URI = process.env.DATABASE_URL || `postgresql:///hambrick_chat`;

let db = new Client({
    connectionString: DB_URI,
    ssl: {
        rejectUnauthorized: false
    }
});

db.connect();


module.exports = db;
