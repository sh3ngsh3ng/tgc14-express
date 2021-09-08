// import in the express package
const express = require('express');
let app = express();

// ROUTES HERE
// a route associate a HTTP method and a URL (aka endpoint) with a function
// when the server recieves a request for the given endpoint,
// it will call the function
// the function will recieve two arguments:
// the first argument is request
// the second argument is repsonse
app.get('/', function(req, res){
    res.send("Hello World")
})

app.get('/about-us', function(req,res){
    res.send("About Us");
})

app.get('/contact-us', function(req,res){
    res.send("<h1>Contact Us</h1>")
})

// START SERVER
// first argument : port number
app.listen(3000, function(){
    console.log("Server has started");
})