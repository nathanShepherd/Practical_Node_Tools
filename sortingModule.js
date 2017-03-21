module.exports = function sort(path, fileType) {
  //adds Array method that configures elements into descrete objects
  Array.prototype.linkByType = function() {
    for (var i = 0; i < this.length; ++i) {
      var fileObj = this[i].split('.');
      this[i] = fileObj;
    }
  };

  var fs = require('fs');
  var sortedFiles = '';
  var arr = []
  fs.readdir(path, function doneReading(err, arrFiles) {
    if(err) {
      return callback(err);
      console.log("Error reading directory");
    }
    //find file with specified extention
    //append filename to array for output
    arrFiles.linkByType();
    for (var i = 0; i < arrFiles.length; ++i) {
      if(arrFiles[i][1] == fileType) {
        sortedFiles += arrFiles[i][0] + '.' + arrFiles[i][1] + '~';
      }
    }
    arr = sortedFiles.split('~');
    arr.pop();
  })
  return arr;
};
