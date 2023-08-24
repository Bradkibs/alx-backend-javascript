const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require("./2-calcul_chai.js");

describe("Testing if arithmetic operations on rounded numbers work", function() {
	it('should work as how normal addition of rounded numbers work', function() {
		expect(calculateNumber('SUM', 3.0, 5.7)).to.equal(9);
	});
	it('should work as how normal subtraction works', function() {
		expect(calculateNumber('SUBTRACT', 4.1, 2.9)).to.equal(1);
		expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
	});
	it('should work as how normal division of rounded numbers work', function() {
		expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
		expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
	});
});
