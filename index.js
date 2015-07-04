var express = require('express')
var app = express();

var fs = require('fs');
//var buf = new Buffer(fs.readFileSync('index.html');
var buf = fs.readFileSync('index.html');
var message = buf.toString();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response, message) {
  response.send('Hello World2!')
  responde.send(message);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
