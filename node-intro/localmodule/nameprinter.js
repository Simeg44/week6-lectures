// Prompt node to load in the names.js file and store it
// results into the "names" variable
var people = require("./names.js");

/*
names.map(function(people.names){
	console.log(people.names + " says hi!");
})
/*/
for(var i = 0; i < people.names.length; i++) {
	console.log(people.names[i] + " says hi!");
}
//*/