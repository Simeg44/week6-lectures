var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Express Route
app.get('/', function(req, res) {
	// res.render('index');
	res.send("Hello World!");
});

app.get('/about', function(req, res) {
	// res.render('index');
	res.send("Chris is the coolest");
});

var server = app.listen(5491, function() {
	console.log('Express server listening on port ' + server.address().port);
});
