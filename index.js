var express = require('express');
var app = express();
const os = require('os');
var hostname = os.hostname() ; 

app.get('/', function (req, res) {
    
    
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write("------ HELLO WORLD RTOPUZ ---------\n");

headers = JSON.stringify(req.headers)

  for (var k in env) {
    res.write(k + ": " + env[k] + "\n");
  }
  res.write(headers );
    res.write("------hostname :" + hostname );
  res.end();

   console.log("hostname" ,hostname);
    
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
var server = app.listen(process.env.PORT || 3000);
module.exports = server;
