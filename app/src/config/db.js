"use strict"

const mysql = require("mysql");

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3307,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

try {
    db.connect();
} catch (err) {
    console.log(err);
}

module.exports = db;