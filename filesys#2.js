var fs = require('fs');

var numerOfLines = undefined

function numberOfLinez(callback) {
	
fs.readFile(process.argv[2],function doneReading(err,buffer){
	var nrLines = buffer.toString().split('\n').length-1;
	numberOfLines = nrLines;
	callback();
		
	
})
}

function logNumber(){
	console.log(numberOfLines);
}

numberOfLinez(logNumber);