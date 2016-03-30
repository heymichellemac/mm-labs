var express = require('express');
//Add greeting module
var greeting = require('./greeting');
//create an express app
var app = express();

// Configure the app to serve up content from public directory
app.use(express.static(__dirname + '/public'));

//add route for /greeting 
app.get('/greeting',function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(greeting.english());
});

// Listen on port 8000, IP defaults to 127.0.0.1
app.listen(8000)

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");