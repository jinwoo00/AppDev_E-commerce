const products = require('../model/ProductModel');
const web = {
    app: (req, res) => {
        products.getAll((err, result) => {
            if (err) throw err;
            res.render('home', { products: result });
        });
    },
    shop: (req, res) => {
        products.getAll((err, result) => {
            if (err) throw err;
            res.render('shop', { product: result }); // Passing product data to shop.ejs
        });
    },
    checkout: (req, res) => {
        res.render('checkout');
    },
    cart: (req, res) => {
        // Initialize cart if it doesn't exist
        if (!req.session.cart) {
            req.session.cart = []; // Or initialize with any default values
        }

        const cartItems = req.session.cart; // Retrieve cart items from session
        res.render('cart', { cartItems }); // Pass cart items to the cart view
    },
    about: (req, res) => {
        res.render('about');
    },
    contact: (req, res) => {
        res.render('contact');
    },
    news: (req, res) => {
        res.render('news');
    },
    singleProduct: (req, res) => {
        res.render('singleProduct');
    },
};

module.exports = web;
