

const fs = require('fs');
const path = require('path');
var fileList = [];

module.exports = function (directory,extension,callback)
{
fs.readdir(directory, function(err, files){
    if (err) {
        return callback(err);
    }
    var ext = '.'+extension;
    
    for (var i = 0; i<files.length; i++){
        if(path.extname(files[i]) == ext){
           fileList.push(files[i]);
        }
    }
     return callback(null,fileList);

})
}




