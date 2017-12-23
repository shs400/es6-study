var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});