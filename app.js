const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router'); // Existing routes
const userRoutes = require('./routes/userRoutes'); // Add this to handle login/register routes
const app = express();
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Session configuration
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set secure: true if using HTTPS
}));

// Main routes
app.use('/', routes);
app.use('/user', userRoutes);  // Use user routes for login/register

// Listen to the server
app.listen(3001, () => {
    console.log("Listening to the server on http://localhost:3001");
});
