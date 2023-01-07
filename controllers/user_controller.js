const User = require('../models/user_schema');

const signUpMailer = require('../mailers/signup_mailer');


module.exports.signUp = function(req,res){
    console.log(req.user);
    return res.render('sign-up');
}

module.exports.signIn = function(req,res){
    return res.render('sign-in');
}

module.exports.signOut =function(req,res){
    req.logout(function(err)
    {
        if(err){
            return next(err);
        }
        req.flash('success','you have signed out!')
        return res.redirect('/');

    })
}

module.exports.profile = function(req,res){
    return res.render('profile', {title: "profile  page after sign in"});
}


module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password)
    {
        req.flash('error','passward and confirm password are not same');
        return res.redirect('back');
    }
    User.findOne({email : req.body.email}, function(err,user){
        if(err){console.log('error in finding user in users database');return}

        if(!user)
        {
            User.create(req.body ,function(err,user){
                if(err){console.log('error in creating user while signing up');return}
                
                req.flash('success','you are signed up successfully');
                console.log('new user added in projet_user_db');
                signUpMailer.newUserSignUp(req.body.email);
                return res.redirect('/user/sign-in');
            });
        }else{
            req.flash('error','user already has account');
            console.log('user already has account');
            return res.redirect('/user/sign-up');
            
        }
    });
}

module.exports.createSession = function(req,res){
    //console.log(req.user);
    req.flash('success','signed in successfully');
    return res.redirect('/user/profile');
}



































































































































































    