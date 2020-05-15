module.exports = function(RED) {
	"use strict";

	function analogInput(n) {
		RED.nodes.createNode(this,n);
		//var context = this.context();
		var node = this;
		var wordOffset = parseInt(n.wordOffset,10);
		var module = n.module;
		var outputData = n.outputData;
		var outputPrecision = parseInt(n.outputPrecision,10);
		var rawLow = parseInt(n.rawLow,10);
		var rawHigh = parseInt(n.rawHigh,10);
		var rawMask = 0xFFFF;
		var raw2Complement = n.raw2Complement;
		var resolution = n.resolution;
		var startbit = parseInt(n.startbit,10);
		var signalLow = parseInt(n.signalLow,10);
		var signalHigh = parseInt(n.signalHigh,10);
		var sensorLow = parseInt(n.sensorLow,10);
		var sensorHigh = parseInt(n.sensorHigh,10);
		var name = n.name;
		var topic = n.topic;
		
		switch(module) {
			case "750-452":
				rawLow = 0x0000; // 0
				rawHigh = 0x7FF8; // 32760
				rawMask = 0x7FF8; // 12 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 3;
				signalLow = 0;
				signalHigh = 20;
				break;
			case "750-453":
				rawLow = 0x0000; // 0
				rawHigh = 0x7FF8; // 32760
				rawMask = 0x7FF8; // 12 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 3;
				signalLow = 0;
				signalHigh = 20;
				break;
			case "750-454":
				rawLow = 0x0000; // 0
				rawHigh = 0x7FF8; // 32760
				rawMask = 0x7FF8; // 12 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 3;
				signalLow = 4;
				signalHigh = 20;
				break;
			case "750-455":
				rawLow = 0x0000; // 0
				rawHigh = 0x7FF8; // 32760
				rawMask = 0x7FF8; // 12 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 3;
				signalLow = 4;
				signalHigh = 20;
				break;
			case "750-456":
				rawLow = 0x8000; // −32768
				rawHigh = 0x7FF8; // 32760
				rawMask = 0xFFF8; // 12 bit
				raw2Complement = true;
				resolution = "16_Bit";
				startbit = 3;
				signalLow = -10;
				signalHigh = 10;
				break;
			case "750-457":
				rawLow = 0x8000; // −32768
				rawHigh = 0x7FF8; // 32760
				rawMask = 0xFFF8; // 12 bit
				raw2Complement = true;
				resolution = "16_Bit";
				startbit = 3;
				signalLow = -10;
				signalHigh = 10;
				break;
			case "750-459":
				rawLow = 0x0000; // 0
				rawHigh = 0x7FF8; // 32760
				rawMask = 0x7FF8; // 12 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 3;
				signalLow = 0;
				signalHigh = 10;
				break;
				
			case "750-465":
				rawLow = 0x0000; // 0
				rawHigh = 0x7FF8; // 32760
				rawMask = 0x7FF8; // 12 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 3;
				signalLow = 0;
				signalHigh = 20;
				break;
			case "750-466":
				rawLow = 0x0000; // 0
				rawHigh = 0x7FF8; // 32760
				rawMask = 0x7FF8; // 12 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 3;
				signalLow = 4;
				signalHigh = 20;
				break;
			case "750-467":
				rawLow = 0x0000; // 0
				rawHigh = 0x7FF8; // 32760
				rawMask = 0x7FF8; // 12 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 3;
				signalLow = 0;
				signalHigh = 10;
				break;
			case "750-468":
				rawLow = 0x0000; // 0
				rawHigh = 0x7FF8; // 32760
				rawMask = 0x7FF8; // 12 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 3;
				signalLow = 0;
				signalHigh = 10;
				break;
				
			case "750-470":
				rawLow = 0x0000; // 0
				rawHigh = 0x5000; // 20480
				rawMask = 0x7FF8; // 12 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 3;
				signalLow = 0;
				signalHigh = 20;
				break;
			case "750-471":
				rawLow = 0x0000; // 0
				rawHigh = 0x7FFF; // 32767
				rawMask = 0x7FFF; // 15 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 0;
				signalLow = 4;
				signalHigh = 20;
				break;
			case "750-472":
				rawLow = 0x0000; // 0
				rawHigh = 0x7FFF; // 32767
				rawMask = 0x7FFF; // 15 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 0;
				signalLow = 0;
				signalHigh = 20;
				break;
			case "750-473":
				rawLow = 0x0000; // 0
				rawHigh = 0x7FF8; // 32760
				rawMask = 0x7FF8; // 12 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 3;
				signalLow = 4;
				signalHigh = 20;
				break;
			case "750-474":
				rawLow = 0x0000; // 0
				rawHigh = 0x7FFF; // 32767
				rawMask = 0x7FFF; // 15 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 0;
				signalLow = 4;
				signalHigh = 20;
				break;
			case "750-475":
				rawLow = 0x0000; // 0
				rawHigh = 0x2710; // 10000
				rawMask = 0x7FFF; // 15 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 0;
				signalLow = 0;
				signalHigh = 1;
				break;
			case "750-475/020-000":
				rawLow = 0x0000; // 0
				rawHigh = 0x6AA9; // 10000
				rawMask = 0x7FFF; // 15 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 0;
				signalLow = 0;
				signalHigh = 5;
				break;
			case "750-476":
				rawLow = 0x8000; // −32768
				rawHigh = 0x7FFF; // 32767
				rawMask = 0xFFFF; // 16 bit
				raw2Complement = true;
				resolution = "16_Bit";
				startbit = 0;
				signalLow = -10;
				signalHigh = 10;
				break;
			case "750-477":
				rawLow = 0x0000; // 0
				rawHigh = 0x2710; // 10000
				rawMask = 0x7FFF; // 15 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 0;
				signalLow = 0;
				signalHigh = 10;
				break;
			case "750-478":
				rawLow = 0x0000; // 0
				rawHigh = 0x7FFF; // 32767
				rawMask = 0x7FFF; // 15 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 0;
				signalLow = 0;
				signalHigh = 10;
				break;
			case "750-479":
				rawLow = 0x8000; // −32768
				rawHigh = 0x7FFC; // 32764
				rawMask = 0xFFFC; // 14 bit
				raw2Complement = true;
				resolution = "16_Bit";
				startbit = 2;
				signalLow = -10;
				signalHigh = 10;
				break;
				
			case "750-480":
				rawLow = 0x0000; // 0
				rawHigh = 0x7FFC; // 32764
				rawMask = 0x7FFC; // 13 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 2;
				signalLow = 0;
				signalHigh = 20;
				break;
			case "750-482":
				rawLow = 0x0000; // 0
				rawHigh = 0x7FFC; // 32764
				rawMask = 0x7FFC; // 13 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 2;
				signalLow = 4;
				signalHigh = 20;
				break;
			case "750-483":
				rawLow = 0x0000; // 0
				rawHigh = 0x7FFE; // 32766
				rawMask = 0x7FFE; // 14 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 1;
				signalLow = 0;
				signalHigh = 30;
				break;
				
			case "750-492":
				rawLow = 0x0000; // 0
				rawHigh = 0x7FFC; // 32764
				rawMask = 0x7FFC; // 13 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 2;
				signalLow = 4;
				signalHigh = 20;
				break;
			case "750-496":
				rawLow = 0x0000; // 0
				rawHigh = 0x7FF8; // 32760
				rawMask = 0x7FF8; // 12 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 3;
				signalLow = 4;
				signalHigh = 20;
				break;
			case "750-497":
				rawLow = 0x0000; // 0
				rawHigh = 0x7FF8; // 32760
				rawMask = 0x7FF8; // 12 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 3;
				signalLow = 0;
				signalHigh = 10;
				break;
			default:
				rawMask = 0xFFFF;
				switch(resolution) {
					case "8_Bit":
						rawMask = 0x00FF;
						break;
					case "12_Bit":
						rawMask = 0x0FFF;
						break;
					case "16_Bit":
						rawMask = 0xFFFF;
						break;
					case "20_Bit":
						rawMask = 0xFFFFF;
						break;
					case "24_Bit":
						rawMask = 0xFFFFFF;
						break;
					case "28_Bit":
						rawMask = 0xFFFFFFF;
						break;
					case "32_Bit":
						rawMask = 0xFFFFFFFF;
						break;
					default:
						rawMask = 0xFFFF;
						break;
				}
				rawMask = rawMask << startbit;
				break;
		}
		
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
		
		function toFixed(num, precision) {
			return (+(Math.round(+(num + 'e' + precision)) + 'e' + -precision)).toFixed(precision);
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
		
		this.on('input', function(msg) {
			var _object;
			var _rawInput = 0
			// Test is we have an array as input
			if (msg.payload.constructor === Array) {
				_rawInput = parseInt(msg.payload[wordOffset],10);
			} else {
				_rawInput = parseInt(msg.payload,10);
			}
			// convert the raw data to signed data
			var _rawValue = toSigned(_rawInput);
			
			// operation based on outputData
			switch(outputData) {
				case "Raw":
					_object = {topic:topic,payload:_rawValue};
					break;
				case "Signal":
					var _signalValue = scale(_rawValue, rawLow, rawHigh, signalLow, signalHigh);
					_signalValue = parseFloat(toFixed(_signalValue, outputPrecision));
					_object = {topic:topic,payload:_signalValue};
					break;
				case "Sensor":
					var _sensorValue = scale(_rawValue, rawLow, rawHigh, sensorLow, sensorHigh);
					_sensorValue = parseFloat(toFixed(_sensorValue, outputPrecision));
					_object = {topic:topic,payload:_sensorValue};
					break;
				default:
					_object = {topic:topic,payload:_rawValue};
					break;
			}
			node.send(_object);
		});
		
		if (module === "none") {
			node.status({fill: "green",shape: "ring",text: "Analog input"});
		} else{
			node.status({fill: "green",shape: "ring",text: module});
		}
		
	}
	RED.nodes.registerType("Analog Input",analogInput);
};
