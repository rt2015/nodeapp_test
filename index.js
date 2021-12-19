var express = require('express');
var app = express();
const os = require('os');
var hostname = os.hostname() ; 

var message = "";

          

app.get('/', function (req, res) {
    
    
message = "------ HELLO WORLD RTOPUZ ---------\n" ;
    
 
headers = JSON.stringify(req.headers)

message =   message + "------hostname :" + hostname  + "\n";
     message =   message +   "-" + headers;  

     res.send(message);
    
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
