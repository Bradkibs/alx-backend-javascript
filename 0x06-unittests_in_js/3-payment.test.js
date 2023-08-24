const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe("sendPaymentRequestToApi", () => {
	it('should have the same math used for sendPaymentRequestToApi(100, 20) as Utils.calculateNumber("SUM", 100, 20)', () => {
	const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
	const consoleSpy = sinon.spy(console, 'log');
	sendPaymentRequestToApi(100, 20);

	sinon.assert.calledWith(calculateNumberSpy, 'SUM', 100, 20);
	sinon.assert.calledWith(consoleSpy, 'The total is: 120');
	consoleSpy.restore();
	calculateNumberSpy.restore();
	
	});
});
