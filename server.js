var express = require('express');
var middleware = require('./middleware.js')
var app = express();
var PORT = 3000;


app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('abount us');
});

app.use(express.static(__dirname + "/public"));
app.listen(PORT, function(){
	console.log('express server started on ' + PORT);
});