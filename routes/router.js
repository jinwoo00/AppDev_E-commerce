const express = require('express');
const router =express.Router();
const dev = require('../controller/devController');

router.get('/', dev.app);
// router.get('/login', dev.login);
// router.get('/register', dev.register);
// router.get('/cart', dev.cart);
// router.get('/shop', dev.shop);
module.exports = router;