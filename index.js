var express = require('express');
var app = express();
const os = require('os');
var hostname = os.hostname() ; 

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From rtopuz38----hostname:" + hostname }');
    console.log("hostname" ,hostname);
    
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
var server = app.listen(process.env.PORT || 3000);
module.exports = app,server;
