// scales number (the scaled number can be outside the range of point A and B)
function scale(x, xA, xB, yA, yB) {
	// find the slope m
	let _m = (yB - yA) / (xB - xA);
	// find the intercept p
	let _p = yA - (_m * xA);
	// calculate the y
	let _y = (_m * x) + _p;
	
	return(_y);
}

// limit number
function limit(lo, val, hi) {
	if (val < lo) {
		return(lo);
	} else {
		if (val > hi) {
			return(hi);
		} else {
			return(val);
		}
	}
}
		
function fromSigned(resolution, num, raw2Complement) {
	let _mask = 0x8000;
	let _sub = 0x10000;
	
	switch(resolution){
		case "4_Bit":
			_mask = 0x8;
			_sub = 0x10;
			break;
		case "8_Bit":
			_mask = 0x80;
			_sub = 0x100;
			break;
		case "12_Bit":
			_mask = 0x800;
			_sub = 0x1000;
			break;
		case "16_Bit":
			_mask = 0x8000;
			_sub = 0x10000;
			break;
		case "20_Bit":
			_mask = 0x80000;
			_sub = 0x100000;
			break;
		case "24_Bit":
			_mask = 0x800000;
			_sub = 0x1000000;
			break;
		case "28_Bit":
			_mask = 0x8000000;
			_sub = 0x10000000;
			break;
		case "32_Bit":
			_mask = 0x80000000;
			_sub = 0x100000000;
			break;
	}
	
	let _num = num;
	if (num < 0) {
		if (raw2Complement !== false) {
			_num = num + _sub;
		} else {
			_num = (num & ~_mask) * -1;
		}
	}
	return _num;
}

function toSigned(resolution, num, raw2Complement) {
	let _mask = 0x8000;
	let _sub = 0x10000;
	
	switch(resolution){
		case "4_Bit":
			_mask = 0x8;
			_sub = 0x10;
			break;
		case "8_Bit":
			_mask = 0x80;
			_sub = 0x100;
			break;
		case "12_Bit":
			_mask = 0x800;
			_sub = 0x1000;
			break;
		case "16_Bit":
			_mask = 0x8000;
			_sub = 0x10000;
			break;
		case "20_Bit":
			_mask = 0x80000;
			_sub = 0x100000;
			break;
		case "24_Bit":
			_mask = 0x800000;
			_sub = 0x1000000;
			break;
		case "28_Bit":
			_mask = 0x8000000;
			_sub = 0x10000000;
			break;
		case "32_Bit":
			_mask = 0x80000000;
			_sub = 0x100000000;
			break;
	}
	
	let _num = num;
	if ((num & _mask) !== 0) {
		if (raw2Complement !== false) {
			_num = num - _sub;
		} else {
			_num = (num & ~_mask) * -1;
		}
	}
	return _num;
}

function toFixed(num, precision) {
	return (+(Math.round(+(num + "e" + precision)) + "e" + -precision)).toFixed(precision);
}

exports.scale = scale;
exports.limit = limit;
exports.fromSigned = fromSigned;
exports.toSigned = toSigned;
exports.toFixed = toFixed;
