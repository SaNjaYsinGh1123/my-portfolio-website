const mongoose = require('mongoose');

mongoose.set('strictQuery',true);


// mongoose.connect('mongodb://127.0.0.1:27017/project_users_db');


mongoose.connect('mongodb+srv://megacloud:megacloud@cluster0.gijawgh.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error',console.error.bind(console, 'error in connecting to user database'));

db.once('open', function(){
    console.log('successfully connected to the user database');
});