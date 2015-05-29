ThunderConnector = require('thunder-connector');
ThunderConnector.connect();

function mycallback(){
	//console.log('return');
	return "finished";
}

exports.turnLeftDegrees = function turnLeftDegrees(degrees){
	degrees = degrees || 10;
	stopTime = Math.floor(degrees * 22.3);
	//console.log(stopTime);
	setTimeout(function(){ThunderConnector.command('left');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
	setTimeout(mycallback, stopTime);
}

exports.turnRightDegrees = function turnRightDegrees(degrees){
	degrees = degrees || 10;
	stopTime = Math.floor(degrees * 22.3);
	//console.log(stopTime);
	setTimeout(function(){ThunderConnector.command('right');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
	setTimeout(mycallback, stopTime);
}

exports.turnUpDegrees = function turnUpDegrees(degrees){
	degrees = degrees || 10;
	stopTime = Math.floor(degrees * 22.3);
	//console.log(stopTime);
	setTimeout(function(){ThunderConnector.command('up');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
	setTimeout(mycallback, stopTime);
}

exports.turnDownDegrees = function turnDownDegrees(degrees){
	degrees = degrees || 10;
	stopTime = Math.floor(degrees * 22.3);
	//console.log(stopTime);
	setTimeout(function(){ThunderConnector.command('down');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
	setTimeout(mycallback, stopTime);
}

exports.Fire = function Fire(){
	setTimeout(function(){ThunderConnector.command('fire');},0);
    setTimeout(function(){ThunderConnector.command('stop');},10000);
}