var http = require('http');
var fs = require('fs');
var date = new Date().toISOString();
var server = http.createServer(function(req,res){
var src = fs.createReadStream(process.argv[3]);
src.pipe(res);
});
server.listen(process.argv[2]);

