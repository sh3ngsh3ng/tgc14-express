const express = require('express');
const hbs = require('hbs');

/* 1. setup express */
const app = express();

/* 1b. setup view engine */
app.set('view engine', 'hbs');

/* 1c. inform Express where to find our static files */
app.use(express.static('public'))

/* 2. Routes */
/* associate an endpoint with a function */
app.get('/', function(req,res){
    res.render('index')
})

/* 3. Start server */
app.listen(3000, function(){
    console.log("Server started");
})