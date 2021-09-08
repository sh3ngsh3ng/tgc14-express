// import in the express package
const express = require('express');

// import in the hbs package
const hbs = require('hbs');

let app = express();

// instruct the express app to use hbs as the view engine
app.set('view engine', 'hbs')

// tell Express where to find static files
app.use(express.static('public'))

// ROUTES HERE
// a route associate a HTTP method and a URL (aka endpoint) with a function
// when the server recieves a request for the given endpoint,
// it will call the function
// the function will recieve two arguments:
// the first argument is request
// the second argument is repsonse
app.get('/', function(req, res){
    res.render('main-page')
})

app.get('/hello/:name', function(req,res){
    let name = req.params.name;
    res.render('hello',{
        'personName': name
    })
})

app.get('/addTwo/:n1/:n2', function(req,res){
    let n1 = req.params.n1;
    let n2 = req.params.n2;
    let total = parseInt(n1) + parseInt(n2);
    res.render('total.hbs',{
        'number1': n1,
        'number2': n2,
        'total': total
    })

})

// START SERVER
// first argument : port number
app.listen(3000, function(){
    console.log("Server has started");
})