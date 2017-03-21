//import file system module
var fs = require('fs');

//populate buffer with file path from node arguments
var path = process.argv[2];
fs.readFile(path, function doneReading(err, buffer) {
  if(err) {
    return console.log(err);
  }
  var strBuff = buffer.toString()

  var lines = strBuff.split('\n');
  var numLines = lines.length - 1;

  console.log(numLines);
});
