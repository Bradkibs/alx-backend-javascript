const Utils = {
	calculateNumber: function(type, a, b) {
	aRounded = Math.round(a);
	bRounded = Math.round(b);

	if (type === 'SUM') {
		return aRounded + bRounded;
	}
	if (type === 'SUBTRACT') {
		return aRounded - bRounded;
	}
	if (type === 'DIVIDE') {
		if (bRounded != 0) {
		return aRounded / bRounded;
		}
		return 'Error';
	}
}
};
module.exports = Utils;
