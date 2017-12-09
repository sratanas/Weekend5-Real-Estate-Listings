var express = require('express');
var bodyParser = require('body-parser');

var mongooseConnection = require('./modules/mongoose-connection');
var rent = require('./routes/rent.js');
var sale = require('./routes/sale.js');

var app = express();

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('server/public'));
app.use(bodyParser.json()); // needed for angular requests

/** ---------- DATABASE CONNECTION ---------- **/
mongooseConnection.connect(); // module to spin up mongoose

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/rent', rent);
app.use('/sale', sale);

/** ---------- START SERVER ---------- **/
var port = 5000;
app.listen(port, function() {
    console.log('Listening on port: ', port);
});

