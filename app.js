const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

require('dotenv').config()

const con = mysql.createConnection({
    port: 3306,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to Database.")
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.post('/submit', (req, res) => {

})