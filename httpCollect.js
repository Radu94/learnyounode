var http = require('http');
var list =[];
var nrOfChars = 0;


http.get(process.argv[2],function(res){
	res.setEncoding('utf8');
	res.on('data',function(chunk){
		list.push(chunk);
		nrOfChars+=chunk.length;

	})
	res.on('end',function(){
		console.log(nrOfChars);
		console.log(list.join(''));
		
		
	})

})
