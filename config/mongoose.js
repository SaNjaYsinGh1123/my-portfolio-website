const mongoose = require('mongoose');

mongoose.set('strictQuery',true);

const uri = 'mongodb+srv://megacloud:megacloud@cluster0.gijawgh.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error',console.error.bind(console, 'error in connecting to user database'));

db.once('open', function(){
    console.log('successfully connected to the user database');
})