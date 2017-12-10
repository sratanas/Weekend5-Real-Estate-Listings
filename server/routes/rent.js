var express = require('express');
var router = express.Router();
var Rent = require('../models/rent.schema');


router.get('/', function(req, res){
    // a get request for all games
    Rent.find({}, function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with game find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
});

router.post('/', function(req, res){
    var addRent = new Rent(req.body);

    addRent.save(function(errorMakingDatabaseQuery,data){
        if (errorMakingDatabaseQuery){
            console.log('error with sale save', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});


router.delete('/:id', function(req, res) {

    Rent.remove({_id:req.params.id }, function(errorMakingDatabaseQuery,data){
        if (errorMakingDatabaseQuery){
            console.log('error with delete', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

          
module.exports = router;