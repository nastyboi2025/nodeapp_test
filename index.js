/*var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello Nas" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, Its working!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;*/

var http = require('http')

var port = 4000

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hello World\n')
})

server.listen(port)

console.log('Server running at http://localhost:' + port)
