require('dotenv').config();
const { createPool } = require('mysql2');
// Create connection variable
let connection = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DATABASE,
    multipleStatements: true
});
module.exports = connection;