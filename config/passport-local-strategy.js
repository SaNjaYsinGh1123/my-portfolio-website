const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;



const User = require('../models/user_schema'); 

passport.use(new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true
    },
    function(req,email,password,done){
        User.findOne({email: email},function(err,user){
            if(err){
                req.flash('error',"error in signing the user")
                console.log('error in passport:',err);
                return done(err);    
        }
        if(!user || user.password != password){
            req.flash('error','Invalid Username/Password');
            console.log('Invalid Username/Password');
            return done(null,false);
        }

        return done(null,user);
        });

    }
));


passport.serializeUser(function(user,done){
           console.log('user.id is set in cookie');
          done(null,user.id);
 });

 //this check whether cookie is present or not
passport.deserializeUser(function(id, done){
     console.log('user.id in cookie is present is checked by passport');
     User.findById(id, function(err , user){
         if(err){
             console.log('error in finding user (passport deserialize)');
             return done(err);
         }
         return done(null , user);
     });
 });

 //check if the user is authenticated
passport.checkAuthentication = function(req,res,next){

    if(req.isAuthenticated()){
        return next();
    }

    // if the user is not signed in
    return res.redirect('/user/sign-in');
}

passport.setAuthenticatedUser = function(req,res,next){
    
    if(req.isAuthenticated()){
        //res.user contains the current signed in user from the session cookie and we are just sending this to the local for the views
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;