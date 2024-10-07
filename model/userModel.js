const db = require('../config/db'); // Adjust the path if necessary

const User = {
    // Function to find a user by username or email
    findOne: (condition, callback) => {
        const query = 'SELECT * FROM users_tbl WHERE ' + condition;
        db.query(query, callback);
    },

    // Function to create a new user
    create: (userData, callback) => {
        const query = 'INSERT INTO users_tbl (username, email, password) VALUES (?, ?, ?)';
        db.query(query, [userData.username, userData.email, userData.password], callback);
    }
};

module.exports = User;
