var luminosity = function(r, g, b) {
	return 0.2126*(r) + 0.7152*(g) + 0.0722*(b);
}

var darken = function(r, g, b) {
	var newR = r - (r *.2);
	var newG = g - (g * .2);
	var newB = b - (b * .2);

	return (newR + " " + newG + " " + newB);
}

module.exports = {
	luminosity: luminosity,
	darken: darken
}