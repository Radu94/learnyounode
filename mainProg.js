

var mymod = require('./mymodule.js');


	mymod(process.argv[2],process.argv[3],function(err,files){
      if(err)
      	 return console.log(err);
      
      
      	files.forEach(function(entry){


      	console.log(entry);
      });	
	});




