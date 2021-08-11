const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/usersController');

router.get('/', userControllers.get_all_users);

router.post('/signup', userControllers.sign_up);

router.post('/login', userControllers.log_in);

router.get('/profile/:userId', userControllers.get_user_id);

router.delete('/:userId', userControllers.delete_user);

module.exports = router;
