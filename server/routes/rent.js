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

// router.delete('/:_id', function(req, res){
//     var addRent = new Rent(req.body);

//     addRent.save(function(errorMakingDatabaseQuery,data){
//         if (errorMakingDatabaseQuery){
//             console.log('error with sale save', errorMakingDatabaseQuery);
//             res.sendStatus(500);
//         } else {
//             res.sendStatus(201);
//         }
//     });
// });

module.exports = router;