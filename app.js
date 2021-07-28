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
    console.log("Connected to Database.");
    con.query('USE textboard;');
});

app.use(express.urlencoded({extended: false}));


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

app.use(express.static("public"));
app.use(express.json());

app.get('/get', (req, res) => {
    const statement = "SELECT postID, postText, postDate FROM posts";
    con.query(statement, function (err, result) {
        if (err) throw err;
        res.status(200).send(result);
    });
});

app.post('/submit', (req, res) => {
    console.log(req.body.msgBox);
    const date = new Date();
    const statement = `INSERT INTO posts (postText, postDate) VALUES ('${req.body.msgBox}', '${date.toDateString()}');`;
    con.query(statement, function (err) {
        if (err) throw err;
    });
    res.status(200).redirect('back');
});

app.post('/delete', (req, res) => {
    const statement = `DELETE FROM posts WHERE postID = ${req.body.post}`;
    con.query(statement, function (err) {
        if (err) throw err;
    })
    res.status(200);
});