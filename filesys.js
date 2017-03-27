var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var lines = buffer.toString();
var lines2 = lines.split('\n');
console.log(lines2.length-1);