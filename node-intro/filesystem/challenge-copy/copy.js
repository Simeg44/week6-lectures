var fs = require("fs");

var destinationFileName = process.argv[2];
var sourceFileNames = process.argv.slice(3);

var combined = sourceFileNames.map(function(fileName) {
	return fs.readFileSync(fileName, "utf-8");
})
	.join("\n");


fs.writeFileSync(destinationFileName, combined);