const db = require('../config/db'); // Import the database connection

// Render register page
exports.renderRegister = (req, res) => {
    res.render('register');
};

// Handle registration
exports.registerUser = (req, res) => {
    const { username, email, password } = req.body;

    // Input validation
    if (!username || !email || !password) {
        return res.status(400).render('register', { error: 'All fields are required' });
    }

    // Check if username or email already exists
    const query = 'SELECT * FROM users WHERE username = ? OR email = ?';
    db.query(query, [username, email], (err, results) => {
        if (err) {
            console.error('Database query error:', err); // Log the error for debugging
            return res.status(500).render('register', { error: 'Database error' });
        }
        if (results.length > 0) {
            return res.status(400).render('register', { error: 'Username or email already exists' });
        }

        // Insert new user into the database
        const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        db.query(insertQuery, [username, email, password], (err) => {
            if (err) {
                console.error('Insert error:', err); // Log the error for debugging
                return res.status(500).render('register', { error: 'Error registering user' });
            }
            res.redirect('/user/login'); // Redirect to login after successful registration
        });
    });
};

// Render login page
exports.renderLogin = (req, res) => {
    res.render('login');
};

// Handle login
exports.handleLogin = (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err || results.length === 0) {
            return res.status(400).render('login', { error: 'Invalid username or password' });
        }

        const user = results[0];

        // Check if the password matches
        if (user.password !== password) {
            return res.status(400).render('login', { error: 'Invalid username or password' });
        }

        // Create session
        req.session.user = user; // Create a session
        res.redirect('/'); // Redirect after successful login
    });
};

// Handle logout
exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Unable to log out');
        }
        res.redirect('/');
    });
};
