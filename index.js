// 1 install express and set server
const express = require('express');


// 6 install cookie parser for reading and writing cookie value 
const cookieParser = require('cookie-parser');


const app = express();



// 4 installing mongoose ,setup mongoose in config folder
const db = require('./config/mongoose');

// 5 use to decode sign-up form data
app.use(express.urlencoded());

// 6  tell the server to use cookie-parser
app.use(cookieParser());

// 8 install express-session 
const session = require('express-session');

//7 install passport and passport local 
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

// 10 install passport-auth20
const googleAuth= require('./config/googleAuth');

// 9 install connect mongo to save the cookie in mongostore
const  MongoStore = require('connect-mongo');

// 11 install
const flash = require('connect-flash');

//12 import flash middle ware
const flashMware = require('./config/middleware');


// 13
// const chatServer = require('http').Server(app);
// const chatSockets = require('./config/chat_sockets').chatSockets(chatServer);
// chatServer.listen(process.env.PORT || 5000,function(err){
//     if(err){
//         console.log('error:',err);
//     }
//     console.log('chat server is running on :',5000);
// });


// 14
app.use(express.static('./assets/'));


//8 define session 
app.use(session(
    {
     name: 'codeial',
     secret: 'skillfuldhfkukukf',
     saveUninitialized: false,
     resave: false,
     cookie:  {
      maxAge: (1000 * 60 * 100)
     },
     store:MongoStore.create({
        // mongoUrl:process.env.uri,
        mongoUrl:'mongodb://127.0.0.1:27017/project_users_db',
        autoRemove: "disabled"
     },
    function(err){ 
        console.log(err || 'connect-mongodb setup ok');
    })
  }));

//8 tell passport to use express-session i.e session
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// 11
app.use(flash());
// 12
app.use(flashMware.setflash);

// 3 insall ejs and set 'view engine' to 'ejs'
app.set('view engine','ejs');
app.set('views','./views');

// 2 use express router
app.use('/',require('./routes'));


// 1 listening port
app.listen(process.env.PORT ||8000, function(err){
    if(err){
        console.log('error:',err);
    }
   console.log('server is running on :',8000);
});