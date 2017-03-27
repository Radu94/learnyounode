/*

var http = require('http');
var urls =[process.argv[2],process.argv[3],process.argv[4]];

var completed_requests = 0;

for(i in urls){
	var result=[];
http.get(urls[i],function(res){
	res.on('data',function(chunk){
		result.push(chunk);

	});

	res.on('end',function(){
		completed_requests++;
		if(completed_requests == urls.length)
			console.log(result.join(''));
	});
});


}
*/
const request = require('request-promise');
const urls =[process.argv[2],process.argv[3],process.argv[4]];
const promises = urls.map(url => request(url));
Promise.all(promises).then((data) => {
    // data = [promise1,promise2]
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
}); 
