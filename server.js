var express = require('express');
var path = require("path");

var app = express();

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/dist/bundle.js', function(request, response) {
  response.sendFile(path.join(__dirname + '/dist/bundle.js'));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});