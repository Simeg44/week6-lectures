var express = require('express');
var fs = require("fs");

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/:filename', function(req, res) {
	fs.readFile(req.params.filename, function(err, data) {
		
		// res.sendFile(filename);
		res.header("Content-Type", "text/html");
		res.send(data);
	});
})



var server = app.listen(6155, function() {
	console.log('Express server listening on port ' + server.address().port);
});
