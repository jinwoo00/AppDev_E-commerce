// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController'); // Adjust path if necessary

router.get('/register', userController.renderRegister);
router.post('/register', userController.registerUser);
router.get('/login', userController.renderLogin);
router.post('/login', userController.handleLogin);
router.get('/logout', userController.logout);

module.exports = router;
