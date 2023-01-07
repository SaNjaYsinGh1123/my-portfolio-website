const express = require('express');
const passport = require('passport');

const router = express.Router();

const homeController = require('../controllers/home_controller');
const userController = require('../controllers/user_controller');

// console.log('router  is loaded');

router.get('/',homeController.home);

router.get('/google-sign',passport.authenticate('google', {scope: ['profile','email']}));

router.get('/google/callback',passport.authenticate('google',{failureRedirect: 'user/sign-in'}),userController.createSession);

router.get('/chat-engine',passport.checkAuthentication,homeController.chat);
router.get('/calculator',passport.checkAuthentication,homeController.calculator);
router.get('/music-player',passport.checkAuthentication,homeController.music);
router.get('/ping-pong-game',passport.checkAuthentication,homeController.game);
router.use('/todo-app',require('./todo'));
router.use('/user',require('./user'));

module.exports = router;