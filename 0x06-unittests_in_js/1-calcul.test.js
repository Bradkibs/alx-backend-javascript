const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe("Testing if arithmetic operations on rounded numbers work", function() {
	it('should work as how normal addition of rounded numbers work', function() {
		assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
		assert.strictEqual(calculateNumber('SUM', 3.0, 5.7), 9);
	});
	it('should work as how normal subtraction works', function() {
		assert.strictEqual(calculateNumber('SUBTRACT', 4.1, 2.9), 1);
		assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
	});
	it('should work as how normal division of rounded numbers work', function() {
		assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
		assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
	});
});
