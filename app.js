const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router');
const adminRouter = require('./routes/adminrouter');
const app =express();
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes);
app.use(express.static('public'));

app.use('/admin', adminRouter);

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set secure: true if using HTTPS
}));

app.listen(3001,()=>{console.log("Listening to the server on http://localhost:3001")});