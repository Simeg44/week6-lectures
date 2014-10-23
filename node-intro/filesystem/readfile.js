// The filesystem core module
var fs = require("fs");

// Synchronously read in a file's contents (make sure
// to specify the encoding or it'll come back as a buffer)
var fileContent = fs.readFileSync("file1.txt", "utf-8");

var reverseContent = fileContent.split(""). reverse(). join("");

// Print ouf the contents
console.log(reverseContent);

// Now write this to a new file called reversed.txt
// and fill  it with the value  from reversedContent
fs.writeFileSync("reversed.txt", reverseContent);