var http = require('http');
var outArr = ['','',''];

function getResponseFrom(address, order) {
  var outputData = "";
  http.get(address, function callback(res) {
    res.setEncoding('utf8');
    res.on("data", function (data) {
      outputData += data;
    })

    res.on("end", function () {
      outArr[order] = outputData;
      gotResponse();
    })
  })
}

var after = require("after");

getResponseFrom(process.argv[2], 0);
getResponseFrom(process.argv[3], 1);
getResponseFrom(process.argv[4], 2);

gotResponse = after(3, printResponses);

function printResponses() {
  for (var i = 0; i < outArr.length; ++i) {
    console.log(outArr[i]);
  }
}
