// app.js = A node app that will help us learn about our classmates:
// Require the modules we're going to need:
var express = require("express"),
    ejs = require("ejs"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");
    
// Now instantiate our express app:
var app = express();

// First, let's set the view engine to be "EJS"
app.set('view engine', 'ejs');

// Set up body parser
app.use(bodyParser.urlencoded({extended: true}));
 

app.get('/', function(req, res){
	res.render("index"); 
});


// Using the POST method with an HTML form to send data to a webpage
app.post("/add", function(req, res) {
	var a = Number(req.body.add1); 
	var b = Number(req.body.add2); 
	res.send("The result is " + (a+b)); 
});

app.post("/subtract", function(req, res) {
	var a = Number(req.body.sub1); 
	var b = Number(req.body.sub2); 
	res.send("The result is " + (a-b)); 
});

app.post("/multiply", function(req, res) {
	var a = Number(req.body.mul1); 
	var b = Number(req.body.mul2); 
	res.send("The result is " + (a*b)); 
});

app.post("/divide", function(req, res) {
	var a = Number(req.body.div1); 
	var b = Number(req.body.div2); 
	res.send("The result is " + (a/b)); 
});

app.listen(3000);