// requiring dependencies
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var path = require('path');

// connection and orm
var connection = require('./burger/config/connection.js');
var orm = require('./burger/config/orm.js');

// handlebars & handlebars express 
// var exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

// making the variable app for express and using port 3000
var app = express();
var appPORT = process.env.PORT || 3000;

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static('public'));

// requriing of the api routes
require('./burger/routing/api-routes.js')(app);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/burger/public/index.html'));
    // handlebars request 
    // res.render('index', data);
});

// listening for the server and console logging the port number
app.listen(appPORT, function(){
	console.log("App is now listening on PORT: " + appPORT);
});