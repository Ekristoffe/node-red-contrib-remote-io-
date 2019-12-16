module.exports = function(RED) {
	"use strict";

	function tempInput(n) {
		RED.nodes.createNode(this,n);
		//var context = this.context();
		var node = this;
		var wordOffset = parseInt(n.wordOffset);
		var sensorType = n.sensorType;
		var signalType = n.signalType;
		//this.signalType = n.signalType;
		var name = n.name;
		var topic = n.topic;
		
		function toFixed(num, precision) {
			return (+(Math.round(+(num + 'e' + precision)) + 'e' + -precision)).toFixed(precision);
		}
		
		this.on('input', function(msg) {
			var _object;
			var _rawInput = 0
			// Test is we have an array as input
			if (msg.payload.constructor === Array) {
				_rawInput = parseInt(msg.payload[wordOffset]);
			} else {
				_rawInput = parseInt(msg.payload);
			}
			
			var celciusTemp = (_rawInput / 10);
			
			// operation based on signalType
			switch(signalType) {
				case "Celsius":
					_object = {topic:topic,payload:toFixed(celciusTemp, 2)};
					break;
				case "Farenheit":
					_object = {topic:topic,payload:toFixed((((celciusTemp * 9) / 5) + 32), 2)};
					break;
				case "Kelvin":
					_object = {topic:topic,payload:toFixed((celciusTemp + 273.15), 2)};
					break;
				default:
					_object = {topic:topic,payload:toFixed(celciusTemp, 2)};
					break;
			}
			node.send(_object);
		
		});
		node.status({fill: "green",shape: "ring",text: sensorType + " input (" + signalType + ")"});
	}
	RED.nodes.registerType("Temperature Input",tempInput);
};
