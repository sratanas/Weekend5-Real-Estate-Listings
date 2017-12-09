var express = require('express');
var router = express.Router();
var Sale = require('../models/sale.schema');

router.get('/', function(req, res){
    // a get request for all games
    Sale.find({}, function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with game find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
});

router.post('/', function(req, res){
    var addSale = new Sale(req.body);

    addSale.save(function(errorMakingDatabaseQuery,data){
        if (errorMakingDatabaseQuery){
            console.log('error with sale save', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});

module.exports = router;