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
        if (!req.session.cart) {
            req.session.cart = [];
        }
        const cartItems = req.session.cart; 
        res.render('cart', { cartItems });
    },
    addToCart: (req, res) => {
        const productId = req.body.productId;
        const quantity = req.body.quantity || 1;
    
        console.log('Adding to cart - Product ID:', productId, 'Quantity:', quantity); // Log product ID
    
        // Initialize the cart if it doesn't exist
        if (!req.session.cart) {
            req.session.cart = [];
        }
    
        products.getById(productId, (err, product) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Internal Server Error');
            }
    
            if (!product) {
                console.log('Product not found for ID:', productId); // Log the ID of the product not found
                return res.status(404).send('Product not found');
            }
    
            // Check if the product is already in the cart
            const existingProductIndex = req.session.cart.findIndex(item => item.id === product.id);
    
            if (existingProductIndex > -1) {
                // If it exists, update the quantity
                req.session.cart[existingProductIndex].quantity += quantity;
            } else {
                // If it doesn't exist, add it to the cart
                req.session.cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: quantity,
                    image: product.image // Assuming the product object has an image property
                });
            }
    
            console.log('Current cart:', req.session.cart); // Log the current cart for debugging
            res.redirect('/cart'); // Redirect to cart after adding
        });
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
