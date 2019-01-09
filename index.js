var express = require('express')
var app = express();
var http = require('http').Server(app);

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});

function getRandomAnimSpeed(baseSpeed) {
    if (typeof baseSpeed === 'undefined') { this.baseSpeed = 5; } else {this.baseSpeed = baseSpeed;}
    return this.baseSpeed*(Math.random() * (1.5 - 0.5) + 0.5);
}