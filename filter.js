const fs = require('fs');
const path = require('path');
var exttype = "." + process.argv[3];

fs.readdir(process.argv[2], function(err, files){
    if (err) {
        return console.log(err);
    }
    
    for (var i = 0; i<files.length; i++){
        if(path.extname(files[i]) == exttype){
            console.log(files[i]);
        }
    }

})