//Simple Node TCP Server
var net = require('net');
var server = net.createServer(function listener(socket) {
  var date = new Date();

  var year = date.getFullYear().toString();

  var month = getMonth();
  function getMonth() {
    if (date.getMonth() < 10) {
      return "0" + (date.getMonth() + 1).toString();
    } else {
      return date.getMonth().toString();
    }
  }

  var day = getDay();
  function getDay() {
    if (date.getDate() < 10) {
      return "0" + date.getDate().toString();
    } else {
      return date.getDate().toString();
    }
  }

  var hours = getHours();
  function getHours() {
    if (date.getHours() < 10) {
      return "0" + date.getHours().toString();
    } else {
      return date.getHours().toString();
    }
  }

  var minutes = getMinutes();
  function getMinutes() {
    if (date.getMinutes() < 10) {
      return "0" + date.getMinutes().toString();
    } else {
      return date.getMinutes().toString();
    }
  }

  //YYYY-MM-DD hh:mm
  var serverDate = year + '-' + month + '-' + day + " " + hours + ":" + minutes;
  socket.write(serverDate + '\n');
  socket.end();
});

server.listen(process.argv[2]);
