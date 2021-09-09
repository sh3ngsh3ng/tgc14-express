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

/* 1e. register our own ifEquals helper */
hbs.handlebars.registerHelper('ifEquals', function(arg1, arg2, options){
    if (arg1 == arg2) {
        return options.fn(this); // to display the elements nested inside the helper
    } else {
        return options.inverse(this);
    }
} )

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

app.get('/fruits', function(req,res){
    let fruits = ['apples', 'bananas', 'cherries'];
    res.render('fruits',{
        'fruits': fruits,
        'limit': 15,
        'current':15
    })
})

/* 3. Start server */
app.listen(3000, function(){
    console.log("Server started");
})