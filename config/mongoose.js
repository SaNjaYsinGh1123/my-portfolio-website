const mongoose = require('mongoose');

mongoose.set('strictQuery',true);



mongoose.connect(process.env.uri);

const db = mongoose.connection;

db.on('error',console.error.bind(console, 'error in connecting to user database'));

db.once('open', function(){
    console.log('successfully connected to the user database');
});