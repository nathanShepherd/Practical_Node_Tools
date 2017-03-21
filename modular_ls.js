//import sorting module
var sort = require('./sortingModule.js');

var path = process.argv[2];
var fileType = process.argv[3];
var processedFiles = [];
//processedFiles = processedFiles.concat(sort(path, fileType));

/*
function exported(err, data) {
  if(err){
    return callback(err);
    console.log("Error accessing module");
  }
}
*/

console.log(sort(path, fileType));
