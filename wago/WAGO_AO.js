module.exports = function(RED) {
	"use strict";

	function analogOutput(n) {
		RED.nodes.createNode(this,n);
		var context = this.context();
		var node = this;
		var wordOffset = parseInt(n.wordOffset,10);
		var module = n.module;
		var inputData = n.inputData;
		var sensorLow = parseInt(n.sensorLow,10);
		var sensorHigh = parseInt(n.sensorHigh,10);
		var signalLow = parseInt(n.signalLow,10);
		var signalHigh = parseInt(n.signalHigh,10);
		var rawLow = parseInt(n.rawLow,10);
		var rawHigh = parseInt(n.rawHigh,10);
		var rawMask = 0xFFFF >>> 0;
		var raw2Complement = n.raw2Complement;
		var resolution = n.resolution;
		var startbit = parseInt(n.startbit,10);
		var name = n.name;
		var topic = n.topic;
		// Init the array of data
		var _data = [];
		for (var i = 0; i <= wordOffset; i++) {
			_data[i] = 0;
		}
		context.set("data", _data);
		
		switch(module) {
			case "750-550":
				rawLow = 0; // 0x0000
				rawHigh = 32767; // 0x7FFF
				rawMask = 0x7FFF >>> 0; // 16 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 0;
				signalLow = 0;
				signalHigh = 10;
				break;
			case "750-552":
				rawLow = 0; // 0x0000
				rawHigh = 32767; // 0x7FFF
				rawMask = 0x7FFF >>> 0; // 16 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 0;
				signalLow = 0;
				signalHigh = 20;
				break; 

			case "750-553":
				rawLow = 0; // 0x0000
				rawHigh = 32767; // 0x7FFF
				rawMask = 0x7FFF >>> 0; // 16 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 0;
				signalLow = 0;
				signalHigh = 20;
				break;
			case "750-554":
				rawLow = 0; // 0x0000
				rawHigh = 32767; // 0x7FFF
				rawMask = 0x7FFF >>> 0; // 16 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 0;
				signalLow = 4;
				signalHigh = 20;
				break;
			case "750-555":
				rawLow = 0; // 0x0000
				rawHigh = 32767; // 0x7FFF
				rawMask = 0x7FFF >>> 0; // 16 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 0;
				signalLow = 4;
				signalHigh = 20;
				break;
			case "750-556":
				rawLow = -32767; // 0x8001
				rawHigh = 32767; // 0x7FFF
				rawMask = 0xFFFF >>> 0; // 16 bit
				raw2Complement = true;
				resolution = "16_Bit";
				startbit = 0;
				signalLow = -10;
				signalHigh = 10;
				break;
			case "750-557":
				rawLow = -32767; // 0x8001
				rawHigh = 32767; // 0x7FFF
				rawMask = 0xFFFF >>> 0; // 16 bit
				raw2Complement = true;
				resolution = "16_Bit";
				startbit = 0;
				signalLow = -10;
				signalHigh = 10;
				break;
			case "750-559":
				rawLow = 0; // 0x0000
				rawHigh = 32767; // 0x7FFF
				rawMask = 0x7FFF >>> 0; // 16 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 0;
				signalLow = 0;
				signalHigh = 10;
				break;
			case "750-560":
				rawLow = 0; // 0x0000
				rawHigh = 32767; // 0x7FFF
				rawMask = 0x7FFF >>> 0; // 16 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 5;
				signalLow = 0;
				signalHigh = 10;
				break;
			case "750-562":
				rawLow = 0; // 0x0000
				rawHigh = 65535; // 0xFFFF
				rawMask = 0xFFFF >>> 0; // 16 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 0;
				signalLow = 0;
				signalHigh = 10;
				break;
			case "750-563":
				rawLow = 0; // 0x0000
				rawHigh = 65535; // 0xFFFF
				rawMask = 0xFFFF >>> 0; // 16 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 0;
				signalLow = 4;
				signalHigh = 20;
				break;
			case "750-597":
				rawLow = 0; // 0x0000
				rawHigh = 32767; // 0x7FFF
				rawMask = 0x7FFF >>> 0; // 16 bit
				raw2Complement = false;
				resolution = "16_Bit";
				startbit = 0;
				signalLow = 0;
				signalHigh = 10;
				break;
			default:
				rawMask = 0xFFFF >>> 0;
				switch(resolution) {
					case "8_Bit":
						rawMask = 0x00FF >>> 0;
						break;
					case "12_Bit":
						rawMask = 0x0FFF >>> 0;
						break;
					case "16_Bit":
						rawMask = 0xFFFF >>> 0;
						break;
					case "20_Bit":
						rawMask = 0xFFFFF >>> 0;
						break;
					case "24_Bit":
						rawMask = 0xFFFFFF >>> 0;
						break;
					case "28_Bit":
						rawMask = 0xFFFFFFF >>> 0;
						break;
					case "32_Bit":
						rawMask = 0xFFFFFFFF >>> 0;
						break;
					default:
						rawMask = 0xFFFF >>> 0;
						break;
				}
				rawMask = (rawMask >>> startbit) >>> 0;
				rawMask = (rawMask << startbit) >>> 0;
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
			return (+(Math.round(+(num + "e" + precision)) + "e" + -precision)).toFixed(precision);
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
		
		this.on("input", function(msg) {
			var _object = [];
			var _rawOutput = 0;
			var _rawValue = parseInt(msg.payload,10);
			
			// operation based on outputData
			switch(inputData) {
				case "Raw":
					_rawOutput = _rawValue;
					break;
				case "Signal":
					_rawOutput = scale(_rawValue, signalLow, signalHigh, rawLow, rawHigh);
					_rawOutput = fromSigned(toFixed(_rawOutput, 0));
					break;
				case "Sensor":
					_rawOutput = scale(_rawValue, sensorLow, sensorHigh, rawLow, rawHigh);
					_rawOutput = fromSigned(toFixed(_rawOutput, 0));
					break;
				default:
					_rawOutput = _rawValue;
					break;
			}
			// get the context value
			var _data = context.get("data") || [];
			// copy the output payload
			_data[wordOffset] = _rawOutput;
			// store the context value back
			context.set("data", _data);
			_object[0] = {topic:topic,payload:_rawOutput};
			_object[1] = {topic:topic,payload:_data};
			node.send([_object[0], _object[1]]);
		});
		
		if (module === "none") {
			node.status({fill: "green",shape: "ring",text: "Analog output"});
		} else{
			node.status({fill: "green",shape: "ring",text: module});
		}
	}
	RED.nodes.registerType("Analog Output",analogOutput);
};
