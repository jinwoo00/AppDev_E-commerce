const express = require('express');
const router =express.Router();
const dev = require('../controller/devController');

router.get('/', dev.app);
router.get('/checkout', dev.checkout);
router.get('/cart', dev.cart);
//router.post('/cart', dev.addToCart);
router.get('/contact', dev.contact);
router.get('/about', dev.about); 
router.get('/news', dev.news); 
router.get('/shop', dev.shop); 
router.get('/singleProduct', dev.singleProduct); 
router.get('/singlenews', dev.singlenews);
router.get('/home2', dev.home2);

module.exports = router;