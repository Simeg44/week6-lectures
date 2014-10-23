var  userString = process.argv.slice(2).join(" ");

var reversedString = userString.split("").reverse().join("");

console.log(reversedString);