const assert = require('assert');
const calculateNumber = require("./0-calcul.js");
describe('Testing addition of rounded off numbers', function() {
	it('should return correct output', function() {
		assert.strictEqual(calculateNumber(1, 3), 4);
		assert.strictEqual(calculateNumber(1, 3.7), 5);
		assert.strictEqual(calculateNumber(1.5, 3.7), 6);
		assert.strictEqual(calculateNumber(0, 0), 0);
	});
	});
