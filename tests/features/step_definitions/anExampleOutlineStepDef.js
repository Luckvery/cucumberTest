var aTest = function () {
	this.World = require("../support/world.js").World;

	this.start = 0;
	this.eat = 0;

	this.Given(/^there are (\d+) cucumbers$/, function(number, next) {
		this.start = parseInt(number);
		next();
	});

	this.When(/^I eat (\d+) cucumbers$/, function (number, next) {
		this.eat = parseInt(number);
		next();
	});

	this.Then(/^I should have (\d+) cucumbers$/, function (number, next) {
		var left = this.start - this.eat; 
		if ( left != number)
			throw(new Error("This test didn't pass, I started with: " + this.start 
				+ ", ate: " + this.eat 
				+ " and was left with: " + left 
				+ ". Expected: " + number));
		next();
	});
};

module.exports = aTest;