var express = require('express'),
	app = express(),
	path = require('path'),
	port = 8000,
	bp = require('body-parser'),
	session = require('express-session');

app.use(express.static(path.join(__dirname, './client/dist')));
app.use(bp.json());
app.use(session({secret:"key", saveUninitialized: true}));


// require('./server/config/mongoose')

require('./server/config/route')(app)

app.listen(port, function(){
	console.log("Listening on Port: " + port)
})