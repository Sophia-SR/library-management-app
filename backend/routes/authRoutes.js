// authRoutes.js

const express = require('express');
const router = express.Router();
const { userSignUp, adminSignUp } = require('../controllers/authController');

// User sign-up route
router.post('/user/signup', userSignUp);

// Admin sign-up route
router.post('/admin/signup', adminSignUp);

module.exports = router;
