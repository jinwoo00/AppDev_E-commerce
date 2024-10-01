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
        res.render('cart');
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
