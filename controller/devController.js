const product = require('../model/ProductModel');

const web ={
    app:(req, res)=>{
        res.render('home');
    },
    checkout:(req, res)=>{
        res.render('checkout');
    },
    cart:(req, res)=>{
        res.render('cart');
    },
    about:(req, res)=>{
        res.render('about');
    },
    contact:(req, res)=>{
        res.render('contact');
    },
    news:(req, res)=>{
        res.render('news');
    },
    shop:(req, res)=>{
        res.render('shop');
    }
};    
module.exports = web;