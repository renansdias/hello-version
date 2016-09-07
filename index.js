var express = require('express');
var app = express();

var version = "1.0.1";

app.get('/', function(req, res) {
	res.send('Hello Version: ' + version);
});

app.listen(7890, function() {
	console.log("Server listening on port 7890");
});
