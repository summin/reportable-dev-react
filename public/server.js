var express = require('express');
var app = express();
var path = require('path');



// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/'));
});

app.get('/app/:id', function (req, res) {
    res.sendFile(__dirname + '/app/'+ req.params.id);
});


app.use('/media/:id', function (req, res) {
    res.sendFile(__dirname + '/media/'+ req.params.id);
});

app.listen(80);