//import file system module
var fs = require('fs');

//access passed arguments
var path = process.argv[2];
var fileType = process.argv[3];

//read directory contents
fs.readdir(path, function doneReading(err, arrFiles){
  if(err) {
    return console.log(err);
  }

  //finds and prints files with specified extention
  arrFiles.splitByType();
  for (var i = 0; i < arrFiles.length; ++i) {
    if(arrFiles[i][1] == fileType) {
      console.log(arrFiles[i][0] + '.' + arrFiles[i][1]);
    }
  }
});

//adds Array method that configures elements into discrete objects
Array.prototype.splitByType = function() {
  for (var i = 0; i < this.length; ++i) {
    var fileObj = this[i].split('.');
    this[i] = fileObj;
  }
}
