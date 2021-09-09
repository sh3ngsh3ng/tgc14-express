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

/* 1e. enable form process */
app.use(express.urlencoded({
    'extended': false
}))

/* 2. Routes */
/* associate an endpoint with a function */
app.get('/contact-us', function(req,res){
    res.render('contact')
})

app.post('/contact-us', function(req,res){
    res.send("form recieved")
    console.log(req.body);
    // extract out the contactMethod
    // three cases:
    // case 1: user select more than one --> an array of the selected methods
    // case 2: user select only one --> string of the selected method
    // case 3: user didn't select any --> does not exist (aka, undefined)

    // goal: always have an array
    // case 1: array of all the selected methods
    // case 2: array of the single selected method
    // case 3: empty array

    // test if case 3: user didn't select any
    let contactMethods = req.body.contactMethod;
    if (contactMethods) {
        // exists: checkif contactMethods is an array or not
        if (Array.isArray(contactMethods)==false) {
            // if contactMethods is not array, then it must be a string
            // assume, contactMethods = "email"
            contactMethods = [ contactMethods ]
            // => contactMethods = [ "email" ]
        }
    } else {
        // otherwise: assign to be an empty array --> CASE 3
        contactMethods = [];
    }
    console.log(contactMethods);
})

/* 3. Start server */
app.listen(3000, function(){
    console.log("Server started");
})