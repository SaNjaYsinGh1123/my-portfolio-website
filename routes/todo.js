const express = require('express');

const router = express.Router();

const passport = require('passport');

const todoController = require('../controllers/todo_controller')

router.get('/',passport.checkAuthentication,todoController.todo);
router.post('/add-task',passport.checkAuthentication,todoController.createTask);

router.post('/delete-task',passport.checkAuthentication,todoController.destroy);



module.exports = router;