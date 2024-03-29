var desserts = require("../models/desserts.js");

var indexController = {
	index: function(req, res) {
		// Pass a reference to Jade that
		// will tell it what "desserts" means
		res.render('index', {
			desserts: desserts
		});
	},

	about: function(req, res) {
		res.render("about", {
			dessertCount: desserts.length
		});
	} 
};

module.exports = indexController;