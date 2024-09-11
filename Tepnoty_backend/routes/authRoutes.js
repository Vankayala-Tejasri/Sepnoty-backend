const express = require('express');
const { signup, login, getProfile ,get_details} = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', authMiddleware, getProfile);
router.get('/get_details',get_details)


module.exports = router;