var net = require('net');
function addZero(i){
	if(i<10){
		i = '0'+i;
	}
	return i;
}

var date = new Date();
var month = '0'+(date.getMonth()+1);
var curentDate = date.getFullYear()+'-'+month+'-'+date.getDate()+' '+addZero(date.getHours())+':'+addZero(date.getMinutes());


var server = net.createServer(function(socket){
	socket.write(curentDate);
	socket.write('\n');
	socket.end();

})

server.listen(process.argv[2]);

