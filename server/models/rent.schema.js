var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// this will enforce our object properties
// did not include "require" in case it causes errors
var rentSchema = new Schema({
    rent: { type: Number },
    sqft: { type: Number },
    city: { type: String }, 
});


// var collectionName = 'rentals'
// var M = mongoose.model('rentals', rentschema, rentals)

module.exports = mongoose.model('rentals', rentSchema);