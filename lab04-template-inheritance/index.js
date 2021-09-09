const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');

/* 1. setup express */
const app = express();

/* 1b. setup view engine */
app.set('view engine', 'hbs');

/* 1c. setup wax-on for hbs */
wax.on(hbs.handlebars);
// inform wax where to find our layouts file
wax.setLayoutPath('./views/layouts');

/* 1d. inform Express where to find our static files */
app.use(express.static('public'))

/* 2. Routes */
/* associate an endpoint with a function */
app.get('/', function(req,res){
    res.render('index')
})

app.get('/about-us', function(req,res){
    res.render('about-us',{
        "data":"whatever"
    })
})

/* 3. Start server */
app.listen(3000, function(){
    console.log("Server started");
})