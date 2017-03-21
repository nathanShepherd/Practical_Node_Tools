var url = process.argv[2];

var http = require('http');
http.get(url, function callback(res) {
  //response is Node Stream object that emits events
  //events = {data, error, end}
  res.setEncoding("utf8");
  res.on("data", function (data) {
    console.log(data);
  })
});
