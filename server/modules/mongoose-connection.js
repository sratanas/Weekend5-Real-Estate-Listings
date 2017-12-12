var mongoose = require('mongoose');

// Mongo Connection //
var mongoURI = '';
// process.env.MONGODB_URI will only be defined if you
// are running on Heroku
if(process.env.MONGODB_URI != undefined) {
    // use the string value of the environment variable
    mongoURI = process.env.MONGODB_URI;
} else {
    // use the local database server
    mongoURI = 'mongodb://localhost:27017/databasename';
}

mongoose.connect(databaseUrl, {
  useMongoClient: true
});

mongoose.connection.on('error', function(err){
   if(err) {
     console.log("MONGO ERROR: ", err);
   }
   res.sendStatus(500);
});

mongoose.connection.on('open', function(){
   console.log("Connected to Mongo!");
});

module.exports = mongoose;



// function connect() {
//     var mongoose = require('mongoose');

//     /** -------- MONGOOSE CONNECTION --------**/
//     var databaseUrl = 'mongodb://localhost:27017/realestate';
//     mongoose.connect(databaseUrl);

//     mongoose.connection.on('connected', function () {
//         console.log('mongoose connected to : ', databaseUrl);
//     });

//     mongoose.connection.on('error', function (err) {
//         console.log('mongoose connection error: ', err);
//     });
// };

// module.exports = {
//     connect: connect
// };