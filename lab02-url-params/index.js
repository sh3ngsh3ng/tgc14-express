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

app.get('/hello/:name/', function(req,res){
    let name = req.params.name;
    res.send("<h1>Hello " + name + "</h1>");
})

app.get('/addTwo/:n1/:n2', function(req,res){
    let n1 = parseInt(req.params.n1);
    let n2 = parseInt(req.params.n2);
    let total = n1 + n2
    res.send("<h1>" + total + "</h1>")
});     

app.get('/luckyNumber', function(req,res){
    let lucky = Math.floor(Math.random() * 100)
    res.send("<h1>Your lucky number is " + lucky + "</h1>")
})


// START SERVER
// first argument : port number
app.listen(3000, function(){
    console.log("Server has started");
})