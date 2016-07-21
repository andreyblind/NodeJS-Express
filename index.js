var express = require('express');
var bodyParser = require('body-parser');
var socketio = require('socket.io');

var app = express();
app.use('/static', express.static('static'));

var server = app.listen(8000);

app.get('/', function (req, res) {
	res.sendFile(__dirname + "/static/index_ajax.html");
});