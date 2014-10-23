var express = require('express');
// Require the body parser model
var bodyParser = require('body-parser');

// Require our controller
var indexController = require('./controllers/index.js');
var apiController = require("./controllers/api.js");

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Inject the body parsing functionality into the 
// express middleware chain
app.use(bodyParser.urlencoded({extended: false}));

// Routing for the home page
app.get('/', indexController.index);

// Routing for the about page
app.get("/about", indexController.about);

// Routing for our API
app.post("/dessertSubmit", apiController.addDessert);

var server = app.listen(3106, function() {
	console.log('Express server listening on port ' + server.address().port);
});
