var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var port = 9999;

app.set('view engine', 'ejs');
app.set(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('index', request.query);
});

app.get('/reflect.json', function(request, response) {
  response.json(request.query);
});

server.listen(9999, function() {
  console.log("Server listening on port " + port);
});

module.exports = server;