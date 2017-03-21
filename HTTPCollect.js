var http = require('http');
var url = process.argv[2];
var outputData = "";

http.get(url, function callback(res) {
  res.setEncoding('utf8');
  res.on("data", function (data) {
    outputData += data;
  })

  res.on("end", function () {
    console.log(outputData);
  })
})
