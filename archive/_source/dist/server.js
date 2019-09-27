var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/'));
});

app.get('/main.js', function (req, res) {
    res.sendFile(path.join(__dirname + '/main.js'));
});

app.get('*', function (req, res) {
     res.redirect('/');
});

app.listen(8090);