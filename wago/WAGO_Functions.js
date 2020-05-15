// scales number (the scaled number can be outside the range of point A and B)
function scale(_x, _xA, _xB, _yA, _yB) {
	// find the slope m
	var _m = (_yB - _yA) / (_xB - _xA);
	// find the intercept p
	var _p = _yA - (_m * _xA);
	// calculate the y
	var _y = (_m * _x) + _p;
	
	return(_y);
}

// limit number
function limit(_lo, _val, _hi) {
	if (_val < _lo) {
		return(_lo);
	} else {
		if (_val > _hi) {
			return(_hi);
		} else {
			return(_val);
		}
	}
}
		
function fromSigned(_num) {
	var _mask = 0x8000;
	var _sub = 0x10000;
	
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
	
	if (_num < 0) {
		if (raw2Complement !== false) {
			_num = _num + _sub;
		} else {
			_num = (_num & ~_mask) * -1;
		}
	}
	return _num;
}

function toSigned(_num) {
	var _mask = 0x8000;
	var _sub = 0x10000;
	
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
	
	if ((_num & _mask) !== 0) {
		if (raw2Complement !== false) {
			_num = _num - _sub;
		} else {
			_num = (_num & ~_mask) * -1;
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
