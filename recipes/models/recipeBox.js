// Require the base Recipe class
var Recipe = require("./recipes.js")

// Define the base RecipeBox class.
// Instances will contain their own 
// list of recipes
var RecipeBox = function () {
	this.recipes = [];
};

// Helper for quickly adding new recipes without
// needing to generate new instance in the caller
RecipeBox.prototype.addRecipe = function(title, description) {
	var newRecipe = new Recipe(title, description);
	this.recipes.push(newRecipe);
};;

RecipeBox.prototype.getByTitle = function(title) {
	for (var i = 0; i < this.recipes.length; i++) {
		if(this.recipes[i].title === title) {
			return this.recipes[i];
		}
	}
};

RecipeBox.prototype.removeByTitle = function(title) {
	for (var i = 0; i < this.recipes.length; i++) {
		if(this.recipes[i].title === title) {
			this.recipes.splice(i, 1);
			// Dont bother searching the rest of the array
			// just end the function
			return;
		}
	}
};

// Create personal recipe box
var myRecipeBox = new RecipeBox();

// Make the recipe box available to any file
module.exports = myRecipeBox;