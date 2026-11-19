
const mysql = require('mysql2');
require('dotenv').config();

console.log("Starting database connection test...");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 4000,

    // Enable secure SSL/TLS connection
    ssl: {
        minVersion: 'TLSv1.2'
    }
});

connection.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.message);
        return;
    }

    console.log("Database connected successfully!");

    connection.query("SELECT 1 AS test", (error, results) => {
        if (error) {
            console.error("Query failed:", error.message);
        } else {
            console.log("Test query successful:", results);
        }

        connection.end();
    });
});
