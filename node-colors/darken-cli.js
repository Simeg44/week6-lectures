var red = process.argv[2];
var green = process.argv[3];
var blue = process.argv[4];

var colorutil = require("./colorutil.js");

var darker = colorutil.darken(red, green, blue);

console.log(darker);