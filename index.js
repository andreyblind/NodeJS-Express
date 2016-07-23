var express = require('express');
var bodyParser = require('body-parser');
var socketio = require('socket.io');

var messages = [];
var app = express();
app.use('/static', express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var server = app.listen(8000);

app.get('/', function (req, res) {
	res.sendFile(__dirname + "/static/index_ajax.html");
});

app.get('/messages', function (req, res) {
	res.json(messages);
});

app.post('/messages', function (req, res) {
	var message = req.body;
	messages.push(message);
	res.json(message);
});

app.get('/sockets', function (req, res) {
	res.sendfile(__dirname + "/static/index_socket.html");
});

