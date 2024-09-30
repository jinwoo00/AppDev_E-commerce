const express = require('express');
const router =express.Router();
const dev = require('../controller/devController');

router.get('/', dev.app);
router.get('/checkout', dev.checkout);
router.get('/cart', dev.cart);
router.get('/contact', dev.contact);
router.get('/about', dev.about); 
router.get('/news', dev.news); 
router.get('/shop', dev.shop); 
module.exports = router;