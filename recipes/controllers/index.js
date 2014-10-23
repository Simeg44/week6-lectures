var recipeBox = require("../models/recipeBox.js");

// seed the dataset with some sample recipes:
recipeBox.addRecipe(
	"Banana Nut Bread",
	"Bananas + nuts + bread --> bake"
);
recipeBox.addRecipe(
	"Lasagna",
	"Call garfield and ask him"
);

var indexController = {
	index: function(req, res) {
		// Render the index view and tell
		// it about our sweet recipe box
		res.render('index', {
			recipeBox: recipeBox
		});
	},

	view: function(req, res) {
		var recipeTitle = req.params.recipeTitle;

		var recipe = recipeBox.getByTitle(recipeTitle);

		res.render("recipe", {
			recipe: recipe
		});
	},

	addRecipe: function(req, res) {
		var title = req.body.title;
		var description = req.body.description;

		recipeBox.addRecipe(title, description);

		res.redirect("/");
	},

	deleteRecipe: function(req, res) {
		var recipeTitle = req.params.recipeTitle;

		recipeBox.removeByTitle(recipeTitle);

		res.redirect("/");
	}
};

module.exports = indexController;