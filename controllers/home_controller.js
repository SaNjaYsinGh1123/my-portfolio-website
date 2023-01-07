module.exports.home = function(req,res){
    // res.cookie('user_id',25);
    // console.log('cookies:',req.cookies);
    return res.render('home-portfolio')
}

module.exports.chat = function(req,res){
    
    return res.render('chatEngine')
}
module.exports.calculator = function(req,res){
    return res.render('calculator')
}

module.exports.music = function(req,res){
    return res.render('music')
}

module.exports.game = function(req,res){
    return res.render('game')
}

