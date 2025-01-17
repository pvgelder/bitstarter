var express = require('express')
var app = express();

var fs = require('fs');
//var buf = new Buffer(fs.readFileSync('index.html');
//var buf = fs.readFileSync('./index.html');
//var message = buf.toString();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
//  response.send('Hello World2!')
//  response.send(message);
  //response.send('done?');
  response.send(fs.readFileSync('./index.html').toString());
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
