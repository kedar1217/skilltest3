// mongoose library
const mongoose = require('mongoose');

// Connect to the database
mongoose.connect("mongodb+srv://kkamalpreet847:df1oreNkuZ4O0Oe1@csvproject.si7etoe.mongodb.net/CSV-Upload?retryWrites=true&w=majority");

const db = mongoose.connection;

// if error occur
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));


// succesfull connection
db.once('open',function(){
    console.log(" Hurray ! Connected. Database ");
});

module.exports = db;