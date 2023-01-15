const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const crypto = require('crypto');
const User = require('../models/user_schema');
const google = require('../config/googleData');

passport.use(new GoogleStrategy({
    clientID:process.env.clientId,
    clientSecret: process.env.clientSecret,
    callbackURL:"https://sanjay-singh.vercel.app/google/callback"

},function(accessToken,refreshToken,profile,done){
    User.findOne({email:profile.emails[0].value}).exec(function(err, user){
        if(err){
            console.log('error in google strategy-passport', err);
            return ;
        }
        console.log(profile);
        if(user){
            return done(null,user)
        }
        else{
            User.create({
                name: profile.displayName,
                email: profile.emails[0].value,
                password: crypto.randomBytes(20).toString('hex')
            }, function(err,user){
                if(err){console.log('error in saving user info db using google auth',err)}
                done(null,user)
            })
        }
    })
}
))


passport.serializeUser(function(user,done){
    console.log('user.id is set in cookie google');
   done(null,user.id);
});

//this check whether cookie is present or not
passport.deserializeUser(function(id, done){
console.log('user.id in cookie is present is checked by passport google');
User.findById(id, function(err , user){
  if(err){
      console.log('error in finding user (passport deserialize)');
      return done(err);
  }
  return done(null , user);
});
});