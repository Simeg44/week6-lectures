var fs = require("fs");

var sourceContent = fs.readFileSync(process.argv[2], "utf-8");
var destinationFile = process.argv[3];

var array = sourceContent.split("\n");


var keys = array[0].split(",");
var finalArray = [];

for (var i = 1; i < array.length; i++) {
	var values = array[i].split(",");
	var tempObj = {};

	for (var j = 0; j < values.length; j++) {
		tempObj[keys[j]] = values[j]; 
	}

	finalArray.push(tempObj);
}

fs.writeFileSync(destinationFile, JSON.stringify(finalArray));